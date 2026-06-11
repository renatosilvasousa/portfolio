/** Atualize `url` e `author` antes de publicar (SEO em index.html deve refletir os mesmos valores). */
export const site = {
  title: "Portfólio | Desenvolvedor Full Stack em Formação",
  description:
    "Portfólio de um desenvolvedor full stack em formação estudante de Análise e Desenvolvimento de Sistemas — projetos, habilidades e contato.",
  url: "https://renatosilvasousa.github.io/portfolio",
  ogImage: "/og-image.png",
  author: "Renato Silva Sousa",
  role: "Desenvolvedor Full Stack em Formação",
} as const;

export const resume = {
  href: "/curriculo.pdf",
  fileName: "curriculo.pdf",
  label: "Baixar currículo",
} as const;

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
] as const;

export const profile = {
  imageSrc: {
    dark: "/profiles/profile-dark.png",
    light: "/profiles/profile-light.png",
  },
  imageAlt: "Foto de perfil",
} as const;

export const heroTerminal = {
  filename: "dev.ts",
  comment: "// estudante · análise e desenvolvimento de sistemas",
  cargo: "desenvolvedor full stack em formação",
  status: "disponível para vagas de desenvolvimento",
  stack: ["React", "TypeScript", "Python", "SQL", "Git"],
} as const;

export const hero = {
  greeting: "Olá, eu sou",
  summary:
    "Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e desenvolvimento de software. Busco oportunidades para aplicar meus conhecimentos profissionalmente, adquirir experiência prática e evoluir na área de tecnologia.",
  ctaPrimary: { href: "#projetos", label: "Ver projetos" },
  ctaSecondary: { href: "#contato", label: "Entrar em contato" },
};

export const about = {
  title: "Sobre",
  paragraphs: [
    "Sou militar do Exército Brasileiro e estudante de Análise e Desenvolvimento de Sistemas, com foco em me tornar um Desenvolvedor Full Stack. ",
    "Também simpatizo com as áreas de Análise de Dados e Cibersegurança, pois acredito que os conhecimentos adquiridos nesses campos complementam o desenvolvimento de software e contribuem para a criação de soluções mais seguras, eficientes e orientadas a resultados.",
    "Busco aplicar o que aprendo em projetos acadêmicos, pessoais e profissionais, priorizando código legível, organização e evolução constante das minhas habilidades técnicas.",
  ],
  highlights: [
    "Disponível para vagas de desenvolvimento full stack",
    "Projetos acadêmicos, pessoais e profissionais",
    "Foco em desenvolvimento full stack",
    "Interesse em análise de dados e cibersegurança",
  ],
};

export const skills = {
  title: "Habilidades",
  subtitle: "Tecnologias e competências em desenvolvimento.",
  groups: [
    {
      name: "Front-end",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      name: "Back-end",
      items: [
        "Python",
        "Flask",
        "Fast API",
        "APIs REST",
        "Django",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "SQLite",
      ],
    },
    {
      name: "Ferramentas",
      items: ["Git", "GitHub", "VS Code", "Cursor", "Vite", "npm"],
    },
    {
      name: "Soft skills",
      items: [
        "Disciplina",
        "Responsabilidade",
        "Trabalho em equipe",
        "Resolução de problemas",
        "Gestão do tempo",
        "Aprendizado contínuo",
        "Pensamento analítico",
      ],
    },
  ],
};

export const projects = {
  title: "Projetos",
  subtitle:
    "Uma coleção de projetos que acompanha minha jornada como desenvolvedor.",
  items: [
    {
      title: "Portfólio Pessoal",
      description:
        "Meu primeiro projeto completo com React, TypeScript e Tailwind CSS. Um portfólio responsivo com suporte a tema claro e escuro, animações suaves e foco em experiência do usuário e acessibilidade. Você está vendo ele agora mesmo!",
      tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      images: {
        dark: "/projects/portfolio-dark.png",
        light: "/projects/portfolio-light.png",
        mobileDark: "/projects/portfolio-mobile-dark.png",
        mobileLight: "/projects/portfolio-mobile-light.png",
      },
      links: {
        repo: "https://github.com/renatosilvasousa/portfolio",
      },
    },
  ],
};

