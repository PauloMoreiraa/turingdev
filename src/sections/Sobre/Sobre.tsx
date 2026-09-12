import {
  ArrowUpRight,
  ExternalLink,
  UserRound,
  X,
} from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { useEffect, useState } from "react";

import {
  integrantes,
  type Integrante,
} from "../../data/integrantes";

export default function Sobre() {
  const [selectedIntegrante, setSelectedIntegrante] =
    useState<Integrante | null>(null);

  useEffect(() => {
    if (!selectedIntegrante) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIntegrante]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIntegrante(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section
        id="sobre"
        aria-labelledby="sobre-title"
        className="
          relative
          w-full
          overflow-hidden
          bg-[#030712]
          px-4
          py-20
          sm:px-8
          sm:py-24
          lg:px-16
          lg:py-28
        "
      >
        {/* Background */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >
          <div
            className="
              absolute
              -left-40
              top-1/4
              h-[400px]
              w-[400px]
              rounded-full
              bg-sky-500/[0.06]
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              -right-40
              bottom-0
              h-[450px]
              w-[450px]
              rounded-full
              bg-blue-600/[0.05]
              blur-[150px]
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
              [background-size:70px_70px]
            "
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          {/* Apresentação */}
          <div
            className="
              grid
              grid-cols-1
              gap-10
              lg:grid-cols-2
              lg:gap-16
            "
          >
            {/* Texto */}
            <div
              className="
                order-1
                flex
                min-w-0
                flex-col
                justify-center
                lg:order-2
              "
            >
              <span
                className="
                  mb-5
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-sky-400/20
                  bg-sky-400/[0.05]
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-sky-400
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-sky-400
                    shadow-[0_0_10px_rgba(56,189,248,0.9)]
                  "
                />

                Sobre nós
              </span>

              <h2
                id="sobre-title"
                className="
                  text-[clamp(32px,5vw,54px)]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-white
                "
              >
                Experiência diversa,{" "}
                <span className="text-sky-400">
                  tecnologia
                </span>{" "}
                e propósito.
              </h2>

              <p
                className="
                  mt-6
                  text-[14px]
                  leading-[1.8]
                  text-slate-400
                  sm:text-[15px]
                "
              >
                Somos uma startup criada em 1º de setembro de
                2026, formada por profissionais experientes de
                diferentes áreas, segmentos e trajetórias.
                Reunimos pessoas com formação acadêmica e
                conhecimentos em tecnologia, incluindo
                profissionais que já atuaram em grandes empresas
                e multinacionais.
              </p>

              <p
                className="
                  mt-4
                  text-[14px]
                  leading-[1.8]
                  text-slate-400
                  sm:text-[15px]
                "
              >
                Nossa equipe combina diferentes perspectivas,
                experiências de mercado e especialidades para
                desenvolver projetos com qualidade, estratégia e
                propósito. Mais do que criar produtos digitais,
                buscamos entender cada desafio e transformar
                conhecimento em soluções eficientes, modernas e
                capazes de gerar valor para nossos clientes.
              </p>

              {/* Indicadores */}
              <div
                className="
                  mt-8
                  grid
                  grid-cols-2
                  gap-3
                  sm:grid-cols-3
                "
              >
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-4
                  "
                >
                  <strong
                    className="
                      block
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    {String(integrantes.length).padStart(2, "0")}
                  </strong>

                  <span
                    className="
                      mt-1
                      block
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-slate-500
                    "
                  >
                    Integrantes
                  </span>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-4
                  "
                >
                  <strong
                    className="
                      block
                      text-2xl
                      font-bold
                      text-sky-400
                    "
                  >
                    100%
                  </strong>

                  <span
                    className="
                      mt-1
                      block
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-slate-500
                    "
                  >
                    Personalizado
                  </span>
                </div>

                <div
                  className="
                    col-span-2
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    p-4
                    sm:col-span-1
                  "
                >
                  <strong
                    className="
                      block
                      text-2xl
                      font-bold
                      text-white
                    "
                  >
                    Full Stack
                  </strong>

                  <span
                    className="
                      mt-1
                      block
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-slate-500
                    "
                  >
                    Tecnologia
                  </span>
                </div>
              </div>
            </div>

            {/* Imagem principal */}
            <div
              className="
                order-2
                flex
                min-w-0
                items-center
                lg:order-1
              "
            >
              <div
                className="
                  w-full
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  p-2
                  shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                "
              >
                <div
                  className="
                    relative
                    aspect-square
                    w-full
                    overflow-hidden
                    rounded-[22px]
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop"
                    alt="Equipe TuringDev reunida"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#030712]/40
                      via-transparent
                      to-transparent
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Equipe */}
          <div className="mt-24 sm:mt-28">
            <div
              className="
                mb-10
                flex
                flex-col
                justify-between
                gap-5
                sm:flex-row
                sm:items-end
              "
            >
              <div>
                <span
                  className="
                    mb-4
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-sky-400/20
                    bg-sky-400/[0.05]
                    px-3
                    py-1.5
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-sky-400
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-sky-400
                    "
                  />

                  Nossa equipe
                </span>

                <h3
                  className="
                    text-3xl
                    font-bold
                    tracking-[-0.035em]
                    text-white
                    sm:text-4xl
                  "
                >
                  Pessoas por trás das{" "}
                  <span className="text-sky-400">
                    soluções
                  </span>
                </h3>
              </div>

              <p
                className="
                  max-w-md
                  text-sm
                  leading-7
                  text-slate-500
                "
              >
                Conheça as pessoas que fazem parte da equipe
                e descubra um pouco mais sobre quem está por
                trás dos nossos projetos.
              </p>
            </div>

            {/* Cards */}
            <div
              className="
                grid
                grid-cols-3
                gap-2
                sm:gap-3
                lg:grid-cols-4
                xl:grid-cols-5
              "
            >
              {integrantes.map((integrante) => (
                <button
                  key={integrante.id}
                  type="button"
                  onClick={() =>
                    setSelectedIntegrante(integrante)
                  }
                  aria-label={`Ver perfil de ${integrante.nome}`}
                  className="
                    group
                    relative
                    min-w-0
                    cursor-pointer
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    text-left
                    transition-all
                    duration-300
                    hover:border-sky-400/30
                  "
                >
                  <img
                    src={integrante.foto}
                    alt={integrante.nome}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#030712]
                      via-[#030712]/55
                      to-transparent
                      transition-all
                      duration-300
                      group-hover:via-[#030712]/65
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      aspect-[0.82]
                      min-h-[180px]
                      flex-col
                      justify-end
                      p-2.5
                      sm:min-h-[220px]
                      sm:p-3.5
                    "
                  >
                    <div
                      className="
                        flex
                        items-end
                        justify-between
                        gap-2
                      "
                    >
                      <div className="min-w-0">
                        <span
                          className="
                            block
                            truncate
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.12em]
                            text-sky-400
                            sm:text-[10px]
                          "
                        >
                          {integrante.cargo}
                        </span>

                        <h4
                          className="
                            mt-1
                            truncate
                            text-base
                            font-semibold
                            tracking-tight
                            text-white
                            sm:text-lg
                          "
                        >
                          {integrante.nome}
                        </h4>
                      </div>

                      <span
                        aria-hidden="true"
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/10
                          bg-black/20
                          text-white/60
                          backdrop-blur-md
                          transition-all
                          duration-300
                          group-hover:border-sky-400/30
                          group-hover:bg-sky-400/[0.08]
                          group-hover:text-sky-400
                        "
                      >
                        <ArrowUpRight
                          size={16}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-0.5
                            group-hover:-translate-y-0.5
                          "
                        />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedIntegrante && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/75
            p-3
            backdrop-blur-sm
            sm:p-5
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedIntegrante(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="integrante-nome"
            className="
              relative
              my-auto
              flex
              max-h-[92vh]
              w-full
              max-w-[620px]
              flex-col
              overflow-hidden
              rounded-[20px]
              border
              border-white/[0.08]
              bg-[#080d18]
              shadow-[0_30px_100px_rgba(0,0,0,0.6)]
              sm:rounded-[24px]
              sm:max-h-[90vh]
            "
          >
            {/* Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                z-10
                h-56
                w-56
                rounded-full
                bg-sky-400/[0.06]
                blur-[90px]
              "
            />

            {/* Botão fechar */}
            <button
              type="button"
              onClick={() => setSelectedIntegrante(null)}
              aria-label="Fechar informações de integrante"
              className="
                absolute
                right-3
                top-3
                z-30
                flex
                h-8
                w-8
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-black/45
                text-slate-400
                backdrop-blur-md
                transition-all
                duration-200
                hover:border-sky-400/25
                hover:bg-sky-400/[0.08]
                hover:text-sky-400
                sm:right-4
                sm:top-4
                sm:h-9
                sm:w-9
              "
            >
              <X size={15} className="sm:h-[17px] sm:w-[17px]" />
            </button>

            {/* Foto */}
            <div
              className="
                relative
                h-[180px]
                w-full
                shrink-0
                overflow-hidden
                bg-[#050a13]
                sm:h-[240px]
                md:h-[300px]
              "
            >
              <img
                src={selectedIntegrante.foto}
                alt={`Foto de ${selectedIntegrante.nome}`}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#080d18]
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* Conteúdo */}
            <div
              className="
                min-h-0
                overflow-y-auto
                px-5
                pb-5
                pt-1
                sm:px-7
                sm:pb-7
                sm:pt-2
              "
            >
              {/* Cargo */}
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-sky-400/15
                  bg-sky-400/[0.04]
                  px-2.5
                  py-1
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-sky-400
                  sm:px-3
                  sm:py-1.5
                  sm:text-[9px]
                "
              >
                {selectedIntegrante.cargo}
              </span>

              {/* Nome */}
              <h2
                id="integrante-nome"
                className="
                  mt-2
                  pr-8
                  text-[22px]
                  font-bold
                  leading-tight
                  tracking-[-0.035em]
                  text-white
                  sm:mt-3
                  sm:text-3xl
                "
              >
                {selectedIntegrante.nome}
              </h2>

              {/* Descrição */}
              <p
                className="
                  mt-3
                  text-[12px]
                  leading-[1.7]
                  text-slate-400
                  sm:mt-4
                  sm:text-sm
                  sm:leading-7
                "
              >
                {selectedIntegrante.descricao}
              </p>

              {/* Mini descrição */}
              {selectedIntegrante.miniDescricao && (
                <div
                  className="
                    mt-3
                    border-l
                    border-sky-400/30
                    pl-3
                    sm:mt-4
                    sm:pl-4
                  "
                >
                  <p
                    className="
                      text-[11px]
                      leading-[1.6]
                      text-slate-500
                      sm:text-xs
                      sm:leading-6
                    "
                  >
                    {selectedIntegrante.miniDescricao}
                  </p>
                </div>
              )}

              {/* Redes sociais */}
              <div
                className="
                  mt-4
                  border-t
                  border-white/[0.06]
                  pt-4
                  sm:mt-6
                  sm:pt-5
                "
              >
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedIntegrante.linkedin && (
                    <SocialLink
                      href={selectedIntegrante.linkedin}
                      icon={
                        <FaLinkedinIn size={12} />
                      }
                      label="LinkedIn"
                    />
                  )}

                  {selectedIntegrante.github && (
                    <SocialLink
                      href={selectedIntegrante.github}
                      icon={<FaGithub size={13} />}
                      label="GitHub"
                    />
                  )}

                  {selectedIntegrante.portfolio && (
                    <SocialLink
                      href={selectedIntegrante.portfolio}
                      icon={<UserRound size={12} />}
                      label="Portfólio"
                    />
                  )}

                  {selectedIntegrante.instagram && (
                    <SocialLink
                      href={selectedIntegrante.instagram}
                      icon={
                        <FaInstagram size={13} />
                      }
                      label="Instagram"
                    />
                  )}

                  {selectedIntegrante.tiktok && (
                    <SocialLink
                      href={selectedIntegrante.tiktok}
                      icon={<FaTiktok size={12} />}
                      label="TikTok"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        cursor-pointer
        items-center
        gap-1.5
        rounded-lg
        border
        border-white/[0.08]
        bg-white/[0.03]
        px-2.5
        py-2
        text-[10px]
        font-semibold
        text-slate-300
        transition
        hover:border-sky-400/20
        hover:bg-sky-400/[0.04]
        hover:text-sky-400
        sm:gap-2
        sm:rounded-xl
        sm:px-3.5
        sm:py-2.5
        sm:text-xs
      "
    >
      {icon}

      {label}

      <ExternalLink
        aria-hidden="true"
        size={10}
        className="sm:h-3 sm:w-3"
      />
    </a>
  );
}