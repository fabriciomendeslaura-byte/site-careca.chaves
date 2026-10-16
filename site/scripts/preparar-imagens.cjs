/**
 * Prepara as imagens de origem para o site.
 *
 * As artes chegam pesadas: a foto do Gleiton tem 4,4 MB e o mascote 1,9 MB.
 * Carregar isso no celular de alguem no 4G e inaceitavel. Aqui cada uma e
 * recortada, redimensionada e convertida para WebP, que costuma sair com menos
 * de 5% do peso original.
 *
 * Rodar com:  node scripts/preparar-imagens.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const RAIZ = path.resolve(__dirname, '..');
const MATERIAL = path.resolve(RAIZ, '..', '_material');
const PUBLICO = path.join(RAIZ, 'public');
const DESTINO = path.join(PUBLICO, 'imagens');

function exigirArquivo(caminho) {
  if (fs.existsSync(caminho)) return true;
  console.error(`  faltando: ${path.relative(MATERIAL, caminho)}`);
  return false;
}

/** Foto real do Gleiton na loja — o retrato da seção "quem vai te atender". */
async function prepararFoto() {
  const origem = path.join(MATERIAL, 'foto-careca-chaves.jpeg');
  if (!exigirArquivo(origem)) return;

  // Retrato 3:4, na maior medida que a seção usa em tela grande. Gerar maior
  // que isso só aumentaria o download sem o olho perceber diferença.
  await sharp(origem)
    .resize(760, 1013, { fit: 'cover', position: 'top' })
    .webp({ quality: 82 })
    .toFile(path.join(DESTINO, 'gleiton-loja.webp'));

  // Card que aparece quando mandam o link no WhatsApp. Foto de pessoa converte
  // mais que logo: quem vê reconhece que tem gente de verdade do outro lado.
  // Sai em JPEG porque alguns prévisualizadores de link ainda falham com WebP.
  await sharp(origem)
    .resize(1200, 630, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 86 })
    .toFile(path.join(PUBLICO, 'compartilhamento.jpg'));
}

/** Arte do mascote, usada como marca quadrada. */
async function prepararMascote() {
  const origem = path.join(MATERIAL, 'mascote-original.png');
  if (!exigirArquivo(origem)) return;

  const { width = 0, height = 0 } = await sharp(origem).metadata();

  // A arte é quadrada com o personagem na metade de cima. Recortamos a faixa
  // com rosto e mãos, descartando o letreiro — o nome da marca já está escrito
  // no site como texto, repetir na imagem só pesa.
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

  await prepararFoto();
  await prepararMascote();

  const gerados = [
    'imagens/gleiton-loja.webp',
    'imagens/gleiton.webp',
    'imagens/marca-quadrada.webp',
    'compartilhamento.jpg',
  ];

  console.log('');
  for (const arquivo of gerados) {
    const caminho = path.join(PUBLICO, arquivo);
    if (!fs.existsSync(caminho)) continue;
    console.log(`  ${arquivo.padEnd(32)} ${(fs.statSync(caminho).size / 1024).toFixed(0)} kB`);
  }
}

principal().catch((erro) => {
  console.error('Falhou ao preparar as imagens:', erro.message);
  process.exitCode = 1;
});
