/**
 * Perguntas frequentes.
 *
 * Duas funcoes: derrubar a objecao antes dela virar desistencia, e alimentar o
 * bloco FAQPage dos dados estruturados — que e o que faz a resposta aparecer
 * direto na busca do Google.
 *
 * REGRA: so entra aqui o que e verdade e pode ser conferido. Nada de prazo,
 * preco ou garantia inventados.
 *
 * PENDENTE DE CONFIRMACAO COM O GLEITON (nao escrever antes de ele responder):
 *   - tempo medio de chegada na Zona Sul
 *   - garantia do servico e prazo
 *   - formas de pagamento aceitas
 *   - como e cobrada a taxa de plantao
 */

export interface Pergunta {
  pergunta: string;
  resposta: string;
}

export const faq: Pergunta[] = [
  {
    pergunta: 'Vocês atendem de madrugada mesmo?',
    resposta:
      'Sim. O atendimento é 24 horas, todos os dias, incluindo fim de semana e feriado. Fechadura não escolhe hora para dar problema, e a gente também não escolhe hora para atender.',
  },
  {
    pergunta: 'Abrir a porta vai estragar a minha fechadura?',
    resposta:
      'Na maioria dos casos, não. O trabalho é feito com técnica de abertura, não com arrombamento — a porta abre e a fechadura continua funcionando. Quando a fechadura já está travada por defeito e precisar ser substituída, eu aviso antes de começar.',
  },
  {
    pergunta: 'Como eu sei que não é golpe?',
    resposta:
      'Careca Chaves é empresa registrada, CNPJ 46.690.937/0001-37, com atividade de chaveiro e endereço fixo em Copacabana desde 2022. Você pode conferir o CNPJ no site da Receita Federal antes de abrir a porta para qualquer pessoa.',
  },
  {
    pergunta: 'Vocês pedem documento antes de abrir a porta?',
    resposta:
      'Sim, e isso é proteção sua. Antes de abrir qualquer porta, confirmo se você mora ou trabalha no local. Chaveiro que abre a porta de qualquer um, para qualquer um, é exatamente o que você não quer na sua rua.',
  },
  {
    pergunta: 'Dá para instalar fechadura digital na porta que eu já tenho?',
    resposta:
      'Na maioria das portas, sim — madeira, alumínio ou de vidro, sem precisar de obra. Manda uma foto da sua porta e da fechadura atual pelo WhatsApp que eu te digo qual modelo encaixa.',
  },
  {
    pergunta: 'Quanto custa?',
    resposta:
      'Depende do serviço, do tipo de fechadura e do horário — atendimento de madrugada tem valor diferente do atendimento durante o dia. O orçamento é passado antes de começar o trabalho: você só aprova se concordar, sem surpresa no final.',
  },
  {
    pergunta: 'Qual região vocês atendem?',
    resposta:
      'A base é em Copacabana, então a Zona Sul é onde chego mais rápido: Ipanema, Leblon, Arpoador, Leme, Botafogo, Flamengo e vizinhança. Também atendo Barra da Tijuca, Centro e boa parte do Rio — é só combinar o deslocamento pelo telefone.',
  },
  {
    pergunta: 'Fazem chave de carro também?',
    resposta:
      'Fazemos. Abertura de veículo sem forçar a lataria, cópia de chave com chip, chave canivete e telecomando. Me diga a marca, o modelo e o ano do carro que eu confirmo se atendo o seu.',
  },
];
