/**
 * Conferencia automatica do HTML gerado.
 *
 * Nao substitui olhar o site no navegador — isso so uma pessoa faz. O que da
 * para provar por codigo e provado aqui: dados estruturados validos, telefone
 * correto em todo lugar, imagem com texto alternativo, nenhum link vazio.
 *
 * Rodar com:  node scripts/conferir-pagina.cjs
 */
const fs = require('node:fs');
const path = require('node:path');

const HTML = path.resolve(__dirname, '..', 'dist', 'index.html');
const TELEFONE_ESPERADO = '+5521964621885';

const falhas = [];
const aprovados = [];

function conferir(descricao, condicao) {
  (condicao ? aprovados : falhas).push(descricao);
}

const html = fs.readFileSync(HTML, 'utf8');

// --- Dados estruturados -----------------------------------------------------
const blocosJsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
conferir('Dois blocos de dados estruturados presentes', blocosJsonLd.length === 2);

const tipos = [];
for (const [, conteudo] of blocosJsonLd) {
  try {
    tipos.push(JSON.parse(conteudo)['@type']);
  } catch (erro) {
    falhas.push(`JSON-LD inválido: ${erro.message}`);
  }
}
conferir('Negócio marcado como Locksmith', tipos.includes('Locksmith'));
conferir('Perguntas marcadas como FAQPage', tipos.includes('FAQPage'));

// --- Contato ----------------------------------------------------------------
const linksDeLigacao = [...html.matchAll(/href="tel:([^"]+)"/g)].map((m) => m[1]);
conferir('Existe botão de ligar', linksDeLigacao.length > 0);
conferir(
  `Todo link de ligação usa ${TELEFONE_ESPERADO}`,
  linksDeLigacao.every((numero) => numero === TELEFONE_ESPERADO)
);

const linksDeZap = [...html.matchAll(/href="https:\/\/wa\.me\/(\d+)/g)].map((m) => m[1]);
conferir('Existe botão de WhatsApp', linksDeZap.length > 0);
conferir(
  'Todo WhatsApp aponta para o mesmo número',
  linksDeZap.every((numero) => numero === '5521964621885')
);

// --- SEO e acessibilidade ---------------------------------------------------
conferir('Tem título', /<title>[^<]{20,}<\/title>/.test(html));
conferir('Tem meta description', /<meta name="description" content="[^"]{80,}"/.test(html));
conferir('Tem canonical', /rel="canonical"/.test(html));
conferir('Tem imagem de compartilhamento', /property="og:image"/.test(html));
conferir('Idioma declarado como pt-BR', /<html lang="pt-BR"/.test(html));

const h1 = [...html.matchAll(/<h1[\s>]/g)];
conferir('Exatamente um H1 na página', h1.length === 1);

const imagens = [...html.matchAll(/<img[^>]*>/g)].map((m) => m[0]);
conferir(
  'Toda imagem tem texto alternativo',
  imagens.every((tag) => /alt="[^"]+"/.test(tag))
);

const linksVazios = [...html.matchAll(/href="(#|)"/g)];
conferir('Nenhum link vazio', linksVazios.length === 0);

// --- Peso -------------------------------------------------------------------
const pesoKb = Buffer.byteLength(html) / 1024;
conferir(`HTML com ${pesoKb.toFixed(0)} kB (orçamento: 90 kB)`, pesoKb < 90);

// --- Resultado --------------------------------------------------------------
console.log('\nAPROVADO:');
aprovados.forEach((item) => console.log(`  ok  ${item}`));

if (falhas.length > 0) {
  console.log('\nFALHOU:');
  falhas.forEach((item) => console.log(`  !!  ${item}`));
  process.exitCode = 1;
} else {
  console.log(`\n${aprovados.length} verificações, nenhuma falha.`);
}