export const education = {
  title: "Formação",
  subtitle: "Trajetória acadêmica e certificações.",
  items: [
    {
      degree: "TECNÓLOGO EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
      institution: "Descomplica Faculdade Digital",
      period: "2025 - ATUAL (EM ANDAMENTO)",
      description:
        "Formação voltada ao desenvolvimento de aplicações, programação orientada a objetos, bancos de dados, engenharia de software, análise de requisitos e boas práticas de desenvolvimento.",
    },
    {
      degree: "CURSO DE FORMAÇÃO E GRADUAÇÃO DE SARGENTOS (CFGS)",
      institution: "Escola de Sargentos das Armas (ESA)",
      period: "2020 - 2021",
      description:
        "Formação militar voltada para liderança, gestão de equipes, tomada de decisão, planejamento e desenvolvimento de competências técnicas e operacionais. Capacitação para o exercício das funções de sargento de carreira do Exército Brasileiro.",
    },
    {
      degree: "TÉCNICO EM INFORMÁTICA INTEGRADO AO ENSINO MÉDIO",
      institution: "EEEP José Maria Falcão",
      period: "2017 - 2019",
      description:
        "Formação técnica em informática com fundamentos de programação, manutenção de computadores, redes de computadores e desenvolvimento de sistemas. Ensino médio integrado à educação profissional.",
    },
    {
      degree: "BOOTCAMP | BRADESCO - GenAI & DADOS",
      institution: "Digital Innovation One (DIO)",
      period: "2026",
      description:
        "Capacitação em inteligência artificial generativa, análise de dados, Python, engenharia de prompts e aplicações práticas de IA para solução de problemas e tomada de decisão.",
    },
    {
      degree:
        "BOOTCAMP | TOTVS – FUNDAMENTOS DE ENGENHARIA DE DADOS E MACHINE LEARNING",
      institution: "Digital Innovation One (DIO)",
      period: "2026",
      description:
        "Formação em fundamentos de engenharia de dados e machine learning, abrangendo coleta, tratamento e análise de dados, além da construção de modelos preditivos com Python.",
    },
    {
      degree: "BOOTCAMP | ACCENTURE – PYTHON PARA ANÁLISE E AUTOMAÇÃO DE DADOS",
      institution: "Digital Innovation One (DIO)",
      period: "2026",
      description:
        "Capacitação em Python para análise, manipulação e automação de dados, utilizando bibliotecas e ferramentas voltadas à otimização de processos e geração de insights.",
    },
    {
      degree: "BOOTCAMP | SANTANDER - AI REACT FRONT-END",
      institution: "Digital Innovation One (DIO)",
      period: "2026",
      description:
        "Formação em desenvolvimento front-end com React, JavaScript e TypeScript, integrando ferramentas de inteligência artificial para criação de interfaces modernas, responsivas e interativas.",
    },
    {
      degree: "BOOTCAMP | RIACHUELO – CIBERSEGURANÇA",
      institution: "Digital Innovation One (DIO)",
      period: "2026",
      description:
        "Capacitação em fundamentos de cibersegurança, abordando proteção de sistemas, gestão de vulnerabilidades, boas práticas de segurança da informação e análise de riscos em ambientes digitais.",
    },
    {
      degree: "CERTIFICAÇÃO | FORMAÇÃO FRONT-END",
      institution: "Hora de Codar (Udemy)",
      period: "2026",
      description:
        "Formação em desenvolvimento front-end com foco na criação de interfaces modernas e responsivas utilizando HTML, CSS, JavaScript, TypeScript, React e boas práticas de desenvolvimento web.",
    },
  ],
};

export const contact = {
  title: "Contato",
  subtitle:
    "Fico à disposição para conversas sobre estágios, projetos ou colaborações.",
  email: "re.silvasousa.ctt@gmail.com",
  location: "São Paulo, SP",
  links: [
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/renatosilvasousa",
      icon: "linkedin" as const,
    },
    {
      label: "GitHub",
      href: "https://github.com/renatosilvasousa",
      icon: "github" as const,
    },
  ],
};

export const footer = {
  note: "Desenvolvido com React, TypeScript e Tailwind CSS.",
};
