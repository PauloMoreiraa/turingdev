import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  GraduationCap,
  Languages,
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

import { integrantes, type Integrante } from "../../data/integrantes";

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
                className="
                  text-[clamp(32px,5vw,54px)]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.045em]
                  text-white
                "
              >
                Experiência diversa,{" "}
                <span className="text-sky-400">tecnologia</span>{" "}
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
                  <strong className="block text-2xl font-bold text-white">
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
                  <strong className="block text-2xl font-bold text-sky-400">
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
                  <strong className="block text-2xl font-bold text-white">
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

            {/* Foto */}
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
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Equipe TuringDev reunida"
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  <div
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
                  <span className="text-sky-400">soluções</span>
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
                Conheça os profissionais que fazem parte da
                equipe e descubra mais sobre suas experiências,
                conhecimentos e especialidades.
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-3
                gap-2
                sm:grid-cols-3
                sm:gap-3
                lg:grid-cols-4
                xl:grid-cols-5
              "
            >
              {integrantes.map((integrante) => (
                <button
                  key={integrante.id}
                  type="button"
                  onClick={() => setSelectedIntegrante(integrante)}
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
                    <div className="flex items-end justify-between gap-2">
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

      {selectedIntegrante && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/75
            p-3
            backdrop-blur-md
            sm:p-6
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedIntegrante(null);
            }
          }}
        >
          <div
            className="
              relative
              flex
              max-h-[92vh]
              w-full
              max-w-4xl
              flex-col
              overflow-hidden
              rounded-[28px]
              border
              border-white/[0.09]
              bg-[#080d18]
              shadow-[0_30px_100px_rgba(0,0,0,0.6)]
              sm:max-h-[88vh]
              lg:max-h-[90vh]
            "
          >
            <button
              type="button"
              onClick={() => setSelectedIntegrante(null)}
              aria-label="Fechar"
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/30
                text-slate-400
                backdrop-blur-md
                transition
                hover:border-sky-400/30
                hover:bg-sky-400/10
                hover:text-sky-400
              "
            >
              <X size={18} />
            </button>

            <div
              className="
                min-h-0
                flex-1
                overflow-y-auto
                overscroll-contain
                [&::-webkit-scrollbar]:w-1
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-white/10
                hover:[&::-webkit-scrollbar-thumb]:bg-sky-400/30
                [scrollbar-width:thin]
                [scrollbar-color:rgba(255,255,255,0.1)_transparent]
                lg:overflow-y-hidden
                lg:[&::-webkit-scrollbar]:w-0
                lg:[scrollbar-width:none]
              "
            >
              <div className="grid lg:grid-cols-[280px_1fr]">
                <div
                  className="
                    relative
                    aspect-square
                    overflow-hidden
                    lg:aspect-auto
                    lg:min-h-[280px]
                  "
                >
                  <img
                    src={selectedIntegrante.foto}
                    alt={selectedIntegrante.nome}
                    className="h-full w-full object-cover"
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#080d18]
                      via-transparent
                      to-transparent
                      lg:bg-gradient-to-r
                    "
                  />
                </div>

                <div className="p-5 sm:p-8 lg:p-10">
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-sky-400
                    "
                  >
                    {selectedIntegrante.cargo}
                  </span>

                  <h2
                    className="
                      mt-2
                      pr-10
                      text-2xl
                      font-bold
                      tracking-[-0.04em]
                      text-white
                      sm:text-4xl
                    "
                  >
                    {selectedIntegrante.nome}
                  </h2>

                  <p
                    className="
                      mt-5
                      max-w-2xl
                      text-sm
                      leading-7
                      text-slate-400
                    "
                  >
                    {selectedIntegrante.descricao}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {selectedIntegrante.linkedin && (
                      <SocialLink
                        href={selectedIntegrante.linkedin}
                        icon={<FaLinkedinIn size={15} />}
                        label="LinkedIn"
                      />
                    )}

                    {selectedIntegrante.portfolio && (
                      <SocialLink
                        href={selectedIntegrante.portfolio}
                        icon={<UserRound size={15} />}
                        label="Portfólio"
                      />
                    )}

                    {selectedIntegrante.github && (
                      <SocialLink
                        href={selectedIntegrante.github}
                        icon={<FaGithub size={16} />}
                        label="GitHub"
                      />
                    )}

                    {selectedIntegrante.instagram && (
                      <SocialLink
                        href={selectedIntegrante.instagram}
                        icon={<FaInstagram size={16} />}
                        label="Instagram"
                      />
                    )}

                    {selectedIntegrante.tiktok && (
                      <SocialLink
                        href={selectedIntegrante.tiktok}
                        icon={<FaTiktok size={15} />}
                        label="TikTok"
                      />
                    )}

                    {selectedIntegrante.curriculo && (
                      <SocialLink
                        href={selectedIntegrante.curriculo}
                        icon={<FileText size={15} />}
                        label="Currículo"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div
                className="
                  grid
                  gap-3
                  border-t
                  border-white/[0.06]
                  p-5
                  sm:grid-cols-2
                  sm:gap-4
                  sm:p-8
                  lg:grid-cols-3
                  lg:p-10
                "
              >
                {selectedIntegrante.formacao?.length ? (
                  <InfoBlock
                    icon={<GraduationCap size={17} />}
                    title="Formação"
                    items={selectedIntegrante.formacao}
                  />
                ) : null}

                {selectedIntegrante.cursos?.length ? (
                  <InfoBlock
                    icon={<BookOpen size={17} />}
                    title="Cursos"
                    items={selectedIntegrante.cursos}
                  />
                ) : null}

                {selectedIntegrante.certificacoes?.length ? (
                  <InfoBlock
                    icon={<Award size={17} />}
                    title="Certificações"
                    items={selectedIntegrante.certificacoes}
                  />
                ) : null}

                {selectedIntegrante.linguas?.length ? (
                  <InfoBlock
                    icon={<Languages size={17} />}
                    title="Idiomas"
                    items={selectedIntegrante.linguas}
                  />
                ) : null}

                {selectedIntegrante.experiencias?.length ? (
                  <InfoBlock
                    icon={<BriefcaseBusiness size={17} />}
                    title="Experiência"
                    items={selectedIntegrante.experiencias}
                    className="sm:col-span-2 lg:col-span-2"
                  />
                ) : null}
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
        gap-2
        rounded-xl
        border
        border-white/[0.08]
        bg-white/[0.03]
        px-3.5
        py-2.5
        text-xs
        font-semibold
        text-slate-300
        transition
        hover:border-sky-400/20
        hover:text-sky-400
      "
    >
      {icon}
      {label}
      <ExternalLink size={12} />
    </a>
  );
}

function InfoBlock({
  icon,
  title,
  items,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.02]
        p-5
        ${className}
      `}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            border
            border-sky-400/15
            bg-sky-400/[0.05]
            text-sky-400
          "
        >
          {icon}
        </span>

        <h3
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.12em]
            text-white
          "
        >
          {title}
        </h3>
      </div>

      <ul className="mt-4 space-y-2.5">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="
              flex
              gap-2.5
              text-xs
              leading-5
              text-slate-500
            "
          >
            <span
              className="
                mt-2
                h-1
                w-1
                shrink-0
                rounded-full
                bg-sky-400
              "
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}