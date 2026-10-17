/**
 * Prepara as imagens de origem para o site.
 *
 * As artes chegam pesadas: as geradas por IA vem com 4 a 8 MB cada, e as oito
 * somam quase 50 MB. Carregar isso no celular de alguem no 4G e inaceitavel.
 * Aqui cada uma e redimensionada e convertida para WebP, que costuma sair com
 * menos de 2% do peso original.
 *
 * Rodar com:  node scripts/preparar-imagens.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const RAIZ = path.resolve(__dirname, '..');
const MATERIAL = path.resolve(RAIZ, '..', '_material');
const GERADAS = path.join(MATERIAL, 'imagens-geradas');
const PUBLICO = path.join(RAIZ, 'public');
const DESTINO = path.join(PUBLICO, 'imagens');

/**
 * Imagens dos cards de servico e do topo da home.
 *
 * A largura e o dobro do espaco que cada uma ocupa na tela, para a imagem
 * continuar nitida em celular de tela densa sem virar download gigante.
 */
const DAS_SECOES = [
  { arquivo: 'hero-porta', largura: 1920, altura: 1080 },
  { arquivo: 'abertura-de-porta', largura: 1040, altura: 780 },
  { arquivo: 'fechadura-digital', largura: 1040, altura: 780 },
  { arquivo: 'troca-de-segredo', largura: 1040, altura: 780 },
  { arquivo: 'copia-de-controle', largura: 1040, altura: 780 },
  { arquivo: 'chaveiro-automotivo', largura: 1040, altura: 780 },
  { arquivo: 'instalacao-fechadura', largura: 1040, altura: 780 },
];

/** Procura o arquivo seja qual for a extensao com que ele foi salvo. */
function acharOrigem(pasta, nomeSemExtensao) {
  if (!fs.existsSync(pasta)) return null;

  const encontrado = fs
    .readdirSync(pasta)
    .find((nome) => path.parse(nome).name.toLowerCase() === nomeSemExtensao.toLowerCase());

  return encontrado ? path.join(pasta, encontrado) : null;
}

async function prepararSecoes() {
  for (const { arquivo, largura, altura } of DAS_SECOES) {
    const origem = acharOrigem(GERADAS, arquivo);

    if (!origem) {
      console.log(`  (pulando ${arquivo}: nenhum arquivo em _material/imagens-geradas)`);
      continue;
    }

    await sharp(origem)
      .resize(largura, altura, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(path.join(DESTINO, `${arquivo}.webp`));
  }
}

/** Foto do Gleiton na loja: o retrato da secao "quem vai te atender". */
async function prepararFoto() {
  // A versao nova fica em imagens-geradas; a antiga ficou solta em _material.
  const origem = acharOrigem(GERADAS, 'foto-careca-chaves') ?? acharOrigem(MATERIAL, 'foto-careca-chaves');

  if (!origem) {
    console.log('  (pulando foto do Gleiton: arquivo nao encontrado)');
    return;
  }

  await sharp(origem)
    .resize(760, 1013, { fit: 'cover', position: 'top' })
    .webp({ quality: 82 })
    .toFile(path.join(DESTINO, 'gleiton-loja.webp'));

  // Card que aparece quando mandam o link no WhatsApp. Foto de pessoa converte
  // mais que logo: quem ve reconhece que tem gente de verdade do outro lado.
  // Sai em JPEG porque alguns previsualizadores de link ainda falham com WebP.
  await sharp(origem)
    .resize(1200, 630, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 86 })
    .toFile(path.join(PUBLICO, 'compartilhamento.jpg'));
}

/** Arte do mascote, usada como marca quadrada. */
async function prepararMascote() {
  const origem = acharOrigem(MATERIAL, 'mascote-original');
  if (!origem) return;

  const { width = 0, height = 0 } = await sharp(origem).metadata();

  // A arte e quadrada com o personagem na metade de cima. Recortamos a faixa
  // com rosto e maos, descartando o letreiro — o nome da marca ja esta escrito
  // no site como texto, repetir na imagem so pesa.
  const lado = Math.round(Math.min(width, height) * 0.74);
  const deslocamentoX = Math.round((width - lado) / 2);

  await sharp(origem)
    .extract({ left: deslocamentoX, top: 0, width: lado, height: lado })
    .resize(640, 640, { fit: 'cover' })
    .webp({ quality: 82 })
    .toFile(path.join(DESTINO, 'gleiton.webp'));

  await sharp(origem)
    .resize(1080, 1080, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile(path.join(DESTINO, 'marca-quadrada.webp'));
}

async function principal() {
  fs.mkdirSync(DESTINO, { recursive: true });

  await prepararSecoes();
  await prepararFoto();
  await prepararMascote();

  console.log('');
  let total = 0;

  for (const arquivo of fs.readdirSync(DESTINO).sort()) {
    const { size } = fs.statSync(path.join(DESTINO, arquivo));
    total += size;
    console.log(`  imagens/${arquivo.padEnd(28)} ${(size / 1024).toFixed(0).padStart(4)} kB`);
  }

  const social = path.join(PUBLICO, 'compartilhamento.jpg');
  if (fs.existsSync(social)) {
    const { size } = fs.statSync(social);
    total += size;
    console.log(`  compartilhamento.jpg${' '.repeat(17)}${(size / 1024).toFixed(0).padStart(4)} kB`);
  }

  console.log(`\n  TOTAL: ${(total / 1024).toFixed(0)} kB`);
}

principal().catch((erro) => {
  console.error('Falhou ao preparar as imagens:', erro.message);
  process.exitCode = 1;
});
