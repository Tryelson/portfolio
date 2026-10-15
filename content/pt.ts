import type { Dictionary } from "./types";

export const pt: Dictionary = {
  meta: {
    title: "Tryelson Marques · Engenheiro Frontend Sênior",
    description:
      "Engenheiro Frontend Sênior com mais de 7 anos em React, Next.js, Vue e TypeScript. Atuo de ponta a ponta em fluxos de pagamento e compliance, com foco em confiabilidade e IA no desenvolvimento.",
  },
  nav: { about: "Destaques", approach: "Como trabalho", experience: "Experiência", projects: "Projetos", contact: "Contato", switchTo: "EN" },
  hero: {
    available: "Aberto a novas oportunidades",
    hello: "Olá, eu sou",
    role: "Engenheiro Frontend Sênior",
    rotating: ["React & Next.js", "Vue & Nuxt", "TypeScript", "Front → BFF → API", "IA no desenvolvimento"],
    tagline:
      "Crio interfaces rápidas e confiáveis para produtos que lidam com dinheiro de verdade. Tenho experiência em fluxos críticos de KYC e pagamentos, já liderei um time de 7 desenvolvedores e uso IA para acelerar o time.",
    location: "Petrolândia, PE · Remoto",
    localTime: "agora aqui",
    resume: "Baixar currículo",
    resumeHref: "/Tryelson-Marques-Curriculo.pdf",
    contact: "Vamos conversar",
  },
  highlights: {
    title: "Destaques",
    subtitle: "O que eu entrego, em números.",
    observability: {
      label: "Observabilidade",
      metric: "32 mil+",
      title: "erros antes silenciosos passaram a ser rastreados em 3 meses",
      text: "Instrumentei com Sentry toda a plataforma da Voomp, do painel ao checkout. Com isso, o time passou a enxergar os erros e os pontos sensíveis da aplicação e a priorizar correções com dados, tornando o produto mais robusto.",
    },
    leadership: {
      label: "Liderança",
      metric: "7 devs",
      text: "Liderei um time frontend na Sumé: sprints, code review, mentoria e carreira.",
    },
    mentoring: {
      label: "Mentoria voluntária",
      metric: "6 pessoas",
      text: "Já mentorei, como voluntário, pessoas em início de carreira e em transição para tecnologia: plano de estudos, projeto real e code review. Abrir portas para quem está começando é o trabalho que mais me orgulha.",
      outcome: "Uma delas conquistou uma vaga CLT",
    },
  },
  approach: {
    title: "Como eu trabalho",
    subtitle: "Três hábitos que levo para qualquer time: enxergar o fluxo inteiro, usar IA com método e não deixar o conhecimento se perder.",
    fullstack: {
      label: "Ponta a ponta",
      title: "Do clique ao banco de dados",
      text: "Não paro no componente: atuo no fluxo inteiro, do frontend em React ou Vue ao BFF em NestJS e à API em Laravel. Entender a cadeia toda evita bugs que nascem entre as camadas.",
      layers: [
        { name: "Front", tech: "React · Vue" },
        { name: "BFF", tech: "NestJS" },
        { name: "API", tech: "Laravel" },
      ],
    },
    ai: {
      label: "IA no desenvolvimento",
      title: "AI First com método",
      text: "Liderei a iniciativa AI First da minha squad: criei um kit de agentes, skills e regras que reduziu a análise de impacto de uma tarefa de ~4h para ~30min.",
      before: "4h",
      after: "30min",
    },
    secondBrain: {
      label: "Segundo cérebro",
      title: "Uma memória de longo prazo para as minhas IAs",
      text: "Criei uma base de conhecimento hub-first no Obsidian, conectada aos meus agentes via MCP. Decisões, incidentes e regras de negócio viram contexto: antes de agir, a IA consulta o hub do assunto e não começa do zero.",
      hub: "Hub",
      nodes: ["Decisões", "Incidentes", "Regras", "Carreira", "Projetos", "Mentoria"],
    },
  },
  stack: { label: "Stack do dia a dia" },
  experience: {
    title: "Experiência",
    subtitle: "Mais de 7 anos construindo produtos web em produção.",
    items: [
      {
        company: "Soluevo",
        context: "alocado na Voomp (grupo Cogna)",
        period: "out/2025 – atual",
        roles: [{ title: "Engenheiro Frontend Sênior" }],
        bullets: [
          "Atuo de ponta a ponta em Front → BFF → API nos fluxos de compliance, pagamentos e relatórios financeiros da plataforma de creators.",
          "Fui um dos principais desenvolvedores da jornada de cadastro KYC e construí a central de relatórios e o módulo de Integrações.",
          "Instrumentei com Sentry toda a plataforma, do painel ao checkout: 32 mil+ erros antes silenciosos passaram a ser rastreados em 3 meses, dando ao time visibilidade dos pontos sensíveis e um produto mais robusto.",
          "Corrigi uma falha de autorização que expunha dados entre contas.",
          "Liderei a iniciativa AI First da squad, com um kit de agentes que reduziu a análise de impacto de ~4h para ~30min.",
          "Sou mentor voluntário na Soluevo, acompanhando pessoas em início de carreira e em transição para tecnologia com roteiro de evolução, projeto real e code review.",
        ],
        stack: ["React", "Next.js", "Vue", "TypeScript", "NestJS", "Laravel", "Sentry"],
      },
      {
        company: "Sumé Tecnologia",
        href: "https://www.sumetecnologia.com.br/",
        period: "jan/2024 – set/2025",
        roles: [
          { title: "Tech Leader Frontend", period: "mai/2024 – set/2025" },
          { title: "Desenvolvedor Frontend", period: "jan/2024 – mai/2024" },
        ],
        bullets: [
          "Liderei um time de 7 desenvolvedores frontend: sprints, code review, mentoria e desenvolvimento de carreira.",
          "Defini a arquitetura de micro frontends (Next.js e TypeScript) com autenticação centralizada via Keycloak.",
          "Entreguei o Sonar (GovTech integrado ao MPRJ) e aplicações em tempo real com WebSockets para automação de WhatsApp.",
        ],
        stack: ["React", "Next.js", "TypeScript", "Chakra UI", "Tailwind", "Keycloak", "WebSockets"],
      },
      {
        company: "Hivegroup",
        href: "https://www.hivegroup.com.br/",
        period: "jul/2021 – mai/2024",
        roles: [
          { title: "Software Developer", period: "2023 – 2024" },
          { title: "Desenvolvedor Frontend", period: "2021 – 2023" },
        ],
        bullets: [
          "Desenvolvi produtos em Vue/Nuxt e React/Next.js para clientes como Claro, Merz Aesthetics e Grupo Marbella.",
          "Destaques: sistema de gestão financeira com controle de permissões e um gestor de projetos interno que substituiu ClickUp e Jira.",
        ],
        stack: ["Vue", "Nuxt", "React", "Next.js", "TypeScript", "Tailwind", "WordPress"],
      },
      {
        company: "Freelancer",
        period: "abr/2019 – jul/2021",
        roles: [{ title: "Desenvolvedor Frontend" }],
        bullets: ["Sites, e-commerces e landing pages em WordPress, PHP e JavaScript, do design no Figma à publicação."],
        stack: ["JavaScript", "PHP", "WordPress", "Figma"],
      },
    ],
  },
  projects: {
    title: "Projetos",
    subtitle: "Trabalhos reais, do produto em produção ao freelance.",
    visit: "Ver projeto",
    confidential: "Código privado",
    items: [
      {
        name: "Plataforma de creators · Voomp",
        kind: "Produto em produção",
        description:
          "Jornada de cadastro KYC com assinatura digital, central de relatórios financeiros e módulo de Integrações, com observabilidade via Sentry.",
        stack: ["React", "NestJS", "Laravel", "Sentry"],
        href: "https://adm.voompcreators.com.br/",
        image: "/projects/voomp-creators.png",
        confidential: true,
      },
      {
        name: "Livraria Astronauta",
        kind: "Freelance · 2026",
        description: "Loja virtual desenvolvida para um cliente, com catálogo, busca e páginas de produto rápidas.",
        stack: ["Next.js 16", "React 19", "Tailwind"],
        href: "https://livraria-astronauta.vercel.app",
        image: "/projects/livraria-astronauta.png",
      },
      {
        name: "Sonar · GovTech",
        kind: "Sumé Tecnologia",
        description:
          "Plataforma de gestão de processos para municípios integrada ao MPRJ, com dashboards e fluxogramas interativos.",
        stack: ["Next.js", "React Flow", "Keycloak"],
        confidential: true,
      },
    ],
  },
  contact: {
    title: "Vamos construir algo juntos?",
    text: "Estou aberto a oportunidades como Engenheiro Frontend Sênior, remoto. Me chama por e-mail ou no LinkedIn.",
    email: "tryelson_henrique@hotmail.com",
    copy: "Copiar e-mail",
    copied: "Copiado!",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: { built: "Feito com Next.js, Tailwind e Motion." },
};
