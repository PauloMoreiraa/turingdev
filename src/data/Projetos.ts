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
    titulo: "Portfólio de Psicólogo",
    categoria: "Website",

    miniDescricao:
      "Portfólio moderno e responsivo focado em apresentação e conversão.",

    descricao:
      "Portfólio moderno e responsivo desenvolvido com foco em apresentação de serviços de um psicólogo.\n\nO portfólio prioriza uma experiência visual agradável, navegação intuitiva e uma estrutura voltada para conversão.",

    imagem:
      "https://images.unsplash.com/photo-1714976694468-ff722f34d0b6?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    tecnologias: [
      "React",
      "Tailwind",
      "TypeScript",
    ],

    tamanho: "horizontal",

    link: "https://leonardopsicologo.vercel.app/",
    aplicacao: true,
  },

  {
    id: 2,
    titulo: "Peladô",
    categoria: "Aplicativo/Web",

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
    titulo: "Portal do Usuário",
    categoria: "Dashboard",

    miniDescricao:
      "Portal privado para gestão segura de informações e acompanhamento de pessoas com deficiência.",

    descricao:
      "Dashboard interativo e privado desenvolvido para a visualização, gestão e acompanhamento de pessoas com deficiência, com foco em segurança, privacidade e conformidade com a LGPD.\n\nA plataforma conta com autenticação segura, incluindo Login, Logout e autenticação de dois fatores (2FA), além de controle de acesso aos dados sensíveis.\n\nO sistema também mantém um histórico completo de alterações realizadas pelos usuários, permitindo rastrear todas as ações executadas na plataforma.\n\nO usuário administrador possui uma visão centralizada dessas atividades, atuando como supervisor das alterações realizadas no sistema e garantindo maior controle, transparência e segurança na gestão das informações.",

    imagem:
      "https://images.unsplash.com/photo-1708686816818-2b018e0c1296?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    tecnologias: [
      "React",
      "Vite",
      "Node",
      "Prisma",
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
    titulo: "Aplicação Geoespacial",
    categoria: "Geoprocessamento",

    miniDescricao:
      "Aplicação para visualização, análise e processamento de informações geográficas.",

    descricao:
      "Aplicação voltada para visualização, análise e processamento de informações geográficas.\n\nA solução utiliza recursos de geoprocessamento para trabalhar com dados espaciais e permitir uma visualização mais eficiente das informações em mapas.\n\nPor se tratar de uma aplicação corporativa privada, o acesso ao sistema é restrito.",

    imagem:
      "https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    tecnologias: [
      "ArcGIS",
      "JavaScript",
    ],

    tamanho: "horizontal",

    link: "https://analise-de-area.vercel.app/",

    aplicacao: true,
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

];