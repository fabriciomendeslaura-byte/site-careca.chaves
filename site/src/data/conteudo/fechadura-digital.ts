import type { ConteudoPagina } from './tipos';

/**
 * Pagina: instalacao de fechadura digital.
 *
 * ⚠️ REVISAR COM O GLEITON. O texto tecnico veio de conhecimento geral de
 * fechaduras, nao do metodo de trabalho dele. Os pontos marcados com REVISAR
 * dependem de confirmacao antes de virar promessa ao cliente.
 */
export const fechaduraDigital: ConteudoPagina = {

  slug: 'fechadura-digital',
  tituloSeo: 'Instalação de Fechadura Digital no Rio | Careca Chaves',
  descricaoSeo:
    'Instalação de fechadura digital e eletrônica em Copacabana, Ipanema, Leblon e Zona Sul do Rio. Senha, biometria, cartão ou aplicativo na porta que você já tem.',
  h1: 'Instalação de fechadura digital',
  chamada:
    'Sair de casa sem chave no bolso e entrar com o dedo, uma senha ou o celular. Instalo fechadura digital e eletrônica na porta que você já tem, sem obra e sem trocar a porta — em Copacabana, na Zona Sul e em boa parte do Rio.',

  secoes: [
    {
      titulo: 'Dá para instalar na minha porta?',
      paragrafos: [
        'Na maioria das portas, sim. A fechadura digital é instalada no lugar da fechadura que já existe, aproveitando a mesma furação ou ampliando ela. Porta de madeira maciça, porta oca, porta de alumínio, porta de ferro e porta de vidro temperado têm solução — o que muda é o modelo e a forma de fixar.',
        'O que define se dá certo não é a marca da porta, e sim três medidas: a espessura da porta, a distância entre a borda e o centro da fechadura, e o espaço livre do lado de dentro para o módulo que fica atrás.',
        'Manda uma foto da porta aberta, uma da fechadura atual e uma do batente pelo WhatsApp. Com isso eu já te digo qual tipo encaixa, antes de você comprar qualquer coisa.',
      ],
    },
    {
      titulo: 'Os tipos de abertura',
      paragrafos: [
        'Quase todo modelo moderno combina mais de uma forma de abrir, e isso é proposital: se uma falhar, você entra pela outra.',
      ],
      itens: [
        'Senha numérica — não depende de levar nada com você. Dá para cadastrar senha de visita e apagar depois.',
        'Biometria (digital) — o jeito mais rápido no dia a dia. Costuma falhar com a mão molhada ou muito ressecada.',
        'Cartão ou tag de aproximação — bom para funcionário, diarista e prestador, porque você entrega e recolhe o acesso sem mexer em senha.',
        'Aplicativo no celular — permite abrir de longe e ver o registro de quem entrou e a que horas.',
        'Chave mecânica de emergência — a maioria mantém um segredo comum escondido. É a sua garantia de entrar mesmo sem energia.',
      ],
    },
    {
      titulo: 'E se acabar a bateria?',
      paragrafos: [
        'Essa é a pergunta que todo mundo faz, e a resposta é mais tranquila do que parece. A fechadura digital é alimentada por pilhas comuns, que costumam durar de seis meses a um ano no uso residencial.',
        'Ela não desliga de surpresa: começa a avisar com antecedência, com aviso sonoro ou luminoso a cada abertura, por semanas antes de acabar de fato.',
        'E mesmo que você ignore todos os avisos, existe saída. Boa parte dos modelos aceita carga de emergência por fora — encostando um carregador portátil ou uma bateria de 9V nos contatos — o suficiente para abrir e trocar as pilhas. Quando o modelo tem chave mecânica, ela resolve também.',
        'Na instalação eu mostro onde fica cada uma dessas saídas na sua fechadura, e deixo você abrindo e fechando na minha frente antes de ir embora.',
      ],
    },
    {
      titulo: 'Fechadura digital é segura?',
      paragrafos: [
        'A segurança de uma porta quase nunca está na fechadura sozinha — está no conjunto: a resistência da porta, a qualidade do batente, o tamanho do trinco e quantos pontos ela tranca.',
        'Uma fechadura digital boa resolve problemas que a mecânica não resolve: não tem segredo para copiar, não tem chave para perder, e você revoga o acesso de alguém sem precisar trocar nada. Quando o caseiro, o ex-inquilino ou a antiga diarista saem, você apaga a senha e acabou.',
        'Por outro lado, fechadura barata demais costuma economizar justamente no que importa: o trinco fino, o material do corpo e o acabamento que resiste a pancada. Para porta principal de rua, vale subir de faixa e escolher um modelo com trava reforçada.',
        // REVISAR: Gleiton deve confirmar quais marcas ele trabalha e instala.
        'Na hora de escolher, eu te digo o que vale para o seu caso e o que é só enfeite de catálogo. Sem empurrar o modelo mais caro.',
      ],
    },
    {
      titulo: 'Como é o serviço',
      paragrafos: [
        'A instalação costuma ficar entre uma e duas horas, dependendo de a furação já existir ou precisar ser feita. Deixo a porta limpa e funcionando antes de sair.',
        'Faço a instalação de fechadura que você já comprou e também ajudo na escolha, se você ainda não comprou. Atendo residência, apartamento, loja, consultório e escritório.',
        'Também faço a manutenção de quem já tem: fechadura desalinhada, biometria que parou de ler, troca de módulo e reprogramação de senhas quando alguém saiu de casa.',
      ],
    },
  ],

  perguntas: [
    {
      pergunta: 'Preciso trocar a minha porta?',
      resposta:
        'Na grande maioria dos casos, não. A fechadura digital ocupa o lugar da que já existe. A troca de porta só entra quando a porta está empenada, podre ou com o batente comprometido — e aí o problema não era a fechadura.',
    },
    {
      pergunta: 'Funciona em porta de vidro de loja?',
      resposta:
        'Funciona. Existem modelos específicos para vidro temperado, que dispensam furar a folha de vidro. É uma das instalações mais pedidas por comércio, porque resolve o problema de ter várias cópias de chave circulando entre funcionários.',
    },
    {
      pergunta: 'Dá para cadastrar mais de uma pessoa?',
      resposta:
        'Dá, e é uma das maiores vantagens. Cada morador tem a própria digital ou senha, e dá para criar acesso separado para diarista, síndico ou visita e apagar quando não precisar mais. Nos modelos com aplicativo, você ainda vê o registro de quem abriu e a que horas.',
    },
    {
      pergunta: 'Você instala fechadura comprada pela internet?',
      resposta:
        'Instalo. Só peça a minha opinião antes de comprar — já vi gente comprar modelo que não encaixa na espessura da porta e perder o dinheiro. Uma foto pelo WhatsApp evita isso.',
    },
    {
      pergunta: 'Atende em condomínio com regra de obra?',
      resposta:
        'Sim. A instalação não é obra: não quebra parede, não faz sujeira e normalmente leva pouco mais de uma hora. Mesmo assim, alguns prédios pedem aviso prévio à portaria — vale conferir no seu antes de marcar o horário.',
    },
  ],
};
