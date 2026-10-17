import type { Bairro } from './tipos';

/**
 * Pagina: chaveiro em Copacabana.
 *
 * E o bairro-sede: a loja fica na Rua Siqueira Campos. Por isso esta pagina
 * pode falar com propriedade de coisas que as outras nao podem.
 *
 * ⚠️ REVISAR COM O GLEITON: o tempo de chegada e as fechaduras que ele mais
 * encontra nos predios do bairro.
 */
export const copacabana: Bairro = {
  slug: 'copacabana',
  nome: 'Copacabana',
  regiao: 'Zona Sul',
  tituloSeo: 'Chaveiro 24h em Copacabana | Careca Chaves',
  descricaoSeo:
    'Chaveiro 24 horas em Copacabana, com loja na Rua Siqueira Campos. Abertura de porta, fechadura digital, troca de segredo e chaveiro automotivo.',
  h1: 'Chaveiro 24 horas em Copacabana',
  chamada:
    'A loja fica na Rua Siqueira Campos, 30 — dentro de Copacabana. É o bairro onde eu chego mais rápido, a qualquer hora do dia ou da madrugada.',

  blocos: [
    {
      titulo: 'Eu trabalho aqui dentro',
      paragrafos: [
        'Não sou chaveiro que atende Copacabana vindo de longe. A oficina fica na Siqueira Campos, a um quarteirão do metrô, entre a Barata Ribeiro e a Nossa Senhora de Copacabana.',
        'Isso muda o atendimento na prática: do Posto 2 ao Posto 6, do Leme à divisa com Ipanema, é deslocamento curto. E de madrugada, quando o trânsito do bairro esvazia, fica mais curto ainda.',
        'Também significa que, se o seu caso precisar de uma peça, uma cópia na máquina ou um cilindro específico, a bancada está logo ali — não é uma viagem de ida e volta para o outro lado da cidade.',
      ],
    },
    {
      titulo: 'As fechaduras de Copacabana têm uma idade',
      paragrafos: [
        'Boa parte dos prédios do bairro foi construída entre as décadas de 1940 e 1970. São prédios bonitos, de estrutura sólida, com porta de entrada de madeira maciça — e, em muitos apartamentos, a fechadura original ou uma troca feita há décadas.',
        'Fechadura antiga dá dois tipos de dor de cabeça. A primeira é o desgaste: o segredo vai moendo com o tempo, a chave começa a exigir aquele jeitinho para girar e um dia não gira mais. A segunda é a segurança: cilindro antigo cede com facilidade a técnicas que hoje qualquer um aprende na internet.',
        'Isso não significa que você precise trocar tudo. Muita fechadura antiga de Copacabana é melhor que modelo barato de hoje e só precisa de manutenção ou troca de cilindro. Eu te digo qual é o seu caso olhando a peça.',
      ],
    },
    {
      titulo: 'Aluguel de temporada: troque o segredo',
      paragrafos: [
        'Copacabana é um dos lugares do Brasil com mais apartamento alugado por temporada. Se o seu é um deles, essa é a parte mais importante desta página.',
        'Cada hóspede que passa pelo apartamento teve a chave na mão. Dá para confiar na maioria, mas basta uma cópia feita em qualquer banca da Barata Ribeiro para existir uma chave do seu imóvel circulando sem você saber — e ela não tem prazo de validade.',
        'Duas saídas, dependendo do seu caso:',
      ],
      itens: [
        'Troca de segredo periódica: barata, rápida, e faz todas as chaves antigas pararem de abrir na hora.',
        'Fechadura digital com senha: você cria uma senha por hóspede e apaga quando ele vai embora. Sem chave física, sem cópia possível, sem combinar entrega e devolução de chave na portaria.',
      ],
    },
    {
      titulo: 'Comércio de rua e porta de loja',
      paragrafos: [
        'A Nossa Senhora de Copacabana, a Barata Ribeiro e as ruas transversais concentram muito comércio de rua — e comércio tem um problema de chave que residência não tem: rotatividade.',
        'Funcionário entra, funcionário sai, e a cópia da chave da loja vai junto. Em loja que funciona assim há anos, ninguém sabe mais quantas chaves existem.',
        'Para esses casos eu costumo sugerir o que separa quem abre de quem só trabalha: fechadura digital com código individual, ou controle de porta de enrolar numerado por pessoa. Quando alguém sai, você revoga aquele acesso e pronto — sem trocar fechadura, sem reunir todo mundo para devolver chave.',
      ],
    },
    {
      titulo: 'Prédio sem portaria 24 horas',
      paragrafos: [
        'Muito prédio do bairro não tem porteiro de madrugada, e isso é justamente quando a maioria das emergências acontece.',
        'Se for o seu caso, me avisa ao ligar. A gente combina como eu entro no prédio e, quando precisar, eu falo com o síndico ou com a administração antes de subir. Isso evita você ficar esperando no corredor enquanto alguém decide se me deixa passar.',
      ],
    },
  ],

  perguntas: [
    {
      pergunta: 'Em quanto tempo você chega em Copacabana?',
      resposta:
        'Copacabana é onde eu chego mais rápido, porque a oficina fica na Rua Siqueira Campos, dentro do próprio bairro. Ao ligar, me diga a rua e a altura que eu te dou uma previsão real — e não uma promessa genérica que o trânsito do Rio não deixa cumprir.',
    },
    {
      pergunta: 'Atende de madrugada em Copacabana?',
      resposta:
        'Sim, 24 horas, todos os dias, inclusive feriado. Grande parte dos chamados do bairro acontece justamente de madrugada, na volta para casa.',
    },
    {
      pergunta: 'Meu prédio é antigo. A fechadura tem conserto?',
      resposta:
        'Na maioria das vezes, tem. Muita fechadura antiga de Copacabana é de qualidade melhor que modelo barato de hoje, e só precisa de manutenção ou troca do cilindro. Quando a peça está realmente no fim, eu aviso antes de começar.',
    },
    {
      pergunta: 'Alugo por temporada. Com que frequência troco o segredo?',
      resposta:
        'Depende de quantos hóspedes passam. Se a rotatividade é alta, fechadura digital com senha por hóspede sai melhor que trocar o segredo a cada temporada — você cria e apaga o acesso em segundos, sem chaveiro e sem chave física circulando.',
    },
    {
      pergunta: 'Tem loja física para eu levar a chave?',
      resposta:
        'Tem: Rua Siqueira Campos, 30, em Copacabana. Para cópia de chave, cópia de controle e serviços de bancada, pode vir até aqui. Para abertura e instalação, eu vou até você.',
    },
  ],
};
