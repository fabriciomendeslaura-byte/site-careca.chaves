/**
 * Prepara as imagens de origem para o site.
 *
 * A arte que o cliente enviou tem 1,9 MB em PNG — carregar isso no celular de
 * alguem no 4G e inaceitavel. Aqui ela e recortada no circulo util, reduzida e
 * convertida para WebP, que costuma sair com menos de 10% do peso original.
 *
 * Rodar com:  node scripts/preparar-imagens.cjs
 */
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const RAIZ = path.resolve(__dirname, '..');
const ORIGEM = path.resolve(RAIZ, '..', '_material', 'mascote-original.png');
const DESTINO = path.join(RAIZ, 'public', 'imagens');

async function principal() {
  if (!fs.existsSync(ORIGEM)) {
    console.error(`Não encontrei a arte de origem em: ${ORIGEM}`);
    process.exitCode = 1;
    return;
  }

  fs.mkdirSync(DESTINO, { recursive: true });

  const { width = 0, height = 0 } = await sharp(ORIGEM).metadata();
  console.log(`Origem: ${width}x${height}`);

  // A arte e quadrada com o personagem na metade de cima. Recortamos a faixa
  // que contem rosto e maos, descartando o letreiro — o nome da marca ja esta
  // escrito no site como texto, repetir na imagem so pesa.
  const ladoDoCorte = Math.round(Math.min(width, height) * 0.74);
  const deslocamentoX = Math.round((width - ladoDoCorte) / 2);

  await sharp(ORIGEM)
    .extract({ left: deslocamentoX, top: 0, width: ladoDoCorte, height: ladoDoCorte })
    .resize(640, 640, { fit: 'cover' })
    .webp({ quality: 82 })
    .toFile(path.join(DESTINO, 'gleiton.webp'));

  // Versao quadrada completa, usada no card de compartilhamento do WhatsApp.
  await sharp(ORIGEM)
    .resize(1080, 1080, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile(path.join(DESTINO, 'marca-quadrada.webp'));

  // Card que aparece quando alguém manda o link no WhatsApp.
  // Sai em JPEG, no formato 1200x630: é o que as redes esperam, e WebP ainda
  // falha em alguns prévisualizadores de link.
  const LARGURA_CARD = 1200;
  const ALTURA_CARD = 630;

  const personagem = await sharp(ORIGEM)
    .extract({ left: deslocamentoX, top: 0, width: ladoDoCorte, height: ladoDoCorte })
    .resize(ALTURA_CARD, ALTURA_CARD, { fit: 'cover' })
    .toBuffer();

  await sharp({
    create: {
      width: LARGURA_CARD,
      height: ALTURA_CARD,
      channels: 3,
      background: { r: 10, g: 12, b: 16 },
    },
  })
    .composite([{ input: personagem, left: LARGURA_CARD - ALTURA_CARD, top: 0 }])
    .jpeg({ quality: 86 })
    .toFile(path.join(RAIZ, 'public', 'compartilhamento.jpg'));

  for (const arquivo of ['imagens/gleiton.webp', 'imagens/marca-quadrada.webp', 'compartilhamento.jpg']) {
    const { size } = fs.statSync(path.join(RAIZ, 'public', arquivo));
    console.log(`${arquivo}: ${(size / 1024).toFixed(0)} kB`);
  }
}

principal().catch((erro) => {
  console.error('Falhou ao preparar as imagens:', erro.message);
  process.exitCode = 1;
});
