import type { ConteudoPagina } from './tipos';

/**
 * Pagina: copia de controle de portao e tag de condominio.
 *
 * ⚠️ REVISAR COM O GLEITON: quais frequencias e tecnologias ele copia, e se
 * ele faz tag de condominio criptografada ou so as abertas.
 */
export const copiaDeControle: ConteudoPagina = {
  slug: 'copia-de-controle',
  tituloSeo: 'Cópia de Controle de Portão e Tag no Rio | Careca Chaves',
  descricaoSeo:
    'Cópia de controle remoto de portão, portaria e porta de loja, além de tag de condomínio. Feita na hora, em Copacabana e Zona Sul do Rio.',
  h1: 'Cópia de controle e tag',
  chamada:
    'Um controle só na casa inteira é problema esperando acontecer: o primeiro que sai leva, e o resto fica na calçada. Faço cópia de controle de portão, de portaria e de porta de loja, além de tag de condomínio — normalmente na hora.',

  secoes: [
    {
      titulo: 'O que dá para copiar',
      paragrafos: [
        'A maior parte dos controles usados em portão de garagem, portaria e porta de loja aceita cópia direta — você me entrega o controle que funciona e eu gravo a mesma função em um controle novo.',
      ],
      itens: [
        'Controle de portão de garagem residencial e de prédio.',
        'Controle de portaria e de guarita.',
        'Controle de porta de enrolar de loja e de portão basculante.',
        'Tag e cartão de aproximação de condomínio.',
        'Controle de cancela de estacionamento, quando o condomínio permite.',
      ],
    },
    {
      titulo: 'Nem todo controle é igual',
      paragrafos: [
        'Vale explicar isso antes de você vir até mim, porque muda o que é possível fazer.',
        'Os controles mais antigos usam um código fixo: eles mandam sempre o mesmo sinal, e copiar é simples e rápido. Já os modelos mais novos usam código que muda a cada uso — o chamado código dinâmico ou rolante. Esse tipo não se copia de um controle para o outro: ele precisa ser cadastrado no receptor do portão, apertando o botão de programação que fica na central.',
        'Isso não é defeito, é segurança: justamente para ninguém capturar o sinal do seu portão na rua e entrar depois. Quando for esse o caso, eu te explico e faço o cadastro, se você tiver acesso à central ou autorização do condomínio.',
        // REVISAR: confirmar se o Gleiton faz o cadastro na central do condominio.
        'Em prédio, o cadastro de controle novo quase sempre passa pela administração ou pelo síndico. Vale confirmar com eles antes, para você não fazer a cópia e descobrir que a portaria precisa liberar.',
      ],
    },
    {
      titulo: 'Tag de condomínio',
      paragrafos: [
        'A tag de aproximação — aquele chaveirinho que você encosta no leitor — funciona por outro princípio, de proximidade e não de rádio. Algumas são abertas e aceitam cópia direta; outras são criptografadas pela administradora e só podem ser liberadas pelo próprio condomínio.',
        'Quando a sua for do tipo aberto, a cópia sai na hora. Quando for criptografada, eu te digo na hora e você economiza a viagem — não vou te vender um serviço que não vai funcionar no seu portão.',
      ],
    },
    {
      titulo: 'Quantas cópias vale a pena ter',
      paragrafos: [
        'A conta é simples: um controle por pessoa que sai de casa sozinha, mais um guardado. Casa com dois carros e três adultos vivendo com um controle só vira discussão toda semana.',
        'Para loja, a recomendação muda um pouco: controle numerado por funcionário ajuda a saber quem abriu, e quando alguém sai da empresa você recolhe aquele e segue a vida — sem precisar reprogramar o portão inteiro.',
      ],
    },
  ],

  perguntas: [
    {
      pergunta: 'Preciso levar o controle que funciona?',
      resposta:
        'Para a cópia direta, sim — o controle original é a referência. Sem ele, o caminho é cadastrar um controle novo direto na central do portão, o que exige acesso ao equipamento e, em prédio, autorização da administração.',
    },
    {
      pergunta: 'Meu controle não copiou. Por quê?',
      resposta:
        'Provavelmente ele usa código dinâmico, que muda a cada acionamento justamente para não ser copiado. Nesse caso não dá para clonar de um controle para outro: o controle novo precisa ser cadastrado na central do portão.',
    },
    {
      pergunta: 'Faz cópia de tag de condomínio?',
      resposta:
        'Das tags abertas, sim, e normalmente na hora. Tags criptografadas pela administradora só podem ser liberadas pelo próprio condomínio. Me mostra a sua que eu identifico qual é a sua antes de qualquer cobrança.',
    },
    {
      pergunta: 'Quanto tempo demora?',
      resposta:
        'A cópia direta é questão de minutos. O que leva tempo é quando precisa cadastrar na central do portão, porque aí depende do acesso ao equipamento e, em prédio, da liberação de quem administra.',
    },
    {
      pergunta: 'Atende loja e galpão?',
      resposta:
        'Atendo. Porta de enrolar, portão basculante e controle de carga e descarga entram no mesmo serviço. Para comércio eu costumo sugerir controle separado por funcionário, para facilitar quando alguém sai.',
    },
  ],
};
