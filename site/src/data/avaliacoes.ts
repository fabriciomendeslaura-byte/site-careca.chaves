/**
 * Avaliacoes reais do Perfil da Empresa no Google.
 *
 * REGRAS, e elas nao sao estilo — sao o que separa prova social de propaganda:
 *
 * 1. O texto e EXATO, como a pessoa escreveu. Nao corrigimos erro de digitacao
 *    nem melhoramos a frase: avaliacao editada deixa de ser avaliacao.
 * 2. O nome e o mesmo que aparece no Google, publico no perfil.
 * 3. Nada aqui e inventado. Se um dia faltar avaliacao, a secao mostra menos
 *    — nunca uma escrita por nos.
 * 4. Nao marcar como `Review` nos dados estruturados: o Google proibe um site
 *    marcar como propria a nota vinda do proprio Google.
 *
 * As 78 avaliacoes completas estao no perfil, e o link esta ao lado da secao.
 * Conferidas e transcritas em 17/10/2026.
 */

export interface Avaliacao {
  nome: string;
  /** Mes e ano aproximados, calculados do "ha X semanas" que o Google mostra. */
  quando: string;
  /** Texto exato, sem correcao. */
  texto: string;
  /** Local Guide e um selo do Google para quem avalia com frequencia. */
  localGuide?: boolean;
  /**
   * Bairro citado pelo proprio cliente no texto.
   *
   * Serve para a pagina daquele bairro mostrar primeiro quem fala dele — e
   * isso so vale porque a pessoa escreveu o nome do bairro, nao porque a gente
   * decidiu que a avaliacao "combina" com ele.
   */
  bairroCitado?: string;
}

export const avaliacoes: Avaliacao[] = [
  {
    nome: 'Karla Boechat',
    quando: 'fevereiro de 2026',
    texto:
      'Gleiton é nosso chaveiro há anos. Profissional de primeiríssima qualidade, responde rapidamente, nunca nos deixou na mão sem uma solução. Competente, perfeccionista, paciente, atencioso e empático com as senhorinhas. Temos total segurança em recebê-lo dentro de casa. Super recomendo.',
  },
  {
    nome: 'Maira Lunieres',
    quando: 'setembro de 2026',
    texto:
      'gente finíssima!! estávamos desesperados e ele prontamente apareceu para nos ajudar. pura simpatia e sem cobrar preços absurdos. recomendo demais.',
  },
  {
    nome: 'Ana Paula Rodrigues',
    quando: 'fevereiro de 2026',
    texto:
      'Excele profissional, honesto, organizado, faz o serviço rapidamente sem enrolação. Nota 1000. Podem contratar o serviço sem medo',
  },
  {
    nome: 'Joana Pantaleao',
    quando: 'fevereiro de 2026',
    texto:
      'Muito simpático e competente. Instalou a maçaneta muito rapidamente e me explicou o necessário para uso de forma clara. Recomendo o trabalho!',
  },
  {
    nome: 'Geniana Zinkiewicz',
    quando: 'fevereiro de 2026',
    texto: 'Excelente e rápido atendimento. Resolveu o problema.',
    localGuide: true,
  },
  {
    nome: 'Henrique Ferreira',
    quando: 'fevereiro de 2026',
    texto: 'Careca entendi muito,honesto e serio!!!',
  },
  {
    nome: 'Rodrigo Pinheiro',
    quando: 'janeiro de 2026',
    texto:
      'Objetivo, educado e prestativo . Resolveu meu problema num domingo em Copacabana e super recomendo.',
    bairroCitado: 'Copacabana',
  },
  {
    nome: 'Ilona Kosa',
    quando: 'fevereiro de 2026',
    texto:
      'profissional com muita dedicação, se não fosse não teria aberto minha porta pois a própria deu um trabalho enorme .educado e sabe o que faz recomendo!',
  },
];

/**
 * Coloca na frente quem citou o bairro.
 *
 * Usado nas paginas de bairro: quem chega em /chaveiro-copacabana ve primeiro
 * a avaliacao de alguem que escreveu "Copacabana" com as proprias palavras.
 */
export function avaliacoesDoBairro(nomeDoBairro: string): Avaliacao[] {
  return [...avaliacoes].sort((a, b) => {
    const aCita = a.bairroCitado === nomeDoBairro ? 0 : 1;
    const bCita = b.bairroCitado === nomeDoBairro ? 0 : 1;
    return aCita - bCita;
  });
}
