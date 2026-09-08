export interface Integrante {
	id: string;
	nome: string;
	cargo: string;
	foto: string;
	miniDescricao: string;
	descricao: string;

	formacao?: string[];
	cursos?: string[];
	certificacoes?: string[];
	linguas?: string[];
	experiencias?: string[];

	linkedin?: string;
	instagram?: string;
	github?: string;
	tiktok?: string;
	portfolio?: string;
	curriculo?: string;
}

export const integrantes: Integrante[] = [
	{
		id: "paulo-henrique",
		nome: "Paulo Moreira",
		cargo: "CEO & Desenvolvedor",
		foto: "/equipe/paulo.jpeg",

		miniDescricao:
			"Desenvolvedor focado na criação de soluções digitais modernas, funcionais e escaláveis.",

		descricao:
			"Desenvolvedor Full Stack apaixonado por tecnologia e pela criação de soluções digitais. Atua no desenvolvimento de aplicações web, sistemas personalizados e interfaces modernas, buscando sempre unir tecnologia, usabilidade e performance.",

		formacao: [
			"Análise e Desenvolvimento de Sistemas - Universidade Cidade de São Paulo",
			"Desenvolvimento de Sistemas - Escola Técnica Estadual de São Paulo",
		],

		cursos: [
			"UI/UX Design - Cellep em parceria com o Facebok",
			"General English - Malvern House School London",
		],

		certificacoes: [
			"AWS Partner: Sales Accreditation - Amazon Web Services",
			"AWS Partner: Technical Accredited - Amazon Web Services",
		],

		linguas: [
			"Português — Nativo",
			"Inglês — Avançado",
			"Espanhol — Intermediário",
			"Coreano — Básico",
		],

		experiencias: [
			"Desenvolvedor - Freelancer (Jan 2026 - Presente)",
			"Desenvolvedor Full Stack - Muralis (Jul 2024 - Jan 2026)",
			"Desenvolvedor Full Cycle - DPL Distribuidora de Peças (Mai 2023 - Nov 2023)",
		],

		linkedin: "https://www.linkedin.com/in/paulomoreira2004/",
		github: "https://github.com/PauloMoreiraa",
		portfolio: "https://paulomoreiraa.github.io/",
		curriculo: "/curriculos/paulo-henrique.pdf",
	},

	{
		id: "novo-integrante",
		nome: "Nome do Integrante",
		cargo: "Cargo / Especialidade",
		foto: "/equipe/lucas.jpg",

		miniDescricao:
			"Breve descrição que aparecerá no card do integrante.",

		descricao:
			"Descrição completa do integrante. Esse texto aparecerá dentro do modal quando o usuário clicar no card.",

		formacao: [
			"Formação acadêmica",
		],

		cursos: [
			"Curso de exemplo",
		],

		certificacoes: [
			"Certificação de exemplo",
		],

		linguas: [
			"Português — Nativo",
			"Inglês — Avançado",
		],

		experiencias: [
			"Experiência profissional",
			"Experiência em desenvolvimento",
		],

		linkedin: "https://www.linkedin.com/",
		portfolio: "https://seuportfolio.com",

		// Basta não adicionar uma rede caso a pessoa não tenha.
		// instagram: "",
		// github: "",
		// tiktok: "",
		// curriculo: "",
	},
];