export interface ServiceItem {
  id: string;
  roman: string;
  code: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  highlight: string;
  timeline: string;
  idealFor: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'Videomaker & Captação' | 'Social Media' | 'Branding';
  year: string;
  metric: string;
  summary: string;
  format: string;
  image: string;
  imagePosition?: string;
  imageAlt: string;
  challenge: string;
  approach: string;
  deliverables: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SABRINA_PROFILE = {
  name: 'Sabrina Feitosa',
  studioName: 'Studio Criativo',
  role: 'Videomaker • Social Media • Branding',
  location: 'João Pessoa - PB • Atendimento Presencial & Remoto',
  headline: 'Estética que posiciona. Captação que permanece.',
  subheadline:
    'Uno captação audiovisual cinematográfica, direção criativa para redes sociais e estratégia de marca para transformar negócios em referências desejadas.',
  editorialBio:
    'Como publicitária, acredito que marcas fortes nascem da coerência entre o que você comunica em texto, o que sustenta em design e o que emociona em movimento.',
  editorialBioExtended:
    'Do diagnóstico inicial ao último frame editado em 4K, conduzo cada etapa para que você não dependa de fórmulas genéricas — e sim de uma presença autoral que gera desejo real.',
  manifestoQuote:
    'Cada quadro precisa carregar a mesma verdade que o posicionamento da sua marca promete.',
  // Número oficial com DDI + DDD + número (apenas dígitos)
  whatsappNumber: '5583999833034',
  whatsappDisplay: '(83) 99983-3034',
  instagram: '@msabrina.feitosa',
};

export const ABOUT_PILLARS = [
  {
    title: 'Olhar Publicitário',
    desc: 'Cada imagem e roteiro nasce de um objetivo claro de percepção de valor e conversão.',
  },
  {
    title: 'Direção Leve no Set',
    desc: 'Condução tranquila para que você e sua equipe fiquem naturais diante das câmeras.',
  },
  {
    title: 'Estética com Estratégia',
    desc: 'Coerência entre ritmo de edição audiovisual, feed editorial e identidade visual.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'videomaker',
    roman: 'I',
    code: '01 / CAPTAÇÃO',
    title: 'Videomaker & Captação',
    shortTitle: 'Videomaker',
    subtitle: 'Direção de cena, captação 4K e edição com ritmo',
    description:
      'Diárias de gravação com olhar publicitário: iluminação, enquadramento, direção de movimento, captação mobile/cinema e pós-produção dinâmica.',
    deliverables: [
      'Diária de Captação In Loco',
      'Brand Films & Institucionais',
      'Reels Cinematográficos (9:16)',
      'Color Grading & Sound Design',
    ],
    highlight: 'Do set de gravação ao corte final pronto para performar.',
    timeline: 'Diária + entrega em 5 dias úteis',
    idealFor: 'Lançamentos, campanhas sazonais, gastronomia, moda e bastidores de marca.',
  },
  {
    id: 'social',
    roman: 'II',
    code: '02 / PRESENÇA',
    title: 'Social Media Estratégico',
    shortTitle: 'Social Media',
    subtitle: 'Conteúdo com narrativa, estética e conversão',
    description:
      'Planejamento editorial, roteiros de alta retenção, direção de feed e gestão criativa pensada para transformar seguidores em clientes fiéis.',
    deliverables: [
      'Linha Editorial & Pilares',
      'Roteiros de Reels & Stories',
      'Design de Carrosséis & Capas',
      'Análise de Métricas & Retenção',
    ],
    highlight: 'Consistência visual sem parecer template genérico.',
    timeline: 'Acompanhamento mensal',
    idealFor: 'Negócios locais, estúdios, clínicas e marcas autorais que querem constância premium.',
  },
  {
    id: 'branding',
    roman: 'III',
    code: '03 / IDENTIDADE',
    title: 'Branding & Posicionamento',
    shortTitle: 'Branding',
    subtitle: 'Arquitetura visual e verbal para marcas memoráveis',
    description:
      'Construo universos de marca completos: do diagnóstico de posicionamento à identidade visual, paleta autoral, tipografia e manual de aplicação.',
    deliverables: [
      'Diagnóstico & Posicionamento',
      'Identidade Visual Completa',
      'Direção de Arte & Moodboard',
      'Brandbook & Guia de Tom de Voz',
    ],
    highlight: 'Para quem quer cobrar mais caro e ser reconhecido de longe.',
    timeline: '3 a 5 semanas',
    idealFor: 'Marcas em nascimento, rebrandings e profissionais liberais buscando autoridade.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ensaio-narrativo',
    title: 'Direção de Cena & Captação ao Pôr do Sol',
    client: 'Acervo Autoral — João Pessoa, PB',
    category: 'Videomaker & Captação',
    year: '2026',
    metric: 'Luz Natural • Golden Hour',
    summary:
      'Ensaio narrativo com foco em enquadramento afetivo, textura manual em tom creme e aproveitamento da luz dourada do entardecer.',
    format: 'Ensaio Fotográfico & Storytelling',
    image: '/images/sabrina-editorial-3.jpg',
    imagePosition: 'object-center',
    imageAlt:
      'Casal de mãos dadas segurando sapatinhos de tricô em tom creme contra o céu dourado do pôr do sol',
    challenge:
      'Traduzir a expectativa e a delicadeza de um momento íntimo em uma única composição visual, sem artificialidade ou excessos.',
    approach:
      'Direção leve e espontânea aproveitando o contraluz natural da golden hour, priorizando detalhes táteis nas mãos e no tricô creme em harmonia com tons terrosos e dourados.',
    deliverables: [
      'Direção de Cena & Enquadramento',
      'Captação em Luz Natural',
      'Curadoria & Tratamento de Cor',
      'Narrativa Visual para Redes',
    ],
  },
  {
    id: 'anuncio-gestacao',
    title: 'Storytelling Afetivo & Ensaio Externo',
    client: 'Acervo Autoral — João Pessoa, PB',
    category: 'Videomaker & Captação',
    year: '2026',
    metric: 'Direção Espontânea • Golden Hour',
    summary:
      'Registro externo em luz natural valorizando expressões genuínas e o enquadramento íntimo de anúncio em família.',
    format: 'Ensaio Fotográfico & Direção',
    image: '/images/sabrina-editorial-4.jpg',
    imagePosition: 'object-[50%_32%]',
    imageAlt:
      'Casal sorrindo ao ar livre sob a luz dourada do pôr do sol enquanto segura a imagem de um ultrassom',
    challenge:
      'Conduzir o casal diante da câmera para capturar emoção verdadeira e espontânea sem poses rígidas.',
    approach:
      'Direção acolhedora em ambiente aberto ao entardecer, equilibrando proximidade nos rostos, calor solar e foco nítido no elemento simbólico do registro.',
    deliverables: [
      'Direção de Expressão & Cena',
      'Captação Externa em Golden Hour',
      'Seleção & Colorimetria Quente',
      'Entrega Otimizada para Redes Sociais',
    ],
  },
  {
    id: 'clinica-lumiere',
    title: 'Direção Criativa & Social Media',
    client: 'Clínica Lumière',
    category: 'Social Media',
    year: '2025',
    metric: '3.2x mais agendamentos',
    summary:
      'Reestruturação completa do Instagram com estética editorial limpa, roteiros humanizados e captação bimestral.',
    format: 'Gestão + Diária de Gravação',
    image: '/images/case-social.jpg',
    imagePosition: 'object-center',
    imageAlt:
      'Frasco de vidro âmbar sobre travertino creme e linho cru com ramo botânico seco em iluminação editorial',
    challenge:
      'O perfil misturava artes promocionais excessivas com fotos sem padrão de luz, diluindo a percepção de cuidado dermatológico premium.',
    approach:
      'Implementamos uma grade editorial serena com respiro visual, roteiros educativos gravados de forma natural pela médica e direção de arte alinhada à clínica.',
    deliverables: [
      'Linha Editorial & Calendário',
      'Design de Carrosséis Editoriais',
      'Roteiros de Autoridade em Vídeo',
      'Captação Bimestral In Loco',
    ],
  },
  {
    id: 'cafe-origem',
    title: 'Campanha de Lançamento 360°',
    client: 'Torrefação Origem',
    category: 'Branding',
    year: '2025',
    metric: 'Esgotado em 72 horas',
    summary:
      'Embalagem, direção de fotografia e série de teasers verticais para edição limitada de café especial.',
    format: 'Branding + Campanha Vídeo',
    image: '/images/case-campanha.jpg',
    imagePosition: 'object-center',
    imageAlt:
      'Embalagem minimalista marrom espresso sobre bloco de pedra creme com grãos de café torrados e fita mostarda',
    challenge:
      'Lançar um microlote sazonal em curto prazo com força comercial suficiente para gerar lista de espera antes da abertura do carrinho.',
    approach:
      'Unimos direção de embalagem, ensaio still sob sol da tarde e quatro teasers verticais progressivos com contagem narrativa para Stories e Reels.',
    deliverables: [
      'Direção de Arte de Lançamento',
      '4 Teasers Verticais em 4K',
      'Sequência Estratégica de Stories',
      'Fotos Comerciais para E-commerce',
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Imersão & Diagnóstico',
    desc: 'Mapeamos sua essência, público, referências e objetivos comerciais em uma call estratégica.',
  },
  {
    step: '02',
    title: 'Direção Criativa & Roteiro',
    desc: 'Desenhamos a identidade visual, linha editorial e o plano de cenas antes de ligar a câmera.',
  },
  {
    step: '03',
    title: 'Captação & Produção',
    desc: 'Execução impecável no set com direção leve para você se sentir natural diante das lentes.',
  },
  {
    step: '04',
    title: 'Edição, Entrega & Escala',
    desc: 'Pós-produção com color grading autoral, ritmo publicitário e ativos prontos para publicar.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Você atende presencialmente ou também de forma remota?',
    answer:
      'As diárias de Videomaker e Captação acontecem presencialmente em João Pessoa - PB e região (ou sob consulta para viagens). Projetos de Social Media e Branding são atendidos 100% remotamente para todo o Brasil e exterior.',
  },
  {
    id: 'faq-2',
    question: 'Posso contratar apenas uma diária de videomaker ou só social media ou branding?',
    answer:
      'Sim. Todas as três frentes podem ser contratadas de forma independente ou combinadas em um projeto 360° (por exemplo: captar os primeiros vídeos, estruturar o social media e construir a identidade da marca com a mesma direção criativa).',
  },
  {
    id: 'faq-3',
    question: 'Como funciona a diária de captação audiovisual?',
    answer:
      'Antes da gravação fazemos um alinhamento com roteiro, lista de cenas, figurino e referências visuais. No dia, eu conduzo a luz, os enquadramentos e a direção de fala/movimento. Os vídeos editados, legendados e colorizados são entregues em até 5 dias úteis.',
  },
  {
    id: 'faq-4',
    question: 'Qual o prazo médio para um projeto completo de Branding?',
    answer:
      'Entre 3 e 5 semanas, variando conforme o escopo (identidade essencial ou universo completo com papelaria, embalagens e enxoval de redes sociais). Todas as datas são combinadas em cronograma fechado no início do projeto.',
  },
];

export function buildWhatsAppUrl(customMessage?: string) {
  const defaultMsg =
    'Olá Sabrina! Vi seu portfólio editorial e quero conversar sobre um projeto de Videomaker / Social Media / Branding.';
  return `https://wa.me/${SABRINA_PROFILE.whatsappNumber}?text=${encodeURIComponent(
    customMessage || defaultMsg
  )}`;
}
