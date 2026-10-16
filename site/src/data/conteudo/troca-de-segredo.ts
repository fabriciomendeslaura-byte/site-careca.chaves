import type { ConteudoPagina } from './tipos';

/**
 * Pagina: troca de segredo.
 *
 * ⚠️ REVISAR COM O GLEITON: quantas chaves ele entrega por padrao e se ele
 * faz troca de segredo em fechadura tetra na hora ou se precisa encomendar.
 */
export const trocaDeSegredo: ConteudoPagina = {
  slug: 'troca-de-segredo',
  tituloSeo: 'Troca de Segredo de Fechadura no Rio | Careca Chaves',
  descricaoSeo:
    'Troca de segredo de fechadura em Copacabana e Zona Sul do Rio. As chaves antigas param de abrir na hora. Mudança, chave perdida ou cópia em mãos erradas.',
  h1: 'Troca de segredo de fechadura',
  chamada:
    'Alguém ficou com uma cópia da sua chave e você perdeu o sono por causa disso. Troco o segredo da fechadura e as chaves antigas param de abrir na mesma hora — sem precisar trocar a fechadura inteira.',

  secoes: [
    {
      titulo: 'Trocar o segredo não é trocar a fechadura',
      paragrafos: [
        'Essa confusão é comum e custa dinheiro a quem não sabe. A fechadura é o conjunto inteiro: corpo, trinco, maçaneta, cilindro. O segredo é só a parte que reconhece a sua chave — o miolo.',
        'Na troca de segredo, a fechadura continua na porta. O que muda é a combinação interna: os pinos são reorganizados ou o cilindro é substituído, e passa a existir uma chave nova. A partir daquele momento, nenhuma chave antiga abre mais aquela porta.',
        'Resultado prático: você resolve o problema de segurança pagando bem menos que uma fechadura nova, e sem furar porta nenhuma. Trocar a fechadura inteira só faz sentido quando ela está com defeito mecânico ou quando você quer subir de nível de segurança.',
      ],
    },
    {
      titulo: 'Quando você precisa trocar o segredo',
      paragrafos: [
        'Se você se reconheceu em alguma dessas, não deixa para depois — a chave que está fora da sua mão não tem prazo de validade:',
      ],
      itens: [
        'Acabou de se mudar: você não faz ideia de quantas cópias o morador anterior deixou pelo caminho.',
        'Perdeu a chave na rua, e ela estava no mesmo chaveiro que algo com seu endereço.',
        'Fim de relacionamento, saída de hóspede ou de alguém que morava junto.',
        'Demissão de funcionário, diarista ou caseiro que tinha acesso.',
        'Fim de contrato de aluguel, com inquilino saindo ou entrando.',
        'Obra ou reforma recém-terminada, em que várias pessoas circularam com a chave.',
        'A chave está difícil de girar — às vezes o segredo está gasto, e aí a troca resolve segurança e funcionamento de uma vez.',
      ],
    },
    {
      titulo: 'Como é feito',
      paragrafos: [
        'O serviço é feito na sua porta e costuma ser rápido. Abro a fechadura, trabalho no cilindro ou substituo ele por um novo, testo a abertura e o fechamento várias vezes com a porta aberta e fechada, e entrego as chaves novas na sua mão.',
        'Antes de ir embora, você mesmo tranca e destranca na minha frente, com a porta fechada. Serviço de chaveiro que não é testado com a porta encostada é serviço pela metade — tem fechadura que funciona perfeitamente no ar e emperra no batente.',
        // REVISAR: confirmar com o Gleiton o numero padrao de chaves entregues.
        'As chaves antigas podem ser descartadas: elas não abrem mais nada. Se você quiser cópias adicionais da chave nova, eu já faço na hora.',
      ],
    },
    {
      titulo: 'Funciona em qualquer fechadura?',
      paragrafos: [
        'Na grande maioria, sim. Fechadura comum de cilindro é o caso mais simples e mais rápido. Fechadura tetra, de pino em cruz e modelos de alta segurança também têm troca de segredo, com peça específica.',
        'Também faço troca de segredo em cadeado de alta segurança, trava auxiliar e fechadura de porta de vidro de loja.',
        'Me manda uma foto da sua chave e outra da fechadura pelo WhatsApp. Pela foto da chave dá para identificar o tipo na hora e já te dizer o que o seu caso precisa.',
      ],
    },
  ],

  perguntas: [
    {
      pergunta: 'As chaves antigas param de funcionar mesmo?',
      resposta:
        'Param, imediatamente. Depois da troca, a única chave que abre aquela porta é a nova. É exatamente para isso que o serviço existe — quem tiver cópia antiga vai girar e não vai acontecer nada.',
    },
    {
      pergunta: 'É mais barato que trocar a fechadura?',
      resposta:
        'Na maioria dos casos, bem mais barato, porque você aproveita a fechadura que já está instalada. Trocar a fechadura inteira só compensa quando ela tem defeito mecânico ou quando você quer aumentar o nível de segurança da porta.',
    },
    {
      pergunta: 'Dá para fazer em fechadura tetra?',
      resposta:
        'Dá. Fechadura tetra, de pino em cruz e modelos de alta segurança aceitam troca de segredo com a peça correta. Me manda uma foto da chave pelo WhatsApp que eu identifico o tipo e confirmo antes de ir.',
    },
    {
      pergunta: 'Quantas chaves eu recebo?',
      resposta:
        'O conjunto vem com as chaves do próprio segredo, e eu faço cópias adicionais na hora se você precisar de mais — para quem mora junto, para a diarista ou para deixar uma reserva com alguém de confiança.',
    },
    {
      pergunta: 'Acabei de alugar um apartamento. Preciso trocar?',
      resposta:
        'É uma das situações em que mais vale a pena. Você não tem como saber quantas cópias existem do imóvel que acabou de alugar: corretor, imobiliária, morador anterior, pintor da reforma. Trocar o segredo na mudança é barato e resolve tudo isso de uma vez.',
    },
  ],
};
