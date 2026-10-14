/** Catalogo de servicos. Cada card, cada link de WhatsApp e o SEO leem daqui. */

export type IconeServico =
  | 'porta'
  | 'digital'
  | 'segredo'
  | 'controle'
  | 'carro'
  | 'fechadura';

export interface Servico {
  id: string;
  titulo: string;
  /** Pergunta curta, na linguagem de quem esta com o problema. */
  gancho: string;
  descricao: string;
  icone: IconeServico;
  /** Serve de legenda da imagem e de texto alternativo. */
  imagemAlt: string;
  /** Arquivo em /public/imagens — gerado na direcao de arte do projeto. */
  imagem: string;
  /** Mensagem que ja chega escrita no WhatsApp do Gleiton. */
  mensagem: string;
  /** Destaque ocupa o card largo da grade: e o servico de maior valor. */
  destaque?: boolean;
}

export const servicos: Servico[] = [
  {
    id: 'abertura',
    titulo: 'Abertura de portas',
    gancho: 'Ficou do lado de fora?',
    descricao:
      'Abro sua porta sem arrombar. Casa, apartamento ou loja — você entra e a fechadura continua funcionando como antes.',
    icone: 'porta',
    imagem: '/imagens/abertura-de-porta.webp',
    imagemAlt: 'Chaveiro abrindo a fechadura de uma porta residencial à noite',
    mensagem: 'Olá! Estou trancado para fora e preciso de abertura de porta.',
  },
  {
    id: 'fechadura-digital',
    titulo: 'Fechadura digital e eletrônica',
    gancho: 'Cansado de andar com chave?',
    descricao:
      'Instalo fechadura com senha, biometria, cartão ou aplicativo na porta que você já tem. Sem obra, sem trocar a porta.',
    icone: 'digital',
    imagem: '/imagens/fechadura-digital.webp',
    imagemAlt: 'Fechadura digital com teclado numérico instalada em porta de madeira escura',
    mensagem: 'Olá! Quero instalar uma fechadura digital. Pode me passar um orçamento?',
    destaque: true,
  },
  {
    id: 'troca-de-segredo',
    titulo: 'Troca de segredo',
    gancho: 'Alguém tem cópia da sua chave?',
    descricao:
      'Mudou de casa, perdeu a chave ou alguém ficou com uma cópia? Troco o segredo e as chaves antigas param de abrir na hora.',
    icone: 'segredo',
    imagem: '/imagens/troca-de-segredo.webp',
    imagemAlt: 'Cilindro de fechadura aberto sobre bancada, com chaves novas ao lado',
    mensagem: 'Olá! Preciso de troca de segredo da fechadura.',
  },
  {
    id: 'controles',
    titulo: 'Cópia de controle e tag',
    gancho: 'Só tem um controle em casa?',
    descricao:
      'Controle de portão, de portaria e de porta de loja, além de tag de condomínio. Faço a cópia na hora.',
    icone: 'controle',
    imagem: '/imagens/copia-de-controle.webp',
    imagemAlt: 'Controles remotos de portão e tag de condomínio sobre bancada de chaveiro',
    mensagem: 'Olá! Preciso de cópia de controle de portão.',
  },
  {
    id: 'automotivo',
    titulo: 'Chaveiro automotivo',
    gancho: 'Chave trancada dentro do carro?',
    descricao:
      'Abro o veículo sem forçar a lataria e faço cópia de chave com chip, canivete e telecomando.',
    icone: 'carro',
    imagem: '/imagens/chaveiro-automotivo.webp',
    imagemAlt: 'Chave automotiva com telecomando sendo programada',
    mensagem: 'Olá! Preciso de um chaveiro automotivo.',
  },
  {
    id: 'instalacao',
    titulo: 'Instalação e troca de fechadura',
    gancho: 'Fechadura emperrando?',
    descricao:
      'Fechadura comum, tetra, de alta segurança ou de porta de vidro. Instalo, troco e conserto.',
    icone: 'fechadura',
    imagem: '/imagens/instalacao-fechadura.webp',
    imagemAlt: 'Ferramentas de chaveiro e fechadura de alta segurança sendo instalada',
    mensagem: 'Olá! Preciso trocar/instalar uma fechadura.',
  },
];
