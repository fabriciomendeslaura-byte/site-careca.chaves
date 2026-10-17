import type { Bairro } from './tipos';

/**
 * Pagina: chaveiro no Leblon.
 *
 * Angulo proprio: imovel fechado por temporadas, fechadura digital com acesso
 * para terceiros (diarista, caseiro, administradora) e portaria com registro.
 *
 * ⚠️ REVISAR COM O GLEITON: se ele atende chamado de administradora e
 * imobiliaria, que e comum nesse perfil de imovel.
 */
export const leblon: Bairro = {
  slug: 'leblon',
  nome: 'Leblon',
  regiao: 'Zona Sul',
  tituloSeo: 'Chaveiro 24h no Leblon | Careca Chaves',
  descricaoSeo:
    'Chaveiro 24 horas no Leblon. Fechadura digital, abertura de porta, troca de segredo e cópia de controle. Atendimento residencial e comercial.',
  h1: 'Chaveiro 24 horas no Leblon',
  chamada:
    'Do Jardim de Alah à Avenida Niemeyer, da Dias Ferreira à orla. Atendo residência, apartamento de temporada, loja e escritório, a qualquer hora.',

  blocos: [
    {
      titulo: 'Quem entra na sua casa quando você não está',
      paragrafos: [
        'Tem uma situação que aparece muito em imóvel do Leblon: várias pessoas precisam entrar em momentos diferentes. Diarista às terças, caseiro para regar as plantas, alguém da administradora para uma vistoria, parente que vem no fim de semana.',
        'A solução que a maioria usa é a pior: distribuir cópias da chave. Cada cópia é um acesso que você não controla, não revoga e não sabe quando foi usado.',
        'Fechadura digital resolve isso de um jeito que chave nenhuma resolve. Cada pessoa tem o próprio código ou a própria digital. Quando alguém deixa de trabalhar com você, apaga aquele acesso e pronto — sem trocar fechadura, sem recolher chave, sem conversa constrangedora. E nos modelos com aplicativo, você vê quem abriu e a que horas.',
      ],
    },
    {
      titulo: 'Apartamento que fica fechado meses',
      paragrafos: [
        'Boa parte dos imóveis do bairro é segunda residência: fica fechado durante o ano e é usado em temporadas. Fechadura parada apresenta um problema que fechadura usada não tem.',
        'Com a maresia do Leblon, o mecanismo oxida por dentro. Aí você chega depois de meses, enfia a chave e ela não gira — ou gira e não abre. É mais comum do que parece, e quase sempre acontece justamente no dia da chegada, com mala na mão.',
        'Duas coisas evitam isso: lubrificação adequada na manutenção, e não deixar a fechadura trancada à força quando ela já está dura. Se o seu apartamento fica fechado por longos períodos, vale uma revisão antes da temporada em vez de uma emergência no primeiro dia.',
      ],
    },
    {
      titulo: 'Portaria que registra tudo',
      paragrafos: [
        'Prédio do Leblon costuma ter portaria 24 horas com registro de entrada de prestador. Isso é ótimo para a sua segurança e bom para mim também: fica documentado quem entrou, quando e a pedido de quem.',
        'Só peço que me avise antes como funciona o seu prédio, principalmente se o chamado for de madrugada. Alguns condomínios exigem autorização do morador por telefone, outros pedem cadastro prévio na administradora.',
      ],
    },
    {
      titulo: 'Comércio e escritório',
      paragrafos: [
        'A Dias Ferreira e o entorno concentram restaurante, loja e escritório — e nesses, o problema de chave raramente é perder: é não saber mais quantas cópias existem.',
        'Para comércio eu costumo sugerir acesso individual, por código ou por tag numerada. Além de resolver a rotatividade de equipe, dá para saber quem abriu o estabelecimento em cada dia, o que muda completamente a conversa quando algo acontece fora do horário.',
      ],
    },
  ],

  perguntas: [
    {
      pergunta: 'Dá para dar acesso só à diarista, em dias específicos?',
      resposta:
        'Nos modelos de fechadura digital com aplicativo, dá: você cria um código para ela e pode limitar ou apagar quando quiser. Nos modelos mais simples, o código existe até você apagar — o que já resolve a maior parte dos casos.',
    },
    {
      pergunta: 'Meu apartamento fica fechado meses. A fechadura sofre?',
      resposta:
        'Sofre, principalmente pela maresia. O mecanismo oxida por dentro e a chave começa a dar trabalho justamente no dia em que você chega. Revisão antes da temporada custa bem menos que abertura de emergência com mala na porta.',
    },
    {
      pergunta: 'Atende chamado de imobiliária ou administradora?',
      resposta:
        'Atendo, desde que haja autorização de quem responde pelo imóvel. Antes de abrir qualquer porta eu confirmo quem está pedindo e com que direito — é o que protege o proprietário.',
    },
    {
      pergunta: 'Instala fechadura digital em porta de prédio antigo?',
      resposta:
        'Na maioria dos casos, sim, aproveitando a furação que já existe. Manda foto da porta aberta, da fechadura atual e do batente pelo WhatsApp que eu te digo qual modelo encaixa antes de você comprar.',
    },
    {
      pergunta: 'Quanto tempo leva para chegar no Leblon?',
      resposta:
        'Saio de Copacabana, então é a Zona Sul inteira pelo mesmo caminho. Ao ligar, me diga a rua que eu te passo uma previsão real considerando o trânsito daquela hora — de madrugada, costuma ser bem mais rápido.',
    },
  ],
};
