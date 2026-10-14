/**
 * Area de atendimento.
 *
 * Alem de responder "ele vem ate aqui?", esta lista alimenta o campo `areaServed`
 * dos dados estruturados — e isso que faz o Google associar o negocio as buscas
 * de "chaveiro perto de mim" em cada bairro.
 */

export interface RegiaoAtendida {
  regiao: string;
  /** Resposta curta sobre o tempo de deslocamento, sem prometer numero exato. */
  nota: string;
  bairros: string[];
  /** A base fica aqui: e onde o atendimento chega mais rapido. */
  principal?: boolean;
}

export const cobertura: RegiaoAtendida[] = [
  {
    regiao: 'Zona Sul',
    nota: 'Base em Copacabana — é onde chego mais rápido',
    principal: true,
    bairros: [
      'Copacabana',
      'Ipanema',
      'Leblon',
      'Arpoador',
      'Leme',
      'Botafogo',
      'Flamengo',
      'Laranjeiras',
      'Catete',
      'Glória',
      'Humaitá',
      'Jardim Botânico',
      'Gávea',
      'Lagoa',
      'Urca',
      'Cosme Velho',
      'São Conrado',
      'Vidigal',
    ],
  },
  {
    regiao: 'Barra e Zona Oeste',
    nota: 'Atendimento com deslocamento combinado antes',
    bairros: ['Barra da Tijuca', 'Recreio', 'Jacarepaguá', 'Itanhangá', 'Joá'],
  },
  {
    regiao: 'Centro e arredores',
    nota: 'Residencial e comercial, inclusive fora do horário comercial',
    bairros: ['Centro', 'Lapa', 'Santa Teresa', 'Cinelândia', 'Saúde', 'Gamboa'],
  },
  {
    regiao: 'Zona Norte',
    nota: 'Combine antes pelo telefone',
    bairros: ['Tijuca', 'Vila Isabel', 'Maracanã', 'Grajaú', 'Andaraí', 'São Cristóvão'],
  },
];

/** Lista achatada, do jeito que os dados estruturados do Google pedem. */
export const todosOsBairros: string[] = cobertura.flatMap((r) => r.bairros);
