/**
 * Desenhos dos icones, em traco SVG.
 *
 * Ficam num .ts separado em vez de dentro do componente porque Astro compila o
 * frontmatter de outro jeito e nao aceita `export type` ali — e porque dado e
 * desenho sao coisas diferentes de renderizacao (SRP).
 *
 * Todos juntos pesam menos de 2 kB. Instalar uma biblioteca de icones para usar
 * dezesseis desenhos custaria dezenas de kB no celular de quem esta no 4G.
 */

/** Icones desenhados com linha. */
export type IconeTraco =
  | 'porta'
  | 'digital'
  | 'segredo'
  | 'controle'
  | 'carro'
  | 'fechadura'
  | 'telefone'
  | 'relogio'
  | 'escudo'
  | 'local'
  | 'chave'
  | 'raio'
  | 'check'
  | 'seta'
  | 'instagram'
  | 'facebook';

/** Icones que so funcionam preenchidos. */
export type IconeSolido = 'whatsapp';

export type NomeIcone = IconeTraco | IconeSolido;

export const tracos: Record<IconeTraco, string> = {
  porta: 'M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M3 21h18M15 12h.01',
  digital:
    'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM9 7h6M9 11h2M13 11h2M9 15h2M13 15h2',
  segredo:
    'M12 2a5 5 0 0 1 5 5v3M7 10V7M5 10h14a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a1 1 0 0 1 1-1zM12 14v4',
  controle:
    'M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM10 7h4M10 11h1M13 11h1M10 15h1M13 15h1',
  carro:
    'M5 17h14M6.5 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM20.5 17a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM3 13l1.8-5.2A2 2 0 0 1 6.7 6.5h10.6a2 2 0 0 1 1.9 1.3L21 13v4H3v-4zM3 13h18',
  fechadura: 'M3 11h18v10H3zM7 11V7a5 5 0 0 1 10 0v4M12 15v2',
  telefone:
    'M6.6 3h3l1.5 4-2 1.4a13 13 0 0 0 6.5 6.5l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.6 17.6 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3z',
  relogio: 'M12 7v5l3.2 1.8',
  escudo: 'M12 2.5 20 6v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6z',
  local: 'M12 21s-7-5.6-7-11a7 7 0 1 1 14 0c0 5.4-7 11-7 11z',
  chave: 'M14.5 10.5a4.5 4.5 0 1 0-4.1 4.5L12 16.5l1.5 1.5L12 19.5 13.5 21H16l1-1v-2l4-4v-2.5h-6.5z',
  raio: 'M13 2 4 14h7l-1 8 9-12h-7z',
  check: 'M4 12.5 9.5 18 20 6.5',
  seta: 'M5 12h14M13 6l6 6-6 6',
  instagram:
    'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6.5h.01',
  facebook: 'M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v4H8v8h4v-8h3l.5-4H12V7.8c0-.6.3-.8.9-.8H15V3z',
};

/**
 * Icones desenhados preenchidos, nao em traco.
 *
 * O simbolo do WhatsApp e reconhecido pelo formato cheio — tentar reproduzir
 * aquele balao com cauda usando linha fina sai torto em qualquer tamanho.
 * Este e o contorno oficial da marca.
 */
export const solidos: Record<IconeSolido, string> = {
  whatsapp:
    'M12.04 2.01a9.9 9.9 0 0 0-8.49 14.92L2 22l5.25-1.38a9.86 9.86 0 0 0 4.78 1.22h.01a9.9 9.9 0 0 0 9.91-9.91 9.84 9.84 0 0 0-2.9-7.01 9.82 9.82 0 0 0-7.01-2.91zm0 18.15h-.01c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.2.84.85-3.12-.2-.32a8.21 8.21 0 0 1-1.26-4.38 8.24 8.24 0 0 1 8.24-8.23c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82 8.24 8.24 0 0 1-8.24 8.33zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.24-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.17-.24.25-.41.08-.16.04-.3-.02-.43-.06-.12-.56-1.34-.76-1.83-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.21.89 2.39 1.01 2.56.12.16 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.52.59.18 1.13.16 1.56.09.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z',
};

/** Icones que precisam de um circulo, que `path` sozinho nao desenha bem. */
export const circulos: Partial<Record<IconeTraco, { cx: number; cy: number; r: number }>> = {
  relogio: { cx: 12, cy: 12, r: 9 },
  local: { cx: 12, cy: 10, r: 2.6 },
};

/**
 * Resolve o desenho de um icone.
 *
 * Fica aqui, e nao no componente, para que ele so precise saber "desenhar o que
 * vier" — quem decide se o icone e de linha ou preenchido e o dado, nao a tela.
 */
export function desenhoDoIcone(nome: NomeIcone) {
  if (nome in solidos) {
    return { caminho: solidos[nome as IconeSolido], preenchido: true, circulo: undefined };
  }

  const comoTraco = nome as IconeTraco;
  return { caminho: tracos[comoTraco], preenchido: false, circulo: circulos[comoTraco] };
}
