// ============================================
// CONSTANTS.TS — Advocacia Kelly Carina
// Fonte de toda a verdade. Nada hardcoded.
// ============================================

export const SITE = {
  name: "Advocacia Kelly Carina",
  shortName: "KC Advocacia",
  description:
    "Assessoria jurídica especializada em Direito Previdenciário. Mais de 10 anos de experiência em Curitiba/PR.",
  url: "https://kellycarinaadvocacia.com.br",
  ogImage: "/og-image.png",
  locale: "pt_BR",
} as const;

export const CONTACT = {
  phone: "(41) 99870-2590",
  phoneRaw: "5541998702590",
  whatsappLink: "https://wa.me/5541998702590",
  email: "",
  address: "Rua das Carmelitas 586 - Sala 04",
  city: "Curitiba",
  state: "PR",
  zip: "81650-000",
  fullAddress: "Rua das Carmelitas 586 - Sala 04, Curitiba/PR — CEP 81650-000",
  oab: "OAB/PR 76.720",
} as const;

export const SOCIALS = {
  instagram: "https://instagram.com/kellycarinaadv",
  facebook: "https://facebook.com/kellycarinaadvogada",
} as const;

export const HOURS = {
  weekdays: "09:00 – 17:00",
  weekend: "Fechado",
  display: "Seg–Sex: 09:00–17:00",
} as const;

export const HERO = {
  tagline: "DEFENDENDO SEUS DIREITOS, SECURANDO SEU FUTURO.",
  subtitle:
    "Assessoria jurídica especializada em Direito Previdenciário em Curitiba/PR.",
  cta: "AGENDE SUA CONSULTA",
} as const;

export const ABOUT = {
  title: "QUEM É A DRA. KELLY?",
  bio: `Com mais de 10 anos de experiência em Direito Previdenciário, a Dra. Kelly Carina possui pós-graduações em Direito Previdenciário e Direito Aplicado. Formação acadêmica sólida e constante atualização para oferecer a melhor assessoria jurídica aos seus clientes.`,
  highlights: [
    "Mais de 10 anos de experiência",
    "Pós-graduação em Direito Previdenciário",
    "Pós-graduação em Direito Aplicado",
    "OAB/PR 76.720",
  ],
} as const;

export const SERVICES = [
  {
    id: "aposentadorias",
    number: "01",
    title: "Aposentadorias",
    description:
      "Pedidos e cálculos para aposentadoria por idade, tempo de contribuição, por invalidez ou especial (atividades insalubres).",
  },
  {
    id: "auxilio-doenca",
    number: "02",
    title: "Auxílio-Doença",
    description:
      "Afastamento temporário por incapacidade laboral. Resolução de perícias médicas indevidas.",
  },
  {
    id: "beneficio-incapacidade",
    number: "03",
    title: "Benefício por Incapacidade",
    description:
      "Aposentadoria por incapacidade permanente para quem não pode retornar ao trabalho.",
  },
  {
    id: "pensao-morte",
    number: "04",
    title: "Pensão por Morte",
    description:
      "Direito dos dependentes em caso de falecimento do segurado. Divisão de cotas e prova de união estável.",
  },
  {
    id: "bpc-loas",
    number: "05",
    title: "BPC / LOAS",
    description:
      "Benefício de prestação continuada para idosos ou pessoas com deficiência de baixa renda.",
  },
  {
    id: "salario-maternidade",
    number: "06",
    title: "Salário-Maternidade",
    description:
      "Direito da trabalhadora durante gestação, parto ou adoção. Inclui trabalhadoras desempregadas e rurais.",
  },
  {
    id: "auxilio-acidente",
    number: "07",
    title: "Auxílio-Acidente",
    description:
      "Indenização por sequelas de acidentes de trabalho que reduzem a capacidade laboral.",
  },
  {
    id: "revisao-beneficios",
    number: "08",
    title: "Revisão de Benefícios",
    description:
      "Correção de erros de cálculo em aposentadorias já concedidas para aumentar a renda mensal.",
  },
] as const;

export const EDUCATION = {
  title: "ENTENDA SEUS DIREITOS",
  subtitle:
    "O sistema previdenciário brasileiro é complexo. Conhecer seus direitos é o primeiro passo.",
  items: [
    {
      title: "Perícias Médicas Indevidas",
      description:
        "Muitos segurados recebem alta programada do INSS mesmo com laudos médicos atestando incapacidade. Conheça seus direitos perante o INSS.",
    },
    {
      title: "Erros de Cálculo Pós-Reforma",
      description:
        "A Reforma da Previdência (EC 103/2019) alterou regras de cálculo. Muitas aposentadorias foram concedidas com valores incorretos.",
    },
    {
      title: "Demora nas Análises do INSS",
      description:
        "O INSS deve analisar pedidos em até 45 dias, mas atrasos de meses são comuns. Existem mecanismos jurídicos para acelerar o processo.",
    },
    {
      title: "Atividade Especial (Insalubridade)",
      description:
        "Trabalhadores expostos a agentes nocivos têm direito a tempo diferenciado. O INSS frequentemente rejeita formulários técnicos.",
    },
  ],
} as const;

