/** Formato do conteudo longo de uma pagina de servico. */

export interface Secao {
  titulo: string;
  paragrafos: string[];
  /** Lista opcional ao fim da secao, quando o conteudo e enumeravel. */
  itens?: string[];
}

export interface ConteudoPagina {
  /** Pedaco da URL: /servicos/<slug> */
  slug: string;
  /** Titulo da aba e do Google. Ate ~60 caracteres para nao cortar. */
  tituloSeo: string;
  /** Resumo que aparece sob o titulo no Google. Ate ~155 caracteres. */
  descricaoSeo: string;
  /** H1 da pagina. Diferente do titulo do card: aqui ele e a promessa. */
  h1: string;
  /** Primeiro paragrafo, logo abaixo do H1. */
  chamada: string;
  secoes: Secao[];
  /** Perguntas desta pagina. Alimentam o acordeao e os dados estruturados. */
  perguntas: { pergunta: string; resposta: string }[];
}
