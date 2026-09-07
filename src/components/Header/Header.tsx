import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            `#${visibleSections[0].target.id}`
          );
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const glassActive = scrolled || menuOpen;

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        transition-all
        duration-300

        ${
          glassActive
            ? `
              border-white/10
              bg-black/70
              backdrop-blur-xl
            `
            : `
              border-transparent
              bg-transparent
              backdrop-blur-none
            `
        }
      `}
    >
      {/* NAVBAR */}
      <nav className="w-full px-5 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* LOGO */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <img
              src="/images/logo.png"
              alt="TuringDev"
              className="
                h-9
                w-9
                object-contain
                lg:h-11
                lg:w-11
              "
            />

            <span
              className="
                text-xl
                font-semibold
                tracking-tight
                text-white
                lg:text-2xl
              "
            >
              Turing<span className="text-sky-400">Dev</span>
            </span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-6 lg:flex">
            <div className="flex items-center gap-1">
              {links.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`
                      rounded-lg
                      border
                      px-3.5
                      py-2
                      text-sm
                      font-medium
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? `
                            border-sky-400/20
                            bg-sky-400/10
                            text-sky-400
                          `
                          : `
                            border-transparent
                            text-white/70
                            hover:border-white/10
                            hover:bg-white/10
                            hover:text-white
                          `
                      }
                    `}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* CTA DESKTOP */}
            <a
              href="#contato"
              className="
                group
                flex
                items-center
                gap-2
                rounded-lg
                bg-sky-400
                px-4
                py-2.5
                text-sm
                font-semibold
                text-black
                transition-all
                duration-200
                hover:bg-sky-300
                hover:shadow-lg
                hover:shadow-sky-400/20
              "
            >
              Fazer orçamento

              <ArrowUpRight
                size={17}
                strokeWidth={2.2}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* BOTÃO MOBILE */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Fechar menu" : "Abrir menu"
            }
            aria-expanded={menuOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/5
              text-white
              transition-all
              duration-200
              hover:bg-white/10
              hover:text-sky-400
              lg:hidden
            "
          >
            {menuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ease-out
          lg:hidden

          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-5 pb-5 pt-2 sm:px-8">
          <div
            className="
              mx-auto
              w-full
              max-w-7xl
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-2
            "
          >
            {/* LINKS MOBILE */}
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`
                      flex
                      w-full
                      items-center
                      justify-center
                      rounded-xl
                      px-4
                      py-3.5
                      text-center
                      text-sm
                      font-medium
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? `
                            bg-sky-400/10
                            text-sky-400
                          `
                          : `
                            text-white/70
                            hover:bg-white/10
                            hover:text-white
                          `
                      }
                    `}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* CTA MOBILE */}
            <a
              href="#contato"
              onClick={closeMenu}
              className="
                group
                mt-2
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-sky-400
                px-5
                py-3.5
                text-sm
                font-semibold
                text-black
                transition-all
                duration-200
                hover:bg-sky-300
              "
            >
              Fazer orçamento

              <ArrowUpRight
                size={17}
                strokeWidth={2.2}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}