/**
 * FONTE UNICA DE VERDADE do negocio.
 *
 * Telefone, endereco, CNPJ e horario sao escritos AQUI e em nenhum outro lugar.
 * O site inteiro — botao de ligar, WhatsApp, rodape, dados estruturados do Google —
 * le deste arquivo. Trocou o telefone? Muda uma linha e tudo acompanha.
 */

/** So os digitos, do jeito que o link `tel:` e a API do WhatsApp exigem. */
const DDI = '55';
const DDD = '21';
const NUMERO = '964621885';

export const negocio = {
  nome: 'Careca Chaves',
  nomeCompleto: 'Careca Chaves — Chaveiro 24h no Rio de Janeiro',
  responsavel: 'Gleiton',
  descricaoCurta:
    'Chaveiro 24 horas no Rio de Janeiro. Abertura de portas, fechaduras digitais, troca de segredo e cópia de controles.',

  telefone: {
    exibicao: `(${DDD}) ${NUMERO.slice(0, 5)}-${NUMERO.slice(5)}`,
    link: `tel:+${DDI}${DDD}${NUMERO}`,
    /** Formato E.164, exigido pelos dados estruturados do Google. */
    e164: `+${DDI}${DDD}${NUMERO}`,
  },

  whatsapp: {
    numero: `${DDI}${DDD}${NUMERO}`,
    /** Mensagem pronta economiza o tempo de quem esta no aperto digitando. */
    mensagemPadrao: 'Olá! Preciso de um chaveiro.',
  },

  endereco: {
    rua: 'Rua Siqueira Campos, 30',
    bairro: 'Copacabana',
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    /* 22031-071 é o que consta no Perfil da Empresa no Google. A Receita traz
       22031-072 para o CNPJ. Mantemos igual ao Google: é de lá que vem o
       endereço que o cliente vê e que o próprio Google cruza com o site. */
    cep: '22031-071',
    /** Aproximado (Copacabana). Acertar pelo pino real do Google Meu Negócio. */
    geo: { lat: -22.9668, lng: -43.1884 },
  },

  cnpj: '46.690.937/0001-37',
  razaoSocial: 'Gleiton Berlanda da Silva',
  atuandoDesde: 2022,

  /**
   * Avaliacoes reais do Perfil da Empresa no Google.
   *
   * E a unica prova social do site, e ela existe porque e verificavel: quem
   * clicar no link ve a mesma nota e o mesmo numero. Nada aqui e estimado.
   *
   * ⚠️ NUMERO CONGELADO NO CODIGO. Conferido em 16/10/2026. Como ele so cresce,
   * ficar defasado subestima o Gleiton — nunca o contrario. Ainda assim, vale
   * atualizar de tempos em tempos.
   */
  avaliacoes: {
    nota: 5.0,
    quantidade: 78,
    conferidoEm: '16/10/2026',
    /** Perfil no Google. E o mesmo link de avaliar, sem o `/review` no fim. */
    link: 'https://g.page/r/CYXqUekp1ZUrEBM',
    /** Abre direto a caixa de escrever avaliacao. Usado no pedido pos-servico. */
    linkAvaliar: 'https://g.page/r/CYXqUekp1ZUrEBM/review',
    /** Identificador do perfil, caso um dia a gente puxe as avaliacoes por API. */
    placeId: 'ChIJW6XyaUXVmwARhepR6SnVlSs',
  },

  atendimento: {
    resumo: '24 horas, todos os dias',
    /** Formato ISO que o Schema.org entende como "sempre aberto". */
    schema: 'Mo-Su 00:00-23:59',
  },

  redes: {
    instagram: 'https://instagram.com/gleiton.chaves_',
    facebook: 'https://www.facebook.com/share/1Fefuf7YS4/',
  },

  site: 'https://chaveiro24horasrj.com.br',
} as const;

/**
 * Monta o link do WhatsApp com a mensagem ja escrita.
 * Cada botao do site manda o contexto dele, para o Gleiton saber de cara
 * qual servico a pessoa precisa sem ter que perguntar.
 */
export function linkWhatsApp(mensagem: string = negocio.whatsapp.mensagemPadrao): string {
  return `https://wa.me/${negocio.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`;
}

export const enderecoCompleto =
  `${negocio.endereco.rua} — ${negocio.endereco.bairro}, ` +
  `${negocio.endereco.cidade}/${negocio.endereco.estado} — CEP ${negocio.endereco.cep}`;
