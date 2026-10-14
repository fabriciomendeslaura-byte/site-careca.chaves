# Site Careca Chaves

Site institucional e de captação do **Careca Chaves** — chaveiro 24 horas no Rio de Janeiro.
Página única, estática, sem backend e sem banco de dados.

## Como rodar

```bash
npm install
npm run dev      # abre em http://localhost:4321
npm run build    # gera a pasta dist/
npm run check    # verificação de tipos (precisa ficar em 0 erros)
```

Scripts auxiliares:

```bash
node scripts/preparar-imagens.cjs   # trata a arte de _material/ e gera as imagens otimizadas
node scripts/conferir-pagina.cjs    # confere o HTML gerado (SEO, telefone, acessibilidade)
```

## Por que Astro e não React

O visitante típico é alguém na rua, de madrugada, no celular com sinal ruim, que precisa ligar
em poucos segundos. Astro monta o HTML na hora do build: o navegador recebe a página pronta e
pinta na primeira passada. Um SPA React enviaria centenas de kB de JavaScript antes de qualquer
conteúdo aparecer — em site de emergência, isso é cliente perdido.

Resultado atual: ~55 kB de HTML, ~35 kB de CSS, nenhum framework no navegador.

## Onde mexer em cada coisa

| Quero mudar... | Arquivo |
|---|---|
| **Telefone, endereço, CNPJ, horário** | `src/data/negocio.ts` — e só ali |
| Serviços oferecidos (textos, ordem, destaque) | `src/data/servicos.ts` |
| Bairros atendidos | `src/data/cobertura.ts` |
| Perguntas frequentes | `src/data/faq.ts` |
| Cores, fontes, espaçamento | `src/styles/global.css` (bloco `@theme`) |
| Título e descrição que aparecem no Google | `src/pages/index.astro` |
| Dados estruturados do Google | `src/layouts/BaseLayout.astro` |

> **Regra do projeto:** o telefone é escrito **uma vez só**, em `negocio.ts`. O botão de ligar, o
> WhatsApp, o rodapé e os dados estruturados do Google leem de lá. Nunca digite um número solto
> no meio de um componente — se fizer isso, um dia o site vai ficar com dois telefones diferentes
> e ninguém vai saber qual é o certo.

## Estrutura

```
src/
├── data/          fatos do negócio (nenhum HTML aqui)
├── layouts/       BaseLayout: <head>, SEO, dados estruturados
├── components/
│   ├── layout/    cabeçalho, rodapé, barra fixa do celular
│   ├── secoes/    cada faixa da página
│   └── ui/        peças reutilizáveis (botões, ícones, logo, cards)
├── styles/        tokens de design e regras globais
└── pages/         index.astro monta a ordem das seções
```

## Decisões que não devem ser desfeitas sem motivo

- **Tema escuro único.** O site é visto quase sempre de madrugada. Tela clara na cara de quem
  está no escuro é hostil.
- **Âmbar só no botão de ligar.** É a única cor quente da paleta. Usar em outro lugar faz o
  botão deixar de significar "é aqui que você clica".
- **Nada de prova social inventada.** Não existe depoimento, nota ou número de clientes neste
  site, porque nenhum foi verificado. A credibilidade vem de fato conferível: CNPJ ativo, CNAE
  de chaveiro, endereço fixo, tempo de atividade.
- **Barra fixa de contato no celular.** É a peça de maior conversão. Não remover.
- **Animações respeitam `prefers-reduced-motion`.** Quem desligou movimento no sistema tem motivo.

## Pendente de informação do cliente

Estes trechos não foram escritos porque dependem de resposta do Gleiton — e inventar seria mentir:

- [ ] Tempo médio de chegada na Zona Sul
- [ ] Garantia do serviço (existe? qual prazo?)
- [ ] Formas de pagamento aceitas
- [ ] Como a taxa de plantão é cobrada
- [ ] Marcas de fechadura digital com que trabalha
- [ ] Fotos ou vídeos reais do trabalho
- [ ] Perfil no Google Meu Negócio (maior retorno comercial do projeto)

## Publicação

O domínio `chaveiro24horasrj.com.br` hoje aponta para um WordPress de página única.
Publicar na Vercel com URL de teste, validar, e **só então** apontar o DNS.
