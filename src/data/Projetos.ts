export type TamanhoProjeto =
  | "grande"
  | "horizontal"
  | "vertical"
  | "pequeno";

export interface Projeto {
  id: number;
  titulo: string;
  categoria: string;

  // Descrição curta que aparece diretamente no card
  miniDescricao: string;

  // Descrição completa que aparece somente no modal
  descricao: string;

  imagem: string;

  // Tecnologias ficam disponíveis no objeto caso sejam necessárias futuramente
  tecnologias: string[];

  // Link para visualizar o projeto
  link?: string;

  // Define se o projeto possui uma aplicação para visitar
  aplicacao?: boolean;

  // Fotos adicionais do sistema/projeto
  fotos?: string[];

  tamanho: TamanhoProjeto;
}

export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Sinaflor+ IBAMA",
    categoria: "Sistema Web",

    miniDescricao:
      "Sistema corporativo privado para gestão e processamento de dados geoespaciais.",

    descricao:
      "Sistema corporativo privado desenvolvido para gestão e processamento de dados geoespaciais. A plataforma reúne recursos voltados ao gerenciamento de informações, operações e processos que envolvem dados geográficos em larga escala.\n\nPor se tratar de uma solução corporativa privada, o sistema possui acesso restrito e não está disponível publicamente para demonstração.",

    imagem:
      "https://images.unsplash.com/photo-1655157639280-a8e4594d98ac?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    tecnologias: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "PostGIS",
    ],

    tamanho: "grande",

    aplicacao: true,

    fotos: [
      // Adicione aqui as fotos do Sinaflor+
      // "https://....",
      // "https://....",
    ],
  },

  {
    id: 2,
    titulo: "Peladô",
    categoria: "Aplicativo",

    miniDescricao:
      "Aplicativo para organizar peladas e gerar times equilibrados automaticamente.",

    descricao:
      "O Peladô é um aplicativo desenvolvido para facilitar a organização de partidas de futebol entre amigos.\n\nA plataforma permite cadastrar jogadores, organizar partidas e gerar times de forma equilibrada, considerando o nível dos participantes e as configurações definidas para cada partida.\n\nA proposta é tornar a organização das peladas mais rápida, simples e justa, evitando a necessidade de montar os times manualmente.",

    imagem:
      "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    tecnologias: [
      "React",
      "TypeScript",
      "Tailwind",
    ],

    tamanho: "vertical",

    link: "https://peladofc.vercel.app",

    aplicacao: true,
  },

  {
    id: 3,
    titulo: "Portal",
    categoria: "Dashboard",

    miniDescricao:
      "Portal privado para gestão segura de informações e acompanhamento de pessoas com deficiência.",

    descricao:
      "Dashboard interativo e privado desenvolvido para a visualização, gestão e acompanhamento de pessoas com deficiência, com foco em segurança, privacidade e conformidade com a LGPD.\n\nA plataforma conta com autenticação segura, incluindo Login, Logout e autenticação de dois fatores (2FA), além de controle de acesso aos dados sensíveis.\n\nO sistema também mantém um histórico completo de alterações realizadas pelos usuários, permitindo rastrear todas as ações executadas na plataforma.\n\nO usuário administrador possui uma visão centralizada dessas atividades, atuando como supervisor das alterações realizadas no sistema e garantindo maior controle, transparência e segurança na gestão das informações.",

    imagem:
      "https://images.unsplash.com/photo-1708686816818-2b018e0c1296?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    tecnologias: [
      "React",
      "TypeScript",
      "Charts",
    ],

    tamanho: "pequeno",

    fotos: [
      // Adicione aqui as fotos do Portal
      // "https://....",
      // "https://....",
    ],
  },

  {
    id: 4,
    titulo: "Landing Page",
    categoria: "Website",

    miniDescricao:
      "Landing page moderna e responsiva focada em apresentação e conversão.",

    descricao:
      "Landing page moderna e responsiva desenvolvida com foco em apresentação de produtos, serviços ou soluções.\n\nO projeto prioriza uma experiência visual agradável, navegação intuitiva e uma estrutura voltada para conversão.",

    imagem:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",

    tecnologias: [
      "React",
      "Tailwind",
      "TypeScript",
    ],

    tamanho: "horizontal",

    link: "https://seu-link-aqui.com",
  },

  {
    id: 5,
    titulo: "Sistema Corporativo",
    categoria: "Sistema Web",

    miniDescricao:
      "Aplicação corporativa para gerenciamento de processos e informações.",

    descricao:
      "Aplicação corporativa desenvolvida para centralizar o gerenciamento de processos e informações de uma organização.\n\nA solução foi estruturada para facilitar o controle das operações e oferecer uma experiência mais organizada para os usuários.",

    imagem:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",

    tecnologias: [
      "Vue",
      "Java",
      "Spring Boot",
    ],

    tamanho: "vertical",

    fotos: [
      // Adicione aqui as fotos do sistema
      // "https://....",
      // "https://....",
    ],
  },

  {
    id: 6,
    titulo: "Aplicação Geoespacial",
    categoria: "Geoprocessamento",

    miniDescricao:
      "Aplicação para visualização, análise e processamento de informações geográficas.",

    descricao:
      "Aplicação voltada para visualização, análise e processamento de informações geográficas.\n\nA solução utiliza recursos de geoprocessamento para trabalhar com dados espaciais e permitir uma visualização mais eficiente das informações em mapas.\n\nPor se tratar de uma aplicação corporativa privada, o acesso ao sistema é restrito.",

    imagem:
      "https://images.unsplash.com/photo-1524666041070-9c876415d6a4?auto=format&fit=crop&w=1400&q=80",

    tecnologias: [
      "ArcGIS",
      "PostGIS",
      "JavaScript",
    ],

    tamanho: "grande",

    aplicacao: true,

    fotos: [
      // Adicione aqui as fotos do sistema
      // "https://....",
      // "https://....",
    ],
  },

  {
    id: 7,
    titulo: "Portfólio Profissional",
    categoria: "Portfólio",

    miniDescricao:
      "Portfólio profissional com foco em experiência visual e apresentação de projetos.",

    descricao:
      "Portfólio profissional desenvolvido com foco em apresentação visual, organização de trabalhos e experiência de navegação.\n\nA estrutura foi pensada para destacar projetos, informações profissionais e trabalhos realizados.",

    imagem:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80",

    tecnologias: [
      "React",
      "CSS",
      "TypeScript",
    ],

    tamanho: "pequeno",

    link: "https://seu-link-aqui.com",
  },

  {
    id: 8,
    titulo: "E-commerce",
    categoria: "E-commerce",

    miniDescricao:
      "Plataforma de comércio eletrônico com catálogo, produtos e experiência de compra.",

    descricao:
      "Plataforma de comércio eletrônico desenvolvida para apresentar produtos e proporcionar uma experiência de compra simples e intuitiva.\n\nA estrutura contempla catálogo de produtos, organização das informações e uma interface pensada para facilitar a navegação do usuário.",

    imagem:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",

    tecnologias: [
      "React",
      "Node.js",
      "MongoDB",
    ],

    tamanho: "horizontal",

    aplicacao: true,
  },

  {
    id: 9,
    titulo: "Sistema de Gestão",
    categoria: "Sistema Web",

    miniDescricao:
      "Sistema para gerenciamento de operações, usuários e informações.",

    descricao:
      "Sistema desenvolvido para centralizar operações, usuários e informações em uma única plataforma.\n\nA aplicação foi estruturada para facilitar o gerenciamento das atividades e proporcionar maior organização aos processos internos.",

    imagem:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80",

    tecnologias: [
      "Angular",
      "Spring",
      "PostgreSQL",
    ],

    tamanho: "vertical",

    fotos: [
      // Adicione aqui as fotos do sistema
      // "https://....",
      // "https://....",
    ],
  },

  {
    id: 10,
    titulo: "Aplicação Mobile",
    categoria: "Aplicativo",

    miniDescricao:
      "Aplicativo mobile desenvolvido para oferecer uma experiência rápida e intuitiva.",

    descricao:
      "Aplicativo mobile desenvolvido com foco em praticidade, velocidade e facilidade de utilização.\n\nA interface foi planejada para oferecer uma experiência intuitiva em dispositivos móveis, mantendo uma navegação simples e objetiva.",

    imagem:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80",

    tecnologias: [
      "React Native",
      "TypeScript",
    ],

    tamanho: "pequeno",

    aplicacao: true,

    fotos: [
      // Adicione aqui as fotos do aplicativo
      // "https://....",
      // "https://....",
    ],
  },

  {
    id: 11,
    titulo: "Website Institucional",
    categoria: "Website",

    miniDescricao:
      "Website institucional moderno para fortalecer a presença digital de uma empresa.",

    descricao:
      "Website institucional desenvolvido para fortalecer a presença digital de uma empresa e apresentar seus serviços, informações e diferenciais de forma profissional.\n\nA estrutura foi planejada para oferecer uma navegação clara e uma apresentação visual moderna.",

    imagem:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",

    tecnologias: [
      "React",
      "Tailwind",
      "Vite",
    ],

    tamanho: "horizontal",

    link: "https://seu-link-aqui.com",
  },

  {
    id: 12,
    titulo: "Painel Administrativo",
    categoria: "Dashboard",

    miniDescricao:
      "Painel administrativo para controle de dados, usuários e operações.",

    descricao:
      "Painel administrativo desenvolvido para centralizar o controle de dados, usuários e operações.\n\nA solução proporciona uma visão organizada das informações e facilita o acompanhamento das atividades realizadas dentro da plataforma.",

    imagem:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80",

    tecnologias: [
      "Vue",
      "Node.js",
      "PostgreSQL",
    ],

    tamanho: "pequeno",

    fotos: [
      // Adicione aqui as fotos do painel
      // "https://....",
      // "https://....",
    ],
  },
];