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
    github: "https://github.com/bjvargas",
  },

  {
    id: "guilherme-henrique",
    nome: "Guilherme Henrique",
    cargo: "CEO & Diretor Executivo",
    foto: "/equipe/guilherme.jpeg",

    miniDescricao:
      "Responsável pela liderança estratégica e pelo direcionamento das operações da empresa.",

    descricao:
      "Responsável pela liderança estratégica e operacional da empresa, com mais de 5 anos de experiência em posições de liderança e atuação no setor bancário. Atua na definição de objetivos, tomada de decisões e direcionamento das principais iniciativas do negócio, trabalhando em conjunto com as equipes para garantir organização, crescimento e execução dos projetos.",

    linkedin: "https://www.linkedin.com/in/guilhermeh-sa/",
  },

  {
    id: "paulo-henrique",
    nome: "Paulo Moreira",
    cargo: "CEO & Desenvolvedor",
    foto: "/equipe/paulo.jpeg",

    miniDescricao:
      "Desenvolvedor focado na criação de soluções digitais modernas, funcionais e escaláveis.",

    descricao:
      "Desenvolvedor com mais de 4 anos de experiência na área, atuando no desenvolvimento de sistemas e soluções digitais para diferentes projetos. Já participou de projetos de alcance nacional, incluindo soluções desenvolvidas para o IBAMA. Possui formação técnica em Desenvolvimento de Sistemas e graduação concluída na área de tecnologia, com experiência em diferentes tecnologias e ambientes de desenvolvimento.",

    linkedin: "https://www.linkedin.com/in/paulomoreira2004/",
    github: "https://github.com/PauloMoreiraa",
    portfolio: "https://paulomoreiraa.github.io/",
  },

  {
    id: "lucas-brandao",
    nome: "Lucas Brandão",
    cargo: "CEO & Desenvolvedor",
    foto: "/equipe/lucasb.jpg",

    miniDescricao:
      "Desenvolvedor que une visão de processo e código para resolver problemas reais.",

    descricao:
      "Desenvolvedor Full Stack com vivência em rotinas administrativas e financeiras, o que traz um olhar prático para o que realmente precisa ser resolvido. Trabalha com React, TypeScript, Node.js e Python, criando sistemas de gestão, automações e interfaces que simplificam o dia a dia de quem usa.",

    linkedin: "https://www.linkedin.com/in/lucasbrandaocabral/",
    github: "https://github.com/Lucasbrandaocabral",
    portfolio: "https://lucasbrandao-portfolio.vercel.app/",
  },

];