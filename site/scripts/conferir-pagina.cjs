/**
 * Conferencia automatica de TODAS as paginas geradas.
 *
 * Nao substitui olhar o site no navegador — isso so uma pessoa faz. O que da
 * para provar por codigo e provado aqui: dados estruturados validos, telefone
 * correto em todo lugar, imagem com texto alternativo, nenhum link vazio.
 *
 * Percorre o dist inteiro, entao cada pagina nova entra na conferencia sozinha,
 * sem ninguem precisar lembrar de adicionar.
 *
 * Rodar com:  node scripts/conferir-pagina.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const DIST = path.resolve(__dirname, '..', 'dist');
const TELEFONE_ESPERADO = '+5521964621885';
const ZAP_ESPERADO = '5521964621885';

/**
 * Orcamento de peso, em kB JA COMPRIMIDOS.
 *
 * A hospedagem comprime o HTML antes de enviar, entao o tamanho em disco nao
 * e o que o celular baixa: 82 kB de HTML viram cerca de 13 kB na rede. Medir o
 * arquivo cru vigia um numero que ninguem experimenta — e acusa problema onde
 * nao ha, ou deixa passar onde ha.
 */
const LIMITE_KB = 25;

/** Acha todo index.html gerado, em qualquer nivel de pasta. */
function listarPaginas(pasta) {
  const encontradas = [];

  for (const item of fs.readdirSync(pasta, { withFileTypes: true })) {
    const caminho = path.join(pasta, item.name);
    if (item.isDirectory()) encontradas.push(...listarPaginas(caminho));
    else if (item.name.endsWith('.html')) encontradas.push(caminho);
  }

  return encontradas;
}

function conferirPagina(arquivo) {
  const html = fs.readFileSync(arquivo, 'utf8');
  const rota = '/' + path.relative(DIST, arquivo).replace(/\\/g, '/').replace(/index\.html$/, '');
  const falhas = [];

  const exigir = (descricao, condicao) => {
    if (!condicao) falhas.push(descricao);
  };

  // --- Dados estruturados ---------------------------------------------------
  const blocos = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const tipos = [];

  for (const [, conteudo] of blocos) {
    try {
      tipos.push(JSON.parse(conteudo)['@type']);
    } catch (erro) {
      falhas.push(`JSON-LD inválido: ${erro.message}`);
    }
  }

  exigir('negócio marcado como Locksmith', tipos.includes('Locksmith'));
  exigir('perguntas marcadas como FAQPage', tipos.includes('FAQPage'));

  // --- Contato --------------------------------------------------------------
  const ligacoes = [...html.matchAll(/href="tel:([^"]+)"/g)].map((m) => m[1]);
  const zaps = [...html.matchAll(/href="https:\/\/wa\.me\/(\d+)/g)].map((m) => m[1]);

  exigir('tem botão de ligar', ligacoes.length > 0);
  exigir(`todo tel: usa ${TELEFONE_ESPERADO}`, ligacoes.every((n) => n === TELEFONE_ESPERADO));
  exigir('tem botão de WhatsApp', zaps.length > 0);
  exigir('todo WhatsApp usa o mesmo número', zaps.every((n) => n === ZAP_ESPERADO));

  // --- SEO e acessibilidade -------------------------------------------------
  exigir('tem título', /<title>[^<]{20,}<\/title>/.test(html));
  exigir('tem meta description', /<meta name="description" content="[^"]{80,}"/.test(html));
  exigir('tem canonical', /rel="canonical"/.test(html));
  exigir('idioma pt-BR', /<html lang="pt-BR"/.test(html));
  exigir('exatamente um H1', [...html.matchAll(/<h1[\s>]/g)].length === 1);

  const imagens = [...html.matchAll(/<img[^>]*>/g)].map((m) => m[0]);
  exigir('toda imagem tem alt', imagens.every((tag) => /alt="[^"]+"/.test(tag)));
  exigir('nenhum link vazio', [...html.matchAll(/href="(#|)"/g)].length === 0);

  // `querySelector` em elemento que aparece várias vezes na página pega só o
  // primeiro e deixa os outros parados. Foi o que congelou o segundo relógio
  // na hora do build — bug invisível para o compilador e para os tipos.
  for (const [, atributo] of html.matchAll(/querySelector\(\s*["'`]\[([a-z-]+)\]["'`]/g)) {
    const ocorrencias = [...html.matchAll(new RegExp(`${atributo}[\\s=>"]`, 'g'))].length;
    exigir(
      `querySelector em [${atributo}], que aparece ${ocorrencias}x — use querySelectorAll`,
      ocorrencias <= 2 // o próprio script conta como uma ocorrência
    );
  }

  // Titulo e descricao duplicados entre paginas confundem o Google.
  const titulo = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const descricao = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';

  // Gzip como referência: é o que a hospedagem envia. O Brotli que a Vercel
  // usa comprime um pouco mais, então esta medida é conservadora de propósito.
  const pesoKb = zlib.gzipSync(Buffer.from(html)).length / 1024;
  const pesoCruKb = Buffer.byteLength(html) / 1024;

  exigir(
    `peso abaixo de ${LIMITE_KB} kB comprimidos (está em ${pesoKb.toFixed(1)})`,
    pesoKb < LIMITE_KB
  );

  return { rota, falhas, titulo, descricao, pesoKb, pesoCruKb };
}

// --- Execucao ---------------------------------------------------------------
if (!fs.existsSync(DIST)) {
  console.error('Pasta dist não encontrada. Rode `npm run build` antes.');
  process.exit(1);
}

const resultados = listarPaginas(DIST).map(conferirPagina);
let totalDeFalhas = 0;

for (const { rota, falhas, pesoKb, pesoCruKb } of resultados) {
  if (falhas.length === 0) {
    console.log(
      `ok   ${rota.padEnd(32)} ${pesoKb.toFixed(1).padStart(5)} kB na rede  (${pesoCruKb.toFixed(0)} kB em disco)`
    );
  } else {
    totalDeFalhas += falhas.length;
    console.log(`FALHOU  ${rota}`);
    falhas.forEach((falha) => console.log(`        !! ${falha}`));
  }
}

// Titulo ou descricao repetidos entre paginas sao erro de SEO, nao de uma
// pagina isolada — por isso a conferencia acontece depois de todas.
const repetidos = (campo) => {
  const vistos = new Map();
  const colisoes = [];

  for (const resultado of resultados) {
    const valor = resultado[campo];
    if (vistos.has(valor)) colisoes.push(`${campo} repetido: ${vistos.get(valor)} e ${resultado.rota}`);
    else vistos.set(valor, resultado.rota);
  }

  return colisoes;
};

const colisoes = [...repetidos('titulo'), ...repetidos('descricao')];
colisoes.forEach((colisao) => console.log(`FALHOU  !! ${colisao}`));
totalDeFalhas += colisoes.length;

console.log('');
if (totalDeFalhas > 0) {
  console.log(`${resultados.length} página(s), ${totalDeFalhas} falha(s).`);
  process.exitCode = 1;
} else {
  console.log(`${resultados.length} página(s) conferida(s), nenhuma falha.`);
}
