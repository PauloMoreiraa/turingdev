import {
  ArrowUpRight,
  MessageCircle,
  MoveUp,
} from "lucide-react";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

const navegacao = [
  { nome: "Início", href: "#inicio" },
  { nome: "Serviços", href: "#servicos" },
  { nome: "Projetos", href: "#projetos" },
  { nome: "Sobre nós", href: "#sobre" },
  { nome: "Contato", href: "#contato" },
];

const servicos = [
  "Sites Institucionais",
  "Landing Pages",
  "Sistemas Web",
  "UI/UX Design",
  "Identidade Visual",
  "Consultoria de TI",
];

export default function Footer() {
  const whatsappNumber = "5511963949077";

  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site da TuringDev e gostaria de falar sobre um projeto."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#030712]
        px-4
        sm:px-8
        lg:px-16
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-sky-500/[0.07]
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* CTA */}
        <div
          className="
            border-b
            border-white/[0.06]
            py-16
            sm:py-20
            lg:py-24
          "
        >
          <div className="max-w-3xl">
            <span
              className="
                mb-4
                inline-flex
                items-center
                gap-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-sky-400
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-sky-400
                  shadow-[0_0_10px_rgba(56,189,248,0.8)]
                "
              />

              Vamos criar juntos
            </span>

            <h2
              className="
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              Tem uma ideia?
              <br />

              <span className="text-sky-400">
                Vamos tirar do papel.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-slate-400
                sm:text-base
              "
            >
              Transformamos ideias em produtos digitais modernos,
              funcionais e pensados para gerar resultados.
            </p>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div
          className="
            grid
            gap-12
            py-14
            sm:grid-cols-2
            lg:grid-cols-12
            lg:gap-8
            lg:py-16
          "
        >
          {/* Marca + Redes sociais */}
          <div className="lg:col-span-4">
            <a
              href="#inicio"
              className="group inline-flex items-center"
            >
              <span
                className="
                  text-2xl
                  font-black
                  tracking-tight
                  text-white
                "
              >
                Turing
                <span className="text-sky-400">
                  Dev
                </span>
              </span>
            </a>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-7
                text-slate-400
              "
            >
              Tecnologia, criatividade e estratégia para transformar
              ideias em soluções digitais eficientes, modernas e
              escaláveis.
            </p>

            {/* Redes sociais */}
            <div className="mt-7 flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-slate-400
                  transition
                  duration-300
                  hover:border-sky-400/30
                  hover:bg-sky-400/[0.07]
                  hover:text-sky-400
                "
              >
                <FaWhatsapp
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/turingdev_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-slate-400
                  transition
                  duration-300
                  hover:border-sky-400/30
                  hover:bg-sky-400/[0.07]
                  hover:text-sky-400
                "
              >
                <FaInstagram
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@turingdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="
                  group
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-slate-400
                  transition
                  duration-300
                  hover:border-sky-400/30
                  hover:bg-sky-400/[0.07]
                  hover:text-sky-400
                "
              >
                <FaTiktok
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white">
              Navegação
            </h3>

            <ul className="mt-5 space-y-3.5">
              {navegacao.map((item) => (
                <li key={item.nome}>
                  <a
                    href={item.href}
                    className="
                      inline-flex
                      items-center
                      text-sm
                      text-slate-400
                      transition
                      duration-200
                      hover:translate-x-1
                      hover:text-sky-400
                    "
                  >
                    {item.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">
              Serviços
            </h3>

            <ul
              className="
                mt-5
                grid
                grid-cols-1
                gap-3.5
                sm:grid-cols-2
                lg:grid-cols-1
              "
            >
              {servicos.map((servico) => (
                <li key={servico}>
                  <a
                    href="#projetos"
                    className="
                      inline-flex
                      items-center
                      text-sm
                      text-slate-400
                      transition
                      duration-200
                      hover:translate-x-1
                      hover:text-sky-400
                    "
                  >
                    {servico}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white">
              Vamos conversar
            </h3>

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-slate-400
              "
            >
              Tem um projeto em mente ou precisa de uma solução
              personalizada? Fale diretamente com nossa equipe.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-6
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-4
                transition
                duration-300
                hover:border-sky-400/20
                hover:bg-sky-400/[0.04]
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-sky-400/[0.08]
                  text-sky-400
                  transition
                  duration-300
                  group-hover:bg-sky-400/[0.14]
                "
              >
                <MessageCircle size={18} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-slate-500">
                  Atendimento
                </span>

                <span
                  className="
                    mt-0.5
                    block
                    text-sm
                    font-semibold
                    text-slate-200
                  "
                >
                  Fale pelo WhatsApp
                </span>
              </span>

              <ArrowUpRight
                size={15}
                className="
                  ml-auto
                  text-slate-500
                  transition
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-sky-400
                "
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.06]
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} TuringDev. Todos os direitos
            reservados.
          </p>

          <div className="flex items-center gap-4">
            <span
              className="
                hidden
                text-xs
                text-slate-600
                sm:inline
              "
            >
              Tecnologia que transforma ideias.
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              className="
                group
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                text-slate-400
                transition
                duration-300
                hover:border-sky-400/30
                hover:bg-sky-400/[0.06]
                hover:text-sky-400
              "
            >
              <MoveUp
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}