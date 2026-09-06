export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Projeto TuringDev",
    description:
      "Website institucional moderno desenvolvido para apresentar a TuringDev, seus serviços e soluções digitais.",
    category: "Website",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=80",
    link: "#",
  },
  {
    title: "Sistema Web",
    description:
      "Sistema web personalizado desenvolvido para otimizar processos e centralizar informações de um negócio.",
    category: "Sistema Web",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    link: "#",
  },
  {
    title: "Aplicação Digital",
    description:
      "Aplicação personalizada criada para transformar uma necessidade específica em uma solução digital eficiente.",
    category: "Aplicação",
    technologies: [
      "React",
      "TypeScript",
      "API REST",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    link: "#",
  },
  {
    title: "Experiência UX/UI",
    description:
      "Projeto focado em experiência do usuário, interface moderna e criação de uma jornada digital mais intuitiva.",
    category: "UX/UI",
    technologies: [
      "Figma",
      "React",
      "TypeScript",
    ],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80",
    link: "#",
  },
];