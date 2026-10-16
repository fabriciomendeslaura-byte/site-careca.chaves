import type { ConteudoPagina } from './tipos';

/**
 * Pagina: instalacao, troca e conserto de fechadura mecanica.
 *
 * ⚠️ REVISAR COM O GLEITON: se ele fornece a fechadura ou so instala a que o
 * cliente compra, e quais marcas ele recomenda.
 */
export const instalacaoDeFechadura: ConteudoPagina = {
  slug: 'instalacao-de-fechadura',
  tituloSeo: 'Instalação e Troca de Fechadura no Rio | Careca Chaves',
  descricaoSeo:
    'Instalação, troca e conserto de fechadura em Copacabana e Zona Sul do Rio. Fechadura comum, tetra, de alta segurança e de porta de vidro.',
  h1: 'Instalação e troca de fechadura',
  chamada:
    'Fechadura emperrando, chave difícil de girar ou porta que só fecha no empurrão. Instalo, troco e conserto fechadura comum, tetra, de alta segurança e de porta de vidro — residência, loja e escritório.',

  secoes: [
    {
      titulo: 'O problema nem sempre é a fechadura',
      paragrafos: [
        'Isso vale te contar antes de você comprar uma fechadura nova achando que resolve.',
        'Boa parte dos chamados de "fechadura com defeito" é, na verdade, desalinhamento. A porta de madeira incha com a umidade do Rio, a dobradiça cede com o tempo, e aí o trinco deixa de encontrar o furo do batente no lugar certo. A fechadura está boa — ela só não consegue entrar onde deveria.',
        'Nesses casos o serviço é de ajuste: regular a dobradiça, corrigir o batente e realinhar a testa da fechadura. Sai bem mais barato que trocar peça, e resolve de verdade. Se eu chegar na sua porta e for isso, é isso que eu vou te dizer — mesmo valendo menos para mim.',
        'Agora, quando a fechadura realmente está gasta — mola solta, trinco partido, segredo moído de anos de uso — aí a troca é o caminho, e empurrar o problema com ajuste só adia.',
      ],
    },
    {
      titulo: 'Os tipos que eu instalo',
      paragrafos: [
        'A escolha depende de três coisas: onde a porta fica, o que ela protege e quanto de segurança o lugar pede.',
      ],
      itens: [
        'Fechadura comum de cilindro — a mais usada em porta interna e de quarto.',
        'Fechadura tetra — mais resistente a tentativa de abertura forçada, comum em porta de entrada.',
        'Fechadura de alta segurança, com trava reforçada e cilindro anti-furto.',
        'Trava auxiliar e tranca tetra, instaladas junto da fechadura principal como segunda barreira.',
        'Fechadura de porta de vidro temperado, de loja e de escritório.',
        'Fechadura de sobrepor e fechadura de embutir, conforme a espessura e o tipo da porta.',
        'Fechadura de porta de correr e de porta de alumínio.',
      ],
    },
    {
      titulo: 'Porta de entrada merece atenção diferente',
      paragrafos: [
        'A porta que dá para a rua ou para o corredor do prédio é a única que separa você de quem passa por ali. Nela, vale pensar no conjunto, não só na peça.',
        'Trinco curto demais sai do batente com pouca pressão. Cilindro simples cede rápido a técnica de arrombamento. Batente frágil entrega a porta inteira mesmo com fechadura boa. E fechadura de um ponto só concentra toda a resistência num lugar.',
        'Para entrada, o que costuma fazer diferença é trinco longo, cilindro de segurança e, quando dá, um segundo ponto de travamento. Não precisa ser a fechadura mais cara da loja — precisa ser a certa para a sua porta.',
        // REVISAR: confirmar se o Gleiton fornece a fechadura ou so instala.
        'Posso instalar a fechadura que você já comprou ou te orientar na escolha antes. Se for comprar sozinho, manda foto da porta e da fechadura atual pelo WhatsApp que eu te digo o que encaixa — evita comprar errado e perder o dinheiro.',
      ],
    },
    {
      titulo: 'Também faço conserto',
      paragrafos: ['Nem todo problema exige peça nova:'],
      itens: [
        'Fechadura dura, que exige força para girar a chave.',
        'Trinco que não recolhe ou que fica preso para fora.',
        'Maçaneta solta, caída ou girando no vazio.',
        'Porta que não fecha sem empurrão por desalinhamento.',
        'Fechadura de loja travada no meio do expediente.',
        'Chave que entra mas não gira, sinal de segredo gasto.',
      ],
    },
  ],

  perguntas: [
    {
      pergunta: 'Minha chave está dura. Preciso trocar a fechadura?',
      resposta:
        'Nem sempre. Chave dura costuma ser desalinhamento da porta ou segredo gasto, e os dois têm conserto. Trocar a fechadura só faz sentido quando a peça está realmente comprometida — eu te digo qual é o seu caso na hora, antes de qualquer gasto.',
    },
    {
      pergunta: 'Instala fechadura que eu comprei?',
      resposta:
        'Instalo. Só manda uma foto da porta e da fechadura antes de comprar, pelo WhatsApp. Já vi gente comprar modelo que não encaixa na espessura da porta ou na distância da furação e perder o valor inteiro.',
    },
    {
      pergunta: 'Qual a diferença da fechadura tetra?',
      resposta:
        'A tetra usa uma chave de quatro faces e um mecanismo mais complexo, o que a torna mais resistente a tentativas de abertura forçada que uma fechadura comum de cilindro. É uma escolha comum para porta de entrada.',
    },
    {
      pergunta: 'Faz fechadura de porta de vidro de loja?',
      resposta:
        'Faço. Existem modelos próprios para vidro temperado, incluindo fechadura de piso e trava para porta dupla. Para comércio, costumo sugerir também avaliar quem tem cópia da chave — é onde mora a maior parte do risco.',
    },
    {
      pergunta: 'Quanto tempo leva a troca?',
      resposta:
        'Quando a nova fechadura aproveita a furação existente, costuma ser rápido. Se precisar adaptar a furação ou corrigir o batente, leva mais. Ao ligar, descreva a porta que eu te dou uma previsão realista.',
    },
  ],
};
