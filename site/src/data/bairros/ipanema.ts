import type { Bairro } from './tipos';

/**
 * Pagina: chaveiro em Ipanema.
 *
 * Angulo proprio do bairro: condominio com regra para prestador de servico,
 * aluguel de temporada e comercio de rua de alto padrao com porta de vidro.
 *
 * ⚠️ REVISAR COM O GLEITON: se ele ja tem cadastro em alguma administradora
 * da regiao e quanto tempo leva de Copacabana ate Ipanema na pratica.
 */
export const ipanema: Bairro = {
  slug: 'ipanema',
  nome: 'Ipanema',
  regiao: 'Zona Sul',
  tituloSeo: 'Chaveiro 24h em Ipanema | Careca Chaves',
  descricaoSeo:
    'Chaveiro 24 horas em Ipanema. Abertura de porta, fechadura digital, troca de segredo e chaveiro automotivo. Saio de Copacabana, o bairro ao lado.',
  h1: 'Chaveiro 24 horas em Ipanema',
  chamada:
    'Saio de Copacabana, o bairro vizinho — do Arpoador à Rua Farme de Amoedo, da praia à Lagoa. Atendimento a qualquer hora, inclusive de madrugada e feriado.',

  blocos: [
    {
      titulo: 'Seu prédio exige cadastro de prestador?',
      paragrafos: [
        'Boa parte dos prédios de Ipanema tem portaria 24 horas e regra própria para quem presta serviço: identificação na entrada, autorização do morador, às vezes cadastro prévio na administradora.',
        'Isso é bom — é sinal de prédio bem administrado. Mas vira problema quando você está trancado do lado de fora às duas da manhã e o porteiro da madrugada não sabe se pode me deixar subir.',
        'Então me avise ao ligar como funciona a portaria do seu prédio. Se precisar, eu falo com o porteiro ou com o síndico antes de ir, e você não fica esperando no corredor enquanto alguém decide.',
      ],
    },
    {
      titulo: 'Fechadura de alta segurança',
      paragrafos: [
        'Ipanema tem uma concentração grande de fechadura tetra, trava auxiliar e cilindro de segurança — mais do que a média da Zona Sul. Faz sentido: imóvel de valor alto, morador preocupado com segurança, e muito prédio que já exigiu padrão de porta na reforma.',
        'Esse tipo de fechadura pede duas coisas de quem vai mexer: ferramenta certa e saber o que está fazendo. Abertura de tetra não é igual a abertura de fechadura comum, e troca de segredo dela usa peça específica.',
        'Quando ligar, me diga como é a sua chave: se tem quatro faces com furinhos, é tetra. Se preferir, manda foto da chave pelo WhatsApp que eu identifico na hora e já levo o que precisa.',
      ],
    },
    {
      titulo: 'Apartamento alugado por temporada',
      paragrafos: [
        'Ipanema divide com Copacabana a liderança de aluguel por temporada no Rio. Se o seu apartamento é um desses, cada hóspede que passou por ele teve sua chave na mão.',
        'A maioria é gente de bem. Mas cópia de chave é barata, não deixa rastro e não tem prazo de validade — e você nunca vai saber se existe uma circulando.',
        'As duas saídas, dependendo da rotatividade:',
      ],
      itens: [
        'Troca de segredo entre temporadas: as chaves antigas param de abrir na hora.',
        'Fechadura digital com senha por hóspede: você cria e apaga o acesso pelo celular, sem chave física, sem combinar entrega e devolução na portaria.',
      ],
    },
    {
      titulo: 'Loja na Visconde de Pirajá',
      paragrafos: [
        'O comércio de Ipanema tem muita porta de vidro temperado — e porta de vidro tem fechadura própria, diferente da de madeira.',
        'Faço instalação, troca e abertura de fechadura de piso, trava para porta dupla e fechadura digital para vidro, que resolve de uma vez o problema de ter chave circulando entre funcionários.',
        'Para loja, a conta costuma ser essa: quanto custa trocar a fechadura toda vez que alguém sai da equipe, contra ter código individual que você revoga em dez segundos.',
      ],
    },
  ],

  perguntas: [
    {
      pergunta: 'Você vem de Copacabana até Ipanema?',
      resposta:
        'Venho, e é perto — os bairros são vizinhos. Ao ligar, me diga a rua e a altura que eu te dou uma previsão real de chegada, considerando o trânsito daquele momento.',
    },
    {
      pergunta: 'Meu prédio pede autorização para prestador. Complica?',
      resposta:
        'Não complica, mas avise antes. Com o aviso, eu já chego combinando com a portaria ou falo com o síndico no caminho. Sem o aviso, o risco é você ficar esperando enquanto o porteiro da madrugada tenta localizar alguém que autorize.',
    },
    {
      pergunta: 'Minha fechadura é tetra. Você abre?',
      resposta:
        'Abro. Fechadura tetra, trava auxiliar e cilindro de alta segurança exigem ferramenta e técnica próprias, e costumam levar mais tempo que uma fechadura comum. Me diga pelo telefone qual é a sua para eu já sair preparado.',
    },
    {
      pergunta: 'Instala fechadura digital em porta de vidro de loja?',
      resposta:
        'Instalo. Existem modelos próprios para vidro temperado, sem precisar furar a folha de vidro. É uma das instalações mais pedidas pelo comércio da Visconde de Pirájá e das transversais.',
    },
    {
      pergunta: 'Atende de madrugada em Ipanema?',
      resposta:
        'Sim, 24 horas, todos os dias, inclusive feriado. A madrugada concentra boa parte dos chamados de porta trancada, na volta para casa.',
    },
  ],
};
