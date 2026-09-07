import { ArrowUpRight, CircleStar } from "lucide-react";

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
        overflow-hidden
        bg-[#030712]
        px-4
        pt-20
        pb-4
        sm:px-8
        sm:pt-24
        sm:pb-6
        lg:px-16
        lg:pt-28
        lg:pb-10
      "
    >
      {/* Brilho esquerdo */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          h-[240px]
          w-[240px]
          -translate-y-1/2
          rounded-full
          bg-blue-900/20
          blur-[90px]
          sm:h-[380px]
          sm:w-[380px]
          sm:blur-[120px]
          lg:h-[420px]
          lg:w-[420px]
          lg:blur-[130px]
        "
      />

      {/* Brilho direito */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/4
          h-[220px]
          w-[220px]
          rounded-full
          bg-sky-500/10
          blur-[80px]
          sm:h-[340px]
          sm:w-[340px]
          sm:blur-[110px]
          lg:h-[380px]
          lg:w-[380px]
          lg:blur-[120px]
        "
      />

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-7xl
          flex-col
          justify-around
          lg:grid
          lg:grid-cols-2
          lg:items-center
          lg:justify-normal
          lg:gap-12
          xl:gap-20
        "
      >
        {/* =====================================================
            FOTO + INFORMAÇÕES
        ====================================================== */}
        <div
          className="
            order-1
            flex
            w-full
            flex-col
            items-center
            lg:order-2
          "
        >
          {/* FOTO */}
          <div
            className="
              relative
              flex
              h-[200px]
              w-full
              max-w-[285px]
              items-end
              justify-center
              sm:h-[300px]
              sm:max-w-[400px]
              lg:h-[470px]
              lg:max-w-[500px]
              xl:h-[530px]
              xl:max-w-[550px]
            "
          >
            {/* Base */}
            <div
              className="
                absolute
                bottom-0
                left-1/2
                h-[140px]
                w-[195px]
                -translate-x-1/2
                rounded-3xl
                border
                border-sky-400/10
                bg-sky-400/[0.025]
                shadow-[0_25px_70px_rgba(0,0,0,0.45)]
                sm:h-[215px]
                sm:w-[310px]
                lg:h-[335px]
                lg:w-[430px]
                xl:h-[380px]
                xl:w-[480px]
              "
            />

            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[12%]
                left-1/2
                h-[160px]
                w-[160px]
                -translate-x-1/2
                rounded-full
                bg-sky-500/10
                blur-[60px]
                sm:h-[250px]
                sm:w-[250px]
                sm:blur-[80px]
                lg:h-[350px]
                lg:w-[350px]
                lg:blur-[100px]
              "
            />

            {/* Foto */}
            <img
              src="/images/foto.png"
              alt="Profissional da TuringDev"
              className="
                relative
                z-10
                block
                h-auto
                w-[190px]
                max-w-none
                object-contain
                drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)]
                sm:w-[295px]
                lg:w-[425px]
                xl:w-[475px]
              "
            />
          </div>

          {/* =================================================
              INFORMAÇÕES
          ================================================== */}
          <div
            className="
              mt-2
              flex
              w-full
              items-center
              justify-center
              gap-6
              sm:mt-3
              sm:gap-9
              lg:mt-4
              lg:gap-10
            "
          >
            {/* Projetos */}
            <div className="flex flex-col items-center text-center">
              <div
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                +20
              </div>

              <div
                className="
                  mt-1
                  whitespace-nowrap
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-wider
                  text-slate-500
                  sm:text-[10px]
                  lg:text-xs
                "
              >
                projetos criados
              </div>
            </div>

            {/* Divisor */}
            <div
              className="
                h-8
                w-px
                shrink-0
                bg-gradient-to-b
                from-transparent
                via-white/15
                to-transparent
                sm:h-10
                lg:h-12
              "
            />

            {/* Possibilidades */}
            <div className="flex flex-col items-center text-center">
              <div
                className="
                  text-xl
                  font-bold
                  tracking-tight
                  text-sky-400
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                ∞
              </div>

              <div
                className="
                  mt-1
                  whitespace-nowrap
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-wider
                  text-slate-500
                  sm:text-[10px]
                  lg:text-xs
                "
              >
                possibilidades
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TEXTO
        ====================================================== */}
        <div
          className="
            order-2
            flex
            w-full
            flex-col
            items-center
            text-center
            lg:order-1
            lg:items-start
            lg:text-left
          "
        >
          {/* Etiqueta */}
          <div
            className="
              mb-2
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-sky-400/20
              bg-sky-400/[0.06]
              px-3
              py-1.5
              text-[8px]
              font-medium
              text-sky-400
              sm:mb-4
              sm:gap-2
              sm:px-4
              sm:py-2
              sm:text-xs
              lg:text-sm
            "
          >
            <CircleStar
              size={12}
              strokeWidth={2}
              className="text-sky-400 sm:h-4 sm:w-4"
            />

            Soluções Digitais Premium
          </div>

          {/* Título */}
          <h1
            className="
              w-full
              max-w-[94vw]
              text-[clamp(1.5rem,6.8vw,2.05rem)]
              font-bold
              leading-[1.04]
              tracking-tight
              text-white
              [text-shadow:0_2px_6px_rgba(0,0,0,0.75)]
              sm:max-w-2xl
              sm:text-5xl
              sm:leading-[1]
              lg:text-6xl
              xl:text-7xl
            "
          >
            Desenvolvimento de{" "}
            <span className="text-sky-400">soluções digitais</span> para o seu
            negócio.
          </h1>

          {/* Descrição */}
          <p
            className="
              mt-2
              w-full
              max-w-[94vw]
              text-[clamp(0.63rem,2.7vw,0.78rem)]
              leading-[1.45]
              text-slate-400
              sm:mt-4
              sm:max-w-xl
              sm:text-base
              sm:leading-7
              lg:text-lg
            "
          >
            Criamos sites profissionais, sistemas web e aplicações
            personalizadas, com tecnologia moderna, design responsivo e foco em
            performance para empresas que querem crescer no digital.
          </p>

          {/* =================================================
              BOTÕES
          ================================================== */}
          <div
            className="
              mt-3
              flex
              w-full
              max-w-[94vw]
              flex-col
              gap-2
              sm:mt-6
              sm:flex-row
              sm:gap-3
              lg:max-w-none
            "
          >
            {/* Orçamento */}
            <a
              href="#contato"
              className="
                group
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-sky-400
                px-5
                text-xs
                font-semibold
                text-slate-950
                transition-all
                duration-200
                hover:bg-sky-300
                hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]
                sm:h-12
                sm:w-auto
                sm:px-6
                sm:text-sm
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

            {/* Projetos */}
            <a
              href="#projetos"
              className="
                flex
                h-12
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-5
                text-xs
                font-medium
                text-white
                transition-all
                duration-200
                hover:border-white/20
                hover:bg-white/[0.07]
                sm:h-12
                sm:w-auto
                sm:px-6
                sm:text-sm
              "
            >
              Ver projetos
            </a>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
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