# Site Careca Chaves

Site do **Careca Chaves** — chaveiro 24 horas no Rio de Janeiro.
12 páginas estáticas, sem backend e sem banco de dados.

No ar em **https://chaveiro24horasrj.com.br**, hospedado na Vercel com deploy
automático a cada push (leva cerca de 2 minutos).

## Como rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run dev -- --host   # acessível pelo celular na mesma rede
npm run build    # gera a pasta dist/
npm run check    # verificação de tipos (precisa ficar em 0 erros)
```

Scripts auxiliares:

```bash
node scripts/preparar-imagens.cjs   # trata as artes de _material/ e gera as imagens otimizadas
node scripts/conferir-pagina.cjs    # confere todas as páginas do dist (SEO, telefone, peso, acessibilidade)
```

## As páginas

| Rota | O que é |
|---|---|
| `/` | home |
| `/servicos/<slug>` | 6 páginas de serviço, 1.400 a 1.800 palavras cada |
| `/chaveiro-<bairro>` | Copacabana, Ipanema, Leblon, Barra da Tijuca |
| `/404` | página de erro, com botão de ligar |

As páginas de bairro **não entram no menu**. Elas existem para serem o resultado
que o Google mostra quando a busca tem nome de bairro — o visitante cai direto
nelas pela busca, sem passar pela home.

## Por que Astro e não React

O visitante típico está na rua, de madrugada, no celular com sinal ruim, e
precisa ligar em poucos segundos. Astro monta o HTML na hora do build: o
navegador recebe a página pronta e pinta na primeira passada. Um SPA React
enviaria centenas de kB de JavaScript antes de qualquer conteúdo aparecer — em
site de emergência, isso é cliente perdido.

A régua: **conteúdo igual para todo mundo → Astro. Conteúdo que depende de quem
está logado → React.**

Resultado hoje: a página mais pesada do site são **15 kB na rede**.

## Onde mexer em cada coisa

| Quero mudar... | Arquivo |
|---|---|
| **Telefone, endereço, CNPJ, horário, link do Google** | `src/data/negocio.ts` — e só ali |
| Serviços (textos curtos dos cards) | `src/data/servicos.ts` |
| Conteúdo longo de uma página de serviço | `src/data/conteudo/<servico>.ts` |
| Conteúdo de uma página de bairro | `src/data/bairros/<bairro>.ts` |
| Bairros atendidos (lista da home) | `src/data/cobertura.ts` |
| Perguntas frequentes da home | `src/data/faq.ts` |
| Avaliações do Google | `src/data/avaliacoes.ts` |
| Cores, fontes, espaçamento | `src/styles/global.css` (bloco `@theme`) |
| Dados estruturados do Google | `src/layouts/BaseLayout.astro` |

Para publicar um serviço ou bairro novo: cria o arquivo ao lado dos outros,
importa no `index.ts` da pasta e adiciona uma linha. A rota, o sitemap e os
links aparecem sozinhos.

## Decisões que não devem ser desfeitas sem motivo

- **O telefone é escrito uma vez só**, em `negocio.ts`. Botão de ligar, WhatsApp,
  rodapé e dados estruturados leem de lá. Nunca digite um número solto num
  componente — um dia o site fica com dois telefones e ninguém sabe qual é o certo.
- **Tema escuro único.** O site é visto quase sempre de madrugada.
- **Âmbar só no botão de ligar.** É a única cor quente da paleta. Usar em outro
  lugar faz o botão deixar de significar "é aqui que você clica".
- **Nenhuma prova social inventada.** As avaliações são reais, com texto exato
  (inclusive erros de digitação) e link para o perfil. O resto da credibilidade
  vem de fato conferível: CNPJ ativo, CNAE de chaveiro, endereço fixo.
- **Não marcar `Review` nem `aggregateRating`** no JSON-LD. O Google proíbe um
  site marcar como própria a nota vinda do próprio Google.
- **Barra fixa de contato no celular.** É a peça de maior conversão. Não remover.
- **Animações respeitam `prefers-reduced-motion`.**
- **Cada página de bairro precisa de conteúdo próprio e verdadeiro.** Cópia com
  o nome trocado é *doorway page*, e o Google pune o site inteiro.

## Armadilhas que já morderam aqui

- `querySelector` pega **só o primeiro** elemento. A página tem dois relógios ao
  vivo; com o seletor singular, o de baixo congelava na hora do build.
- `opacity` numa imagem deixa ver o que está atrás, por mais alto que seja o
  `z-index`. Para escurecer imagem, camada por cima — nunca opacidade nela.
- `background-clip: text` só pinta dentro da caixa da linha: `line-height` abaixo
  de 1 deixa o topo da letra sem tinta.
- Fonte de display (Anton) tem métrica vertical desigual. Para um caractere
  centralizado em espaço pequeno, use a fonte do corpo.
- **Depois de um deploy, o CDN pode te mostrar o passado.** Antes de caçar bug,
  confirme que não é cache (`X-Vercel-Cache: HIT`); um `?v=123` na URL força a
  versão nova.

## Pendente de informação do cliente

Procure por `REVISAR` em `src/data/conteudo/` e `src/data/bairros/`. Os mais
sensíveis:

- [ ] Quais marcas, modelos e anos de carro ele realmente atende
- [ ] Se cobra deslocamento diferente para a Barra da Tijuca
- [ ] Tempo médio de chegada por região
- [ ] Garantia do serviço e formas de pagamento
- [ ] Marcas de fechadura digital com que trabalha

## Pendente de configuração

- [ ] **Google Search Console** — verificar o domínio e enviar o sitemap.
      É o que faz o Google descobrir as 12 páginas.
