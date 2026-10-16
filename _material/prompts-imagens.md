# Prompts das imagens do site — Careca Chaves

Gere em **inglês** (os modelos entendem muito melhor) e salve com **o nome exato** indicado.
Depois é só jogar os arquivos em `site/public/imagens/` — o código já está esperando por eles,
nada precisa ser alterado.

## Direção de arte (vale para todas)

Para as imagens parecerem um conjunto e não sete fotos avulsas, todas seguem a mesma linha:

- **Ambiente noturno**, iluminação baixa e dramática
- **Paleta:** grafite escuro + azul elétrico como luz de recorte, igual ao site
- **Fotorrealista**, com profundidade de campo rasa (fundo desfocado)
- **Sem rosto de pessoa.** Mão trabalhando pode; rosto não — a única pessoa do site é o Gleiton, e a foto dele é real

> Se o seu modelo aceitar, acrescente no fim de cada prompt:
> `--ar 4:3` para os cards e `--ar 16:9` para o hero.

---

## 1. Hero da página inicial

**Arquivo:** `hero-porta.webp` · **Proporção:** 16:9

```
Cinematic night photograph of a modern apartment front door in a dim corridor,
a sleek matte black digital smart lock with a softly glowing blue keypad mounted
on it, cool electric blue rim light raking across the door surface, deep graphite
shadows, moody noir atmosphere, shallow depth of field, ultra photorealistic,
no people, dark graphite and electric blue color grade
```

---

## 2. Abertura de portas

**Arquivo:** `abertura-de-porta.webp` · **Proporção:** 4:3

```
Close-up photorealistic night photograph of a professional locksmith's hands
using a slim precision lock pick and tension wrench on a residential door lock
cylinder, warm focused key light against cool blue ambient darkness, dramatic
shadows, no face visible, shallow depth of field, cinematic, dark graphite and
electric blue grade
```

---

## 3. Fechadura digital

**Arquivo:** `fechadura-digital.webp` · **Proporção:** 4:3

```
Premium product photograph of a modern matte black digital smart lock with an
illuminated blue touch keypad installed on a dark walnut door, elegant
directional lighting, crisp fine detail, shallow depth of field, dark cinematic
background, ultra photorealistic
```

---

## 4. Troca de segredo

**Arquivo:** `troca-de-segredo.webp` · **Proporção:** 4:3

```
Macro photograph of a disassembled door lock cylinder opened on a dark locksmith
workshop bench, brass pins and springs laid out in order beside two freshly cut
silver keys, electric blue rim lighting, moody workshop atmosphere, ultra
photorealistic, shallow depth of field
```

---

## 5. Cópia de controle e tag

**Arquivo:** `copia-de-controle.webp` · **Proporção:** 4:3

```
Photograph of several gate remote controls and RFID condominium access tags
arranged neatly on a dark locksmith workbench, a key cutting machine softly
blurred in the background, electric blue accent lighting, moody workshop, ultra
photorealistic, shallow depth of field
```

---

## 6. Chaveiro automotivo

**Arquivo:** `chaveiro-automotivo.webp` · **Proporção:** 4:3

```
Photograph of a modern car key fob and a transponder flip key resting on a dark
surface beside a key programming diagnostic device with glowing display, night
garage setting, electric blue LED lighting, ultra photorealistic, no people,
shallow depth of field
```

---

## 7. Instalação de fechadura

**Arquivo:** `instalacao-fechadura.webp` · **Proporção:** 4:3

```
Photograph of professional locksmith tools laid out beside a high security
multipoint lock being installed into a door edge, organized precision tools on
dark surface, electric blue accent light, ultra photorealistic, no face,
shallow depth of field, cinematic
```

---

## Depois de gerar

1. Salve cada uma com o nome exato da lista (pode ser `.jpg` ou `.png` — eu converto)
2. Jogue tudo em `_material/imagens-geradas/`
3. Me avise que eu converto para WebP, otimizo o peso e publico

**Não suba as imagens direto no site.** Arquivo de IA costuma vir com 2 a 5 MB cada; sete delas
somam mais de 20 MB e derrubam o carregamento no celular. O tratamento reduz isso para algo em
torno de 60 kB por imagem, sem diferença visível na tela.

## Se for gerar outras no futuro

A logo bordada na camisa da foto do Gleiton está em **dourado**, e a identidade do site é **azul
elétrico**. Na foto atual funciona porque aparece pequena, mas se for gerar mais material com a
marca aplicada, peça a logo em azul para manter a coerência.
