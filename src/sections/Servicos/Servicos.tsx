import { servicos } from "../../data/servicos";

export default function Servicos() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
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
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="
            absolute
            -left-40
            top-1/3
            h-80
            w-80
            rounded-full
            bg-sky-500/[0.04]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-0
            h-96
            w-96
            rounded-full
            bg-blue-500/[0.035]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Header */}
        <header
          className="
            mb-10
            flex
            flex-col
            gap-6
            sm:mb-12
            lg:flex-row
            lg:items-end
            lg:justify-between
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
                border-sky-400/15
                bg-sky-400/[0.035]
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
                  shadow-[0_0_7px_rgba(56,189,248,0.7)]
                "
              />

              Nossos serviços
            </span>

            <h2
              id="servicos-title"
              className="
                max-w-3xl
                text-3xl
                font-bold
                leading-[1.08]
                tracking-[-0.045em]
                text-white
                sm:text-4xl
                lg:text-[48px]
              "
            >
              Soluções digitais para{" "}
              <span className="text-sky-400">
                diferentes desafios.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-md
              text-sm
              leading-7
              text-slate-500
            "
          >
            Desenvolvimento de sites, sistemas e experiências
            digitais pensadas para transformar ideias em soluções
            funcionais, modernas e eficientes.
          </p>
        </header>

        {/* Serviços */}
        <div
          aria-label="Serviços oferecidos pela TuringDev"
          className="
            -mx-4
            flex
            gap-3
            overflow-x-auto
            px-4
            pb-1

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:-mx-8
            sm:px-8

            lg:mx-0
            lg:grid
            lg:grid-cols-4
            lg:gap-3
            lg:overflow-visible
            lg:px-0
          "
        >
          {servicos.map((servico) => {
            const Icon = servico.icone;

            return (
              <article
                key={servico.id}
                className="
                  group
                  relative
                  flex
                  min-h-[275px]
                  w-[78vw]
                  max-w-[290px]
                  shrink-0
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.018]
                  p-5
                  backdrop-blur-md
                  transition-all
                  duration-300

                  hover:border-sky-400/20
                  hover:bg-sky-400/[0.025]

                  sm:w-[42vw]
                  sm:max-w-[300px]
                  sm:p-6

                  lg:min-h-[280px]
                  lg:w-auto
                  lg:max-w-none
                  lg:shrink
                "
              >
                {/* Neon sutil */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-28
                    w-28
                    rounded-full
                    bg-sky-400/[0.055]
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Ícone e número */}
                  <div className="flex items-start justify-between">
                    <div
                      aria-hidden="true"
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-sky-400/10
                        bg-sky-400/[0.04]
                        text-sky-400
                        transition-all
                        duration-300

                        group-hover:border-sky-400/20
                        group-hover:bg-sky-400/[0.07]
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.7}
                      />
                    </div>

                    <span
                      aria-hidden="true"
                      className="
                        text-[10px]
                        font-medium
                        tracking-[0.12em]
                        text-slate-700
                        transition-colors
                        duration-300
                        group-hover:text-sky-400/50
                      "
                    >
                      {servico.id}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div className="mt-7 flex flex-1 flex-col">
                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-sky-400/80
                      "
                    >
                      {servico.categoria}
                    </span>

                    <h3
                      className="
                        mt-2
                        text-lg
                        font-semibold
                        leading-snug
                        tracking-[-0.025em]
                        text-white
                      "
                    >
                      {servico.titulo}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-xs
                        leading-6
                        text-slate-500
                      "
                    >
                      {servico.descricao}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            rounded-2xl
            border
            border-white/[0.06]
            bg-white/[0.018]
            p-5
            backdrop-blur-md
            sm:p-6
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="min-w-0">
            <h3
              className="
                text-base
                font-semibold
                tracking-tight
                text-white
                sm:text-lg
              "
            >
              Tem uma ideia ou projeto em mente?
            </h3>

            <p
              className="
                mt-1
                max-w-2xl
                text-xs
                leading-6
                text-slate-500
                sm:text-sm
              "
            >
              Vamos conversar sobre como transformar sua ideia
              em uma solução digital.
            </p>
          </div>

          <a
            href="#contato"
            aria-label="Entrar em contato com a TuringDev"
            className="
              inline-flex
              w-full
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-sky-500
              px-5
              py-3
              text-xs
              font-semibold
              text-white
              transition-all
              duration-300

              hover:bg-sky-400
              hover:shadow-[0_8px_25px_rgba(14,165,233,0.14)]

              focus:outline-none
              focus:ring-2
              focus:ring-sky-400/40
              focus:ring-offset-2
              focus:ring-offset-[#030712]

              sm:w-auto
            "
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}