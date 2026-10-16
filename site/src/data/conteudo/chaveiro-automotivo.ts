import type { ConteudoPagina } from './tipos';

/**
 * Pagina: chaveiro automotivo.
 *
 * ⚠️ REVISAR COM O GLEITON — esta e a pagina com mais risco de promessa errada.
 * Confirmar: quais marcas e anos ele atende, se ele faz chave codificada no
 * local ou so na loja, e se trabalha com veiculo que exige senha do fabricante.
 */
export const chaveiroAutomotivo: ConteudoPagina = {
  slug: 'chaveiro-automotivo',
  tituloSeo: 'Chaveiro Automotivo 24h no Rio de Janeiro | Careca Chaves',
  descricaoSeo:
    'Chaveiro automotivo 24 horas no Rio. Abertura de veículo sem forçar a lataria, cópia de chave com chip, chave canivete e telecomando. Zona Sul e Barra.',
  h1: 'Chaveiro automotivo 24 horas',
  chamada:
    'Chave trancada dentro do carro, chave perdida ou aquele telecomando que parou de funcionar. Abro o veículo sem forçar a lataria e faço cópia de chave com chip, canivete e controle.',

  secoes: [
    {
      titulo: 'Abertura de veículo sem estragar nada',
      paragrafos: [
        'A chave ficou lá dentro, às vezes com o carro ligado, às vezes com criança ou cachorro junto. É das situações que mais dão desespero, e é das que mais têm solução rápida.',
        'A abertura é feita com ferramenta própria, trabalhando pela fresta da porta sem forçar a lataria e sem quebrar vidro. Feito direito, não fica marca na borracha nem na pintura.',
        'O que estraga carro nesses casos quase sempre é a tentativa anterior: cabide, régua de metal, chave de fenda na fresta. Carro moderno tem airbag lateral, fiação e trava elétrica passando exatamente por ali — mexer às cegas cobra caro depois.',
        'Se tiver criança ou animal dentro do veículo, avisa logo na primeira frase da ligação. Esse chamado passa na frente de qualquer outro.',
      ],
    },
    {
      titulo: 'Chave de carro não é só chave',
      paragrafos: [
        'Isso explica por que cópia de chave de carro custa mais do que a de casa e por que às vezes demora mais.',
        'A parte de metal é só metade do serviço: ela abre a porta e gira a ignição. A outra metade é eletrônica — o chip dentro da chave, chamado transponder, conversa com o módulo do carro. Se o carro não reconhecer esse chip, ele até gira, mas não pega.',
        'Por isso toda cópia de chave moderna tem duas etapas: cortar a lâmina no padrão certo e programar a parte eletrônica para o seu veículo. Uma sem a outra não serve de nada.',
      ],
      itens: [
        'Chave simples de metal, sem eletrônica — comum em carro mais antigo.',
        'Chave com chip (transponder) — precisa ser reconhecida pelo módulo do carro.',
        'Chave canivete — a lâmina dobra dentro do corpo do controle.',
        'Telecomando e chave presencial — abre, fecha e às vezes liga sem tirar do bolso.',
        'Carcaça e botão — quando a eletrônica está boa e só o corpo quebrou, troca só isso e economiza bastante.',
      ],
    },
    {
      titulo: 'Perdeu a única chave do carro?',
      paragrafos: [
        'Dá para resolver, mas é bom você saber de antemão que esse é o cenário mais demorado e mais caro — não por má vontade de ninguém, e sim porque o carro precisa ser convencido a aceitar uma chave que ele nunca viu.',
        // REVISAR: Gleiton confirmar quais marcas/anos ele consegue atender.
        'O que determina a dificuldade é a marca, o modelo e o ano. Alguns veículos permitem o cadastro direto; outros exigem procedimento mais longo; e há modelos mais recentes em que o fabricante exige código próprio, o que foge do que um chaveiro resolve na rua.',
        'Então o pedido é simples: ao ligar, já me diga **marca, modelo e ano**. Com isso eu te digo na hora se atendo o seu caso — e, se não atender, te digo também. Prefiro perder o serviço a te fazer esperar duas horas para descobrir no local que não dava.',
      ],
    },
    {
      titulo: 'Também resolvo isso',
      paragrafos: ['Nem todo problema de chave de carro é perda ou esquecimento:'],
      itens: [
        'Chave quebrada dentro da ignição ou da porta.',
        'Controle que parou de abrir — às vezes é só a bateria, às vezes é o botão.',
        'Carcaça trincada, com a eletrônica boa por dentro.',
        'Chave que gira mas não liga o carro, sinal de falha de reconhecimento do chip.',
        'Cópia reserva, para você nunca mais passar por isso com uma chave só.',
      ],
    },
    {
      titulo: 'Faça a reserva antes de precisar',
      paragrafos: [
        'Fica a dica que economiza dinheiro: a hora barata de fazer a segunda chave é quando você ainda tem a primeira. Com uma chave funcionando em mãos, a cópia é simples e rápida.',
        'Quando a única chave some, o serviço muda de natureza: vira cadastro de chave nova em um carro que não reconhece ninguém, com deslocamento, procedimento mais longo e custo maior. A diferença entre os dois cenários costuma ser grande o bastante para valer a reserva.',
      ],
    },
  ],

  perguntas: [
    {
      pergunta: 'A abertura pode riscar ou amassar o carro?',
      resposta:
        'Feita com ferramenta e técnica corretas, não. O trabalho é pela fresta da porta, sem forçar a lataria e sem quebrar vidro. O risco de dano quase sempre vem de tentativa anterior com cabide ou chave de fenda.',
    },
    {
      pergunta: 'Você atende qualquer marca e modelo?',
      resposta:
        'A abertura atende praticamente qualquer veículo. Já a cópia e o cadastro de chave dependem de marca, modelo e ano — alguns fabricantes exigem código próprio. Me passe os três dados pelo WhatsApp que eu confirmo antes de sair.',
    },
    {
      pergunta: 'Perdi a única chave. Preciso guinchar o carro?',
      resposta:
        'Na maioria dos casos, não — o serviço pode ser feito onde o carro está. Em alguns modelos específicos o procedimento exige equipamento que não vai à rua. Confirmo isso com você pelo telefone, antes de qualquer deslocamento.',
    },
    {
      pergunta: 'Meu controle parou de funcionar. É caro?',
      resposta:
        'Muitas vezes é só a bateria, e isso é barato e rápido. Quando é o botão ou a carcaça, dá para trocar só a parte danificada e aproveitar a eletrônica, o que custa bem menos que uma chave nova completa.',
    },
    {
      pergunta: 'Vocês vão até onde o carro está?',
      resposta:
        'Vamos. Rua, estacionamento, garagem de prédio, shopping ou posto. Me passe o endereço e, se for estacionamento fechado, avise — alguns exigem autorização da administração para o atendimento.',
    },
    {
      pergunta: 'Fazem chave de moto também?',
      resposta:
        'Me chame no WhatsApp com a marca, o modelo e o ano da moto. Assim como no carro, o que define é o tipo de chave e a eletrônica que ela usa, e eu confirmo antes de marcar.',
    },
  ],
};
