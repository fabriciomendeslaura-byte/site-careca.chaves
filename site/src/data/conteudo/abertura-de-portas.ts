import type { ConteudoPagina } from './tipos';

/**
 * Pagina: abertura de portas (o chamado de emergencia).
 *
 * ⚠️ REVISAR COM O GLEITON: tempo de atendimento, o que ele faz quando a
 * fechadura ja esta danificada, e se ele atende porta blindada.
 */
export const aberturaDePortas: ConteudoPagina = {
  slug: 'abertura-de-portas',
  tituloSeo: 'Abertura de Portas 24h em Copacabana e Zona Sul | Careca Chaves',
  descricaoSeo:
    'Trancado para fora? Abertura de porta 24 horas sem arrombar, em Copacabana, Ipanema, Leblon e Zona Sul do Rio. Residência, apartamento e loja.',
  h1: 'Abertura de portas 24 horas',
  chamada:
    'Ficou do lado de fora, perdeu a chave ou a fechadura simplesmente travou. Eu vou até você, abro a porta sem arrombar e você entra — a qualquer hora, inclusive de madrugada, fim de semana e feriado.',

  secoes: [
    {
      titulo: 'Antes de me ligar, não faça isso',
      paragrafos: [
        'A maior parte do prejuízo em chamado de porta trancada não vem da fechadura: vem do que a pessoa tentou antes de chamar alguém.',
      ],
      itens: [
        'Não force a chave que ficou presa. Se ela quebrar dentro do cilindro, o serviço fica mais demorado e mais caro.',
        'Não empurre a porta com o ombro. Porta cede no batente, não na fechadura — você arruma um problema de marcenaria junto.',
        'Não tente abrir com cartão, arame ou chave de fenda. Risca a porta, entorta o trinco e às vezes trava de vez o que ia abrir fácil.',
        'Não chame quem só sabe arrombar. Arrombar é barato na hora e caro depois: você paga fechadura nova, batente e às vezes a porta inteira.',
      ],
    },
    {
      titulo: 'Como eu abro sem danificar',
      paragrafos: [
        'Abertura é técnica, não é força. O trabalho é feito com ferramenta própria, atuando no mecanismo da fechadura pelo caminho que ele já usa quando a chave entra. A porta abre e a fechadura continua funcionando como antes — você usa a mesma chave depois.',
        'O método muda conforme a fechadura. Fechadura comum de cilindro, fechadura tetra, trava auxiliar, porta de correr e fechadura de loja têm abordagens diferentes, e é por isso que ajuda muito você me descrever a porta por telefone antes de eu sair.',
        'Tem casos em que a fechadura já estava quebrada antes de você chegar na porta — mola solta, trinco partido, segredo moído de tanto uso. Nesses, abrir é só metade do serviço: a peça vai precisar ser trocada. Quando for esse o caso, eu te aviso antes de começar, com o valor, e você decide.',
      ],
    },
    {
      titulo: 'As situações que eu mais atendo',
      paragrafos: ['Se a sua é uma dessas, pode ligar que é resolvível:'],
      itens: [
        'A porta bateu com o vento e a chave ficou dentro.',
        'Perdeu a chave na rua, na praia ou no trabalho.',
        'A chave quebrou dentro da fechadura.',
        'A fechadura travou e a chave gira sem abrir.',
        'Criança ou animal trancado sozinho dentro de casa.',
        'Loja ou escritório que não abre no começo do expediente.',
        'Porta de quarto ou banheiro que trancou com alguém dentro.',
      ],
    },
    {
      titulo: 'Vou te pedir documento. E isso é bom.',
      paragrafos: [
        'Antes de abrir qualquer porta, eu confirmo que você mora ou trabalha ali. Pode ser documento com o endereço, conta de luz, contrato de aluguel, ou a confirmação da portaria do prédio.',
        'Pode parecer burocracia na pior hora, mas pensa pelo outro lado: você quer morar numa rua onde o chaveiro abre a porta de qualquer apartamento para qualquer pessoa que ligar dizendo que esqueceu a chave? Chaveiro que não pergunta nada é exatamente o que você não quer por perto.',
        'Se você está sem documento nenhum em mãos, a gente resolve de outro jeito — porteiro, vizinho, síndico ou foto do documento no celular costumam resolver. É só me avisar quando ligar.',
      ],
    },
    {
      titulo: 'Onde eu atendo e em quanto tempo',
      paragrafos: [
        // REVISAR: Gleiton precisa confirmar o tempo medio real por regiao.
        'A base fica em Copacabana, então Zona Sul é onde eu chego mais rápido: Ipanema, Leblon, Arpoador, Leme, Botafogo, Flamengo, Laranjeiras e vizinhança. Também atendo Barra da Tijuca, Centro e boa parte do Rio, combinando o deslocamento na hora da ligação.',
        'Quando você ligar, me diga o bairro, o tipo de porta e o que aconteceu. Com isso eu te dou uma previsão real de quando chego — e não uma promessa genérica que nenhum chaveiro cumpre no trânsito do Rio.',
      ],
    },
  ],

  perguntas: [
    {
      pergunta: 'Abrir a porta vai estragar minha fechadura?',
      resposta:
        'Na maioria dos casos, não. O trabalho é de abertura técnica, não de arrombamento — a porta abre e a fechadura segue funcionando com a mesma chave. Quando a fechadura já está danificada e vai precisar ser trocada, eu aviso antes de começar.',
    },
    {
      pergunta: 'A chave quebrou dentro da fechadura. Tem jeito?',
      resposta:
        'Tem. Na maior parte das vezes dá para extrair o pedaço preso e aproveitar a fechadura, fazendo uma chave nova depois. Só não tente tirar sozinho com alicate ou arame: empurrar o pedaço mais para dentro é o que transforma um serviço simples em troca de cilindro.',
    },
    {
      pergunta: 'Quanto tempo leva para abrir?',
      resposta:
        'A abertura em si costuma ser rápida — o que pesa no tempo total é o deslocamento até você e o tipo de fechadura. Fechadura comum é mais rápida que tetra ou trava auxiliar. Me diga pelo telefone qual é a sua que eu te dou uma previsão honesta.',
    },
    {
      pergunta: 'Tem criança trancada dentro de casa. O que eu faço?',
      resposta:
        'Liga imediatamente e avisa logo na primeira frase que tem criança ou animal lá dentro — esse chamado passa na frente. Enquanto eu vou, mantenha a criança falando com você pela porta e não tente arrombar: estilhaço de madeira e vidro do outro lado é um risco pior que a espera.',
    },
    {
      pergunta: 'Vocês atendem de madrugada mesmo?',
      resposta:
        'Sim, 24 horas, todos os dias, incluindo feriado. Atendimento de madrugada tem valor diferente do atendimento durante o dia, e isso é dito antes de eu sair — nunca na hora de pagar.',
    },
    {
      pergunta: 'Abre porta de loja e de escritório também?',
      resposta:
        'Abro. Loja, escritório, consultório e sala comercial entram no mesmo atendimento, incluindo fechadura de porta de vidro e trava de rolo de ferro. Para local comercial eu confirmo com o responsável antes de abrir.',
    },
  ],
};
