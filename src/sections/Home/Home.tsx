import "./Home.css";

export default function Home() {
  return (
    <section
      id="inicio"
      className="
        relative
        flex
        h-screen
        min-h-0
        w-full
        items-center
        overflow-hidden
        bg-[#030712]
        px-5
        pt-16
        sm:px-8
        sm:pt-20
        lg:px-16
      "
    >
      {/* ILUMINAÇÃO ESQUERDA */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          h-[350px]
          w-[350px]
          -translate-y-1/2
          rounded-full
          bg-blue-900/20
          blur-[120px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[130px]
          home-float-slow
        "
      />

      {/* ILUMINAÇÃO DIREITA */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/4
          h-[300px]
          w-[300px]
          rounded-full
          bg-sky-500/10
          blur-[100px]
          sm:h-[380px]
          sm:w-[380px]
          sm:blur-[120px]
          home-float-reverse
        "
      />

      {/* CONTEÚDO */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          h-full
          w-full
          max-w-7xl
          items-center
          gap-2
          lg:grid-cols-2
          lg:gap-16
        "
      >
        {/* TEXTO */}
        <div
          className="
            order-2
            flex
            flex-col
            items-center
            justify-center
            text-center
            lg:order-1
            lg:items-start
            lg:text-left
          "
        >
          {/* ETIQUETA */}
          <div
            className="
              mb-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-sky-400/20
              bg-sky-400/[0.06]
              px-3
              py-1.5
              text-[11px]
              font-medium
              text-sky-400
              sm:mb-4
              sm:px-4
              sm:py-2
              sm:text-sm
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

            Solução Digital
          </div>

          {/* TÍTULO */}
          <h1
            className="
              max-w-2xl
              text-[2rem]
              font-bold
              leading-[1.08]
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Transformamos ideias em{" "}
            <span className="text-sky-400">
              soluções digitais.
            </span>
          </h1>

          {/* DESCRIÇÃO */}
          <p
            className="
              mt-3
              max-w-xl
              text-xs
              leading-5
              text-slate-400
              sm:mt-5
              sm:text-base
              sm:leading-7
              lg:text-lg
            "
          >
            Criamos sites, sistemas e aplicações modernas
            para empresas que querem crescer através da
            tecnologia.
          </p>

          {/* BOTÕES */}
          <div
            className="
              mt-5
              flex
              flex-col
              items-center
              gap-2.5
              sm:mt-7
              sm:flex-row
              sm:gap-3
              lg:justify-start
            "
          >
            <a
              href="#contato"
              className="
                group
                flex
                items-center
                gap-2
                rounded-xl
                bg-sky-400
                px-5
                py-2.5
                text-xs
                font-semibold
                text-slate-950
                transition-all
                duration-200
                hover:bg-sky-300
                hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]
                sm:px-6
                sm:py-3
                sm:text-sm
              "
            >
              Fazer orçamento

              <span
                className="
                  text-base
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  sm:text-lg
                "
              >
                ↗
              </span>
            </a>

            <a
              href="#projetos"
              className="
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                py-2.5
                text-xs
                font-medium
                text-white
                transition-all
                duration-200
                hover:border-white/20
                hover:bg-white/[0.07]
                sm:px-6
                sm:py-3
                sm:text-sm
              "
            >
              Ver projetos
            </a>
          </div>
        </div>

        {/* LADO DIREITO */}
        <div
          className="
            order-1
            flex
            flex-col
            items-center
            justify-center
            lg:order-2
          "
        >
          {/* COMPOSIÇÃO DA LOGO */}
          <div
            className="
              relative
              flex
              h-[150px]
              w-[150px]
              items-center
              justify-center
              sm:h-[250px]
              sm:w-[250px]
              lg:h-[400px]
              lg:w-[400px]
              home-float
            "
          >
            {/* GLOW */}
            <div
              className="
                absolute
                inset-[20%]
                rounded-full
                bg-sky-400/20
                blur-[50px]
                sm:blur-[70px]
                home-glow
              "
            />

            {/* LOSANGO EXTERNO */}
            <div
              className="
                absolute
                inset-[8%]
                rotate-45
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.025]
                shadow-[0_0_50px_rgba(56,189,248,0.1)]
                backdrop-blur-sm
                sm:rounded-[45px]
                sm:shadow-[0_0_70px_rgba(56,189,248,0.1)]
                home-orbit-reverse
              "
            />

            {/* FORMA GLASS */}
            <div
              className="
                absolute
                inset-[18%]
                rounded-[22px]
                border
                border-white/10
                bg-gradient-to-br
                from-white/[0.10]
                via-white/[0.03]
                to-sky-400/[0.04]
                shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_20px_45px_rgba(0,0,0,0.5)]
                backdrop-blur-md
                sm:rounded-[28px]
                sm:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_25px_60px_rgba(0,0,0,0.5)]
                home-glass-float
              "
            />

            {/* LOGO */}
            <div
              className="
                relative
                z-10
                flex
                h-[72px]
                w-[72px]
                items-center
                justify-center
                rounded-[17px]
                border
                border-white/10
                bg-[#050b16]/90
                shadow-[0_15px_35px_rgba(0,0,0,0.55)]
                backdrop-blur-xl
                sm:h-32
                sm:w-32
                sm:rounded-[22px]
                lg:h-48
                lg:w-48
              "
            >
              <img
                src="/images/logo.png"
                alt="TuringDev"
                className="
                  h-[68%]
                  w-[68%]
                  object-contain
                  drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]
                  sm:drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]
                "
              />
            </div>

            {/* REFLEXO */}
            <div
              className="
                pointer-events-none
                absolute
                left-[22%]
                top-[18%]
                h-8
                w-20
                rotate-[-35deg]
                rounded-full
                bg-white/[0.07]
                blur-lg
                sm:h-12
                sm:w-28
                sm:blur-xl
              "
            />
          </div>

          {/* ESTATÍSTICAS */}
          <div
            className="
              mt-1
              flex
              items-center
              justify-center
              gap-6
              sm:mt-2
              sm:gap-8
              lg:mt-0
            "
          >
            {/* PROJETOS */}
            <div className="text-center">
              <div
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                +20
              </div>

              <div
                className="
                  mt-0.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-wider
                  text-slate-500
                  sm:mt-1
                  sm:text-xs
                "
              >
                projetos criados
              </div>
            </div>

            {/* DIVISOR */}
            <div
              className="
                h-10
                w-px
                bg-gradient-to-b
                from-transparent
                via-white/15
                to-transparent
                sm:h-12
              "
            />

            {/* POSSIBILIDADES */}
            <div className="text-center">
              <div
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-sky-400
                  sm:text-4xl
                "
              >
                ∞
              </div>

              <div
                className="
                  mt-0.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-wider
                  text-slate-500
                  sm:mt-1
                  sm:text-xs
                "
              >
                possibilidades
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LINHA INFERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-px
          w-[80%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-sky-400/20
          to-transparent
        "
      />
    </section>
  );
}