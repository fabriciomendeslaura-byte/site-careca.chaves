import type { Bairro } from './tipos';

/**
 * Pagina: chaveiro na Barra da Tijuca.
 *
 * Angulo proprio: condominio fechado, controle de portao e tag como servico
 * principal, casa alem de apartamento — e a honestidade sobre a distancia,
 * que e o que diferencia esta pagina das da Zona Sul.
 *
 * ⚠️ REVISAR COM O GLEITON: se ele cobra deslocamento diferente para a Barra
 * e qual o tempo real de chegada. Esta pagina nao promete tempo justamente
 * por isso.
 */
export const barraDaTijuca: Bairro = {
  slug: 'barra-da-tijuca',
  nome: 'Barra da Tijuca',
  regiao: 'Zona Oeste',
  tituloSeo: 'Chaveiro na Barra da Tijuca | Careca Chaves',
  descricaoSeo:
    'Chaveiro na Barra da Tijuca: cópia de controle de portão e tag, fechadura digital, abertura de porta e troca de segredo. Combine o deslocamento pelo telefone.',
  h1: 'Chaveiro na Barra da Tijuca',
  chamada:
    'Atendo a Barra combinando o deslocamento antes — a base fica em Copacabana. Para serviço marcado, funciona bem; para emergência, me ligue que eu te digo na hora se consigo chegar rápido o bastante.',

  blocos: [
    {
      titulo: 'Vou ser honesto sobre a distância',
      paragrafos: [
        'A oficina fica em Copacabana. Para a Zona Sul, isso significa chegar rápido. Para a Barra, significa uma viagem — e o tempo depende muito do horário e da via.',
        'Então a conversa é direta: para serviço marcado, como instalação de fechadura digital, troca de segredo ou cópia de controle, a Barra funciona bem. A gente combina o horário e eu vou.',
        'Para emergência de porta trancada, me ligue que eu te digo na hora, com sinceridade, se consigo chegar em tempo razoável ou se vale mais a pena você chamar alguém mais perto. Prefiro perder o serviço a deixar você esperando duas horas na porta de casa achando que estou chegando.',
      ],
    },
    {
      titulo: 'Controle de portão e tag é o pedido número um',
      paragrafos: [
        'Na Barra, a maior parte dos chamados não é fechadura: é acesso. Condomínio fechado, portaria com cancela, garagem com portão automático, e a família inteira dividindo um controle só.',
        'Faço cópia de controle de portão, de cancela e de porta de garagem, além de tag de condomínio — quando ela é do tipo aberto. Quando a tag é criptografada pela administradora, eu te digo na hora, para você não perder viagem: nesse caso só o próprio condomínio libera.',
        'Vale lembrar uma coisa que muita gente descobre tarde: controle moderno com código dinâmico não se copia de um para o outro. Ele precisa ser cadastrado na central do portão, e em condomínio isso costuma passar pela administração.',
      ],
      itens: [
        'Controle de portão de garagem e de condomínio.',
        'Controle de cancela de entrada.',
        'Tag de aproximação, quando é do tipo aberto.',
        'Controle de porta de enrolar, para loja e galpão.',
      ],
    },
    {
      titulo: 'Casa é diferente de apartamento',
      paragrafos: [
        'A Barra tem muita casa em condomínio, e casa tem pontos de entrada que apartamento não tem: portão da rua, porta social, porta de serviço, porta da área, e às vezes um portão lateral que ninguém lembra que existe.',
        'Isso muda a conversa sobre segurança. Não adianta uma fechadura reforçada na porta da frente se a porta da área tem uma fechadura simples de quarto — e é mais comum do que parece.',
        'Quando eu for aí, posso dar uma olhada no conjunto e te dizer onde está o elo fraco, sem compromisso de trocar nada. Muita vez o que resolve é ajustar uma porta e trocar um cilindro, não reformar tudo.',
      ],
    },
    {
      titulo: 'Chave de carro na garagem',
      paragrafos: [
        'Como a Barra é bairro de carro, o chamado automotivo aparece bastante: chave trancada dentro do veículo na garagem do condomínio, no estacionamento do shopping ou na frente de casa.',
        'Abro o veículo sem forçar a lataria e faço cópia de chave com chip, canivete e telecomando. Ao ligar, já me diga marca, modelo e ano — é isso que define se o seu caso é simples ou se exige procedimento mais longo, e eu te digo antes de sair.',
      ],
    },
  ],

  perguntas: [
    {
      pergunta: 'Você atende emergência na Barra de madrugada?',
      resposta:
        'Atendo, mas sendo honesto sobre o tempo: a base é em Copacabana e a viagem até a Barra não é curta. Ligue que eu te digo na hora se consigo chegar em tempo razoável. Se não der, eu falo — em vez de te deixar esperando.',
    },
    {
      pergunta: 'Faz cópia de tag do meu condomínio?',
      resposta:
        'Das tags abertas, sim. As criptografadas pela administradora só podem ser liberadas pelo próprio condomínio — e nesse caso eu te aviso antes, para você não perder a viagem nem o dinheiro.',
    },
    {
      pergunta: 'Meu controle não copiou em outro lugar. Por quê?',
      resposta:
        'Provavelmente ele usa código dinâmico, que muda a cada acionamento justamente para não ser clonado. Esse tipo precisa ser cadastrado na central do portão, e em condomínio isso costuma passar pela administração.',
    },
    {
      pergunta: 'Instala fechadura digital em casa de condomínio?',
      resposta:
        'Instalo, e em casa costuma render mais que em apartamento: são várias portas e muita gente entrando em horários diferentes. Vale avaliar o conjunto, não só a porta da frente.',
    },
    {
      pergunta: 'Como funciona o valor do deslocamento até a Barra?',
      resposta:
        'A Barra tem deslocamento maior que a Zona Sul, e isso entra no orçamento. Como todo serviço, o valor é combinado antes de eu sair — você aprova ou não, sem surpresa no final.',
    },
  ],
};