export const REVIEWS = {
  title: "O QUE NOSSOS CLIENTES DIZEM",
  subtitle: "Avaliações reais no Google Reviews",
  items: [
    {
      name: "Silvana P. G. Stresser",
      text: "Atendimento excepcional. Clara e consisa, foi muito rápida em responder sobre dúvidas do processo. Profissional comprometida, super recomendo.",
      rating: 5,
    },
    {
      name: "Deborah Schulcka",
      text: "Excelente advogada, tira todas as dúvidas, explica muito bem. Alem das defesas sensacionais, super indico essa advogada maravilhosa!",
      rating: 5,
    },
    {
      name: "Bete Souza",
      text: "Excelente profissional, resolutiva e precisa no seu trabalho. Tem propriedade e conhecimento e muita dedicação em tudo que faz.",
      rating: 5,
    },
    {
      name: "Vanessa Filgueira",
      text: "Atendimento de excelência, dedicada, eficiente, honesta, mantém um bom contato com o cliente. Super indico!",
      rating: 5,
    },
    {
      name: "Karina Sanches da Paixão",
      text: "Excelente atendimento, dedicada, mantém informado. Excelente profissional.",
      rating: 5,
    },
    {
      name: "Sabrina Bueno",
      text: "Kelly é uma advogada exemplar: muito solícita, didática e clara, eficiente! Meu caso foi resolvido com sucesso. Muito grata!",
      rating: 5,
    },
    {
      name: "Deni Oda",
      text: "A Dra. é super competente, dá o suporte que precisamos. Ela é nota mil!",
      rating: 5,
    },
    {
      name: "Erica Pereira",
      text: "Excelente profissional, sempre disponível para responder todas as nossas dúvidas. Recomendo.",
      rating: 5,
    },
    {
      name: "Gabriel Ramon",
      text: "Excelente advogada! Eficiente e super indico.",
      rating: 5,
    },
    {
      name: "Beth",
      text: "A mais competente e íntegra de toda Curitiba. Parabéns, Doutora!",
      rating: 5,
    },
    {
      name: "Jaqueline Alexandre",
      text: "Uma ótima profissional, super indico!",
      rating: 5,
    },
    {
      name: "Vanessa Panace Lopes",
      text: "Ótima profissional, super recomendo!",
      rating: 5,
    },
    {
      name: "Regilene Gonçalves",
      text: "Profissional super competente, super indico.",
      rating: 5,
    },
  ],
} as const;

export const PROCESS = {
  title: "COMO FUNCIONA?",
  steps: [
    {
      number: "01",
      title: "Análise do Caso",
      description:
        "Estudamos sua situação e documentação para entender cada detalhe do seu caso.",
    },
    {
      number: "02",
      title: "Planejamento Estratégico",
      description:
        "Definimos a melhor estratégia jurídica para alcançar o resultado desejado.",
    },
    {
      number: "03",
      title: "Protocolo",
      description:
        "Cuidamos de todo o processo burocrático junto ao INSS ou via judicial.",
    },
    {
      number: "04",
      title: "Acompanhamento",
      description:
        "Acompanhamos seu caso até a resolução completa, mantendo você informado.",
    },
  ],
} as const;

export const FAQ = {
  title: "PERGUNTAS FREQUENTES",
  items: [
    {
      question: "Preciso de documentos para a primeira consulta?",
      answer:
        "Para a primeira consulta, é recomendável trazer documentos pessoais (RG, CPF, CPF do segurado em caso de pensão), cartões de trabalho, extratos do CNIS e qualquer documentação médica relacionada ao caso. No entanto, a primeira análise pode ser feita mesmo sem todos os documentos.",
    },
    {
      question: "Vocês atendem presencialmente?",
      answer:
        "Sim! Nosso escritório fica na Rua das Carmelitas 586, Sala 04, em Curitiba/PR. O atendimento presencial é realizado de segunda a sexta, das 09h às 17h, mediante agendamento prévio.",
    },
    {
      question: "Como saber se tenho direito a aposentadoria?",
      answer:
        "O direito à aposentadoria depende de diversos fatores como idade, tempo de contribuição, tipo de atividade exercida e regras de transição pós-reforma. Uma análise jurídica detalhada do seu histórico de contribuições pode identificar a melhor estratégia.",
    },
    {
      question: "E se o INSS negar meu benefício?",
      answer:
        "A negativa do INSS pode ser contestada judicialmente. Existem various caminhos administrativos e judiciais para reverter a decisão, incluindo Recurso Administrativo, Mandado de Segurança e Ação Judicial.",
    },
    {
      question: "Vocês trabalham com casos em todo o Brasil?",
      answer:
        "Sim! Apesar de nosso escritório estar localizado em Curitiba/PR, atendemos clientes de todo o Brasil, principalmente em questões de Direito Previdenciário que podem ser resolvidas à distância ou via processo judicial eletrônico.",
    },
    {
      question: "Qual o horário de atendimento?",
      answer:
        "Atendemos de segunda a sexta-feira, das 09h às 17h. Sábados e domingos estamos encerrados. O atendimento é feito mediante agendamento prévio pelo WhatsApp.",
    },
  ],
} as const;

export const LINKS_PAGE = {
  title: "Kelly Carina",
  subtitle: "Advogada | OAB/PR 76.720",
  description: "Direito Previdenciário em Curitiba/PR",
  links: [
    {
      label: "Instagram",
      url: SOCIALS.instagram,
      icon: "instagram" as const,
    },
    {
      label: "WhatsApp",
      url: CONTACT.whatsappLink,
      icon: "whatsapp" as const,
    },
    {
      label: "Website",
      url: "/",
      icon: "globe" as const,
    },
    {
      label: "Localização",
      url: "https://maps.google.com/?q=Rua+das+Carmelitas+586+Sala+04+Curitiba+PR",
      icon: "map-pin" as const,
    },
  ],
} as const;

export const NAV = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  {
    label: "Áreas de Atuação",
    href: "#servicos",
    children: SERVICES.map((s) => ({ label: s.title, href: `#${s.id}` })),
  },
  { label: "Como Funciona", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;
