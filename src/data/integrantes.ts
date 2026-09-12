export interface Integrante {
  id: string;
  nome: string;
  cargo: string;
  foto: string;
  miniDescricao: string;
  descricao: string;

  linkedin?: string;
  instagram?: string;
  github?: string;
  tiktok?: string;
  portfolio?: string;
}

export const integrantes: Integrante[] = [
  {
    id: "bruno",
    nome: "Bruno Vargas",
    cargo: "CEO & Arquiteto de Software",
    foto: "https://media.licdn.com/dms/image/v2/D4D03AQF4guapWpLTBw/profile-displayphoto-shrink_400_400/B4DZXlm2gNHAAg-/0/1743313922480?e=1790812800&v=beta&t=xGcud6VCogpr-uQVTehqdxaGCXDaDbKJ1IprI9rdIjo",

    miniDescricao:
      "Profissional focado na definição de arquiteturas de software modernas, escaláveis, seguras e eficientes.",

    descricao:
      "Arquiteto de Software Sênior com mais de 10 anos de experiência atuando em grandes empresas e projetos de diferentes níveis de complexidade. Experiência na definição de arquiteturas, integração de sistemas e tomada de decisões técnicas, buscando construir soluções estáveis, escaláveis e alinhadas às necessidades do negócio. Atua próximo aos times de desenvolvimento, apoiando decisões técnicas e garantindo boas práticas ao longo de todo o ciclo de desenvolvimento.",

    linkedin: "https://www.linkedin.com/in/bjvargas/",
    github: "https://github.com/PauloMoreiraa",
    portfolio: "https://paulomoreiraa.github.io/",
  },

  {
    id: "paulo-henrique",
    nome: "Paulo Moreira",
    cargo: "CEO & Desenvolvedor",
    foto: "/equipe/paulo.jpeg",

    miniDescricao:
      "Desenvolvedor focado na criação de soluções digitais modernas, funcionais e escaláveis.",

    descricao:
      "Desenvolvedor Full Stack apaixonado por tecnologia e pela criação de soluções digitais. Atua no desenvolvimento de aplicações web, sistemas personalizados e interfaces modernas, buscando sempre unir tecnologia, usabilidade e performance.",

    linkedin: "https://www.linkedin.com/in/paulomoreira2004/",
    github: "https://github.com/PauloMoreiraa",
    portfolio: "https://paulomoreiraa.github.io/",
  },

  {
    id: "paulo-henrique",
    nome: "Paulo Moreira",
    cargo: "CEO & Desenvolvedor",
    foto: "/equipe/paulo.jpeg",

    miniDescricao:
      "Desenvolvedor focado na criação de soluções digitais modernas, funcionais e escaláveis.",

    descricao:
      "Desenvolvedor Full Stack apaixonado por tecnologia e pela criação de soluções digitais. Atua no desenvolvimento de aplicações web, sistemas personalizados e interfaces modernas, buscando sempre unir tecnologia, usabilidade e performance.",

    linkedin: "https://www.linkedin.com/in/paulomoreira2004/",
    github: "https://github.com/PauloMoreiraa",
    portfolio: "https://paulomoreiraa.github.io/",
  },

  {
    id: "paulo-henrique",
    nome: "Paulo Moreira",
    cargo: "CEO & Desenvolvedor",
    foto: "/equipe/paulo.jpeg",

    miniDescricao:
      "Desenvolvedor focado na criação de soluções digitais modernas, funcionais e escaláveis.",

    descricao:
      "Desenvolvedor Full Stack apaixonado por tecnologia e pela criação de soluções digitais. Atua no desenvolvimento de aplicações web, sistemas personalizados e interfaces modernas, buscando sempre unir tecnologia, usabilidade e performance.",

    linkedin: "https://www.linkedin.com/in/paulomoreira2004/",
    github: "https://github.com/PauloMoreiraa",
    portfolio: "https://paulomoreiraa.github.io/",
  },

  {
    id: "novo-integrante",
    nome: "Nome do Integrante",
    cargo: "Cargo / Especialidade",
    foto: "/equipe/lucas.jpg",

    miniDescricao:
      "Breve descrição que aparecerá no card do integrante.",

    descricao:
      "Descrição do integrante e sua atuação dentro da TuringDev, destacando sua experiência, especialidade e contribuição para os projetos da empresa.",

    linkedin: "https://www.linkedin.com/",
    portfolio: "https://seuportfolio.com",

    // Adicione somente as redes que o integrante possuir.
    // instagram: "https://instagram.com/...",
    // github: "https://github.com/...",
    // tiktok: "https://tiktok.com/@...",
  },
];