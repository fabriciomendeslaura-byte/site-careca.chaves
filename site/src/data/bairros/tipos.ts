/** Formato do conteudo de uma pagina de bairro. */

export interface BlocoBairro {
  titulo: string;
  paragrafos: string[];
  itens?: string[];
}

export interface Bairro {
  /** Pedaco da URL: /chaveiro-<slug> */
  slug: string;
  nome: string;
  /** Zona ou regiao, usada na trilha de navegacao. */
  regiao: string;
  tituloSeo: string;
  descricaoSeo: string;
  h1: string;
  chamada: string;
  /**
   * O que torna este bairro diferente dos outros para um chaveiro.
   *
   * Este campo e o que separa uma pagina util de uma doorway page — aquela
   * copia trocando so o nome do bairro, que o Google pune. Se nao houver nada
   * de verdade para escrever aqui, a pagina nao deve existir.
   */
  blocos: BlocoBairro[];
  perguntas: { pergunta: string; resposta: string }[];
}
