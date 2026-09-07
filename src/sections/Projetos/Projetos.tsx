import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Search,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import {
  projetos,
  type Projeto,
  type TamanhoProjeto,
} from "../../data/Projetos";

const PROJECTS_PER_PAGE = 3;

function getCardClasses(
  tamanho: TamanhoProjeto
): string {
  switch (tamanho) {
    case "grande":
      return "md:col-span-2 md:row-span-2";

    case "horizontal":
      return "md:col-span-2";

    case "vertical":
      return "md:row-span-2";

    case "pequeno":
    default:
      return "";
  }
}

export default function Projetos() {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<string>("Todos");

  const [busca, setBusca] = useState<string>("");

  const [visibleProjects, setVisibleProjects] =
    useState<number>(PROJECTS_PER_PAGE);

  const [projetoSelecionado, setProjetoSelecionado] =
    useState<Projeto | null>(null);

  const [fotoSelecionada, setFotoSelecionada] =
    useState<string | null>(null);

  const [filtroAberto, setFiltroAberto] =
    useState<boolean>(false);

  const categorias: string[] = [
    "Todos",
    ...Array.from(
      new Set(
        projetos.map(
          (projeto: Projeto) => projeto.categoria
        )
      )
    ),
  ];

  const projetosFiltrados: Projeto[] =
    projetos.filter((projeto: Projeto) => {
      const correspondeCategoria =
        categoriaSelecionada === "Todos" ||
        projeto.categoria === categoriaSelecionada;

      const termoBusca = busca.toLowerCase().trim();

      const correspondeBusca =
        termoBusca === "" ||
        projeto.titulo
          .toLowerCase()
          .includes(termoBusca) ||
        projeto.miniDescricao
          .toLowerCase()
          .includes(termoBusca) ||
        projeto.descricao
          .toLowerCase()
          .includes(termoBusca) ||
        projeto.categoria
          .toLowerCase()
          .includes(termoBusca);

      return (
        correspondeCategoria &&
        correspondeBusca
      );
    });

  const projetosVisiveis: Projeto[] =
    projetosFiltrados.slice(
      0,
      visibleProjects
    );

  const temMaisProjetos =
    visibleProjects < projetosFiltrados.length;

  const estaExpandido =
    visibleProjects > PROJECTS_PER_PAGE;

  useEffect(() => {
    setVisibleProjects(
      PROJECTS_PER_PAGE
    );
  }, [categoriaSelecionada, busca]);

  useEffect(() => {
    if (projetoSelecionado || fotoSelecionada) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [projetoSelecionado, fotoSelecionada]);

  useEffect(() => {
    if (!projetoSelecionado && !fotoSelecionada) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key !== "Escape") {
        return;
      }

      if (fotoSelecionada) {
        setFotoSelecionada(null);
        return;
      }

      setProjetoSelecionado(null);
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [projetoSelecionado, fotoSelecionada]);

  function handleShowMore() {
    setVisibleProjects((current) =>
      Math.min(
        current + PROJECTS_PER_PAGE,
        projetosFiltrados.length
      )
    );
  }

  function handleShowLess() {
    setVisibleProjects(
      PROJECTS_PER_PAGE
    );

    window.requestAnimationFrame(() => {
      document
        .getElementById("projetos")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  }

  function handleCloseProject() {
    setFotoSelecionada(null);
    setProjetoSelecionado(null);
  }

  return (
    <>
      <section
        id="projetos"
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
        {/* FUNDO */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
          aria-hidden="true"
        >
          <div
            className="
              absolute
              left-[-180px]
              top-[10%]
              h-[400px]
              w-[400px]
              rounded-full
              bg-cyan-400/[0.04]
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              bottom-[-200px]
              right-[-150px]
              h-[450px]
              w-[450px]
              rounded-full
              bg-cyan-500/[0.035]
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
              [background-size:60px_60px]
            "
          />
        </div>

        {/* CONTAINER PRINCIPAL */}
        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
          "
        >
          {/* HEADER */}
          <header
            className="
              mb-8
              flex
              flex-col
              gap-6
              lg:mb-10
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div className="max-w-2xl">
              {/* BADGE */}
              <span
                className="
                  mb-3
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-cyan-400/[0.04]
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-cyan-400
                  sm:text-xs
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-cyan-400
                  "
                />

                Projetos
              </span>

              <h2
                className="
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Projetos que transformam
                <span className="text-cyan-400">
                  {" "}
                  ideias
                </span>{" "}
                em soluções
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/50
                  sm:text-base
                "
              >
                Conheça alguns dos projetos e
                soluções digitais desenvolvidos
                para diferentes necessidades e
                negócios.
              </p>
            </div>

            {/* BUSCA + FILTRO */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-3
                sm:flex-row
                lg:w-auto
                lg:items-center
              "
            >
              <div
                className="
                  relative
                  w-full
                  sm:max-w-xs
                "
              >
                <Search
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-white/30
                  "
                />

                <input
                  type="text"
                  value={busca}
                  onChange={(event) =>
                    setBusca(event.target.value)
                  }
                  placeholder="Buscar projeto..."
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    pl-9
                    pr-3
                    text-sm
                    text-white
                    outline-none
                    backdrop-blur-md
                    transition
                    placeholder:text-white/25
                    focus:border-cyan-400/30
                    focus:bg-white/[0.05]
                  "
                />
              </div>

              <div className="relative w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() =>
                    setFiltroAberto(
                      (current) => !current
                    )
                  }
                  className="
                    flex
                    h-11
                    w-full
                    cursor-pointer
                    items-center
                    justify-between
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-3
                    text-sm
                    text-white/70
                    backdrop-blur-md
                    transition
                    hover:border-cyan-400/30
                    hover:bg-white/[0.05]
                    sm:w-44
                  "
                >
                  <span className="truncate">
                    {categoriaSelecionada}
                  </span>

                  <ChevronDown
                    size={16}
                    className={`
                      shrink-0
                      transition-transform
                      duration-200
                      ${
                        filtroAberto
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                {filtroAberto && (
                  <div
                    className="
                      absolute
                      right-0
                      top-[calc(100%+8px)]
                      z-50
                      w-full
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/10
                      bg-[#070d1a]
                      p-1
                      shadow-2xl
                      sm:w-44
                    "
                  >
                    {categorias.map(
                      (categoria: string) => (
                        <button
                          key={categoria}
                          type="button"
                          onClick={() => {
                            setCategoriaSelecionada(
                              categoria
                            );

                            setFiltroAberto(
                              false
                            );
                          }}
                          className={`
                            flex
                            w-full
                            cursor-pointer
                            items-center
                            rounded-lg
                            px-3
                            py-2.5
                            text-left
                            text-sm
                            transition
                            ${
                              categoriaSelecionada ===
                              categoria
                                ? "bg-cyan-400/[0.08] text-cyan-400"
                                : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                            }
                          `}
                        >
                          {categoria}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* NENHUM RESULTADO */}
          {projetosFiltrados.length === 0 && (
            <div
              className="
                flex
                min-h-[250px]
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                px-6
                text-center
              "
            >
              <div>
                <Search
                  size={28}
                  className="mx-auto mb-3 text-white/20"
                />

                <p className="text-sm text-white/50">
                  Nenhum projeto encontrado.
                </p>

                <p className="mt-1 text-xs text-white/25">
                  Tente outra busca ou categoria.
                </p>
              </div>
            </div>
          )}

          {/* GRID */}
          {projetosFiltrados.length > 0 && (
            <div
              className="
                grid
                grid-flow-dense
                grid-cols-1
                auto-rows-[250px]
                gap-4
                sm:auto-rows-[280px]
                md:grid-cols-4
                md:auto-rows-[230px]
                lg:gap-5
              "
            >
              {projetosVisiveis.map(
                (projeto: Projeto) => {
                  const temAplicacao =
                    projeto.aplicacao === true;

                  const temLink =
                    typeof projeto.link ===
                      "string" &&
                    projeto.link.trim().length > 0;

                  return (
                    <article
                      key={projeto.id}
                      onClick={() =>
                        setProjetoSelecionado(
                          projeto
                        )
                      }
                      className={`
                        group
                        relative
                        cursor-pointer
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        transition-all
                        duration-300
                        hover:border-cyan-400/30
                        hover:bg-white/[0.05]
                        ${getCardClasses(
                          projeto.tamanho
                        )}
                      `}
                    >
                      {/* IMAGEM */}
                      <img
                        src={projeto.imagem}
                        alt={projeto.titulo}
                        className="
                          absolute
                          inset-0
                          z-0
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      {/* GRADIENTE */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          z-10
                          bg-gradient-to-t
                          from-[#030712]
                          via-[#030712]/75
                          to-transparent
                        "
                      />

                      {/* CONTEÚDO */}
                      <div
                        className="
                          absolute
                          inset-0
                          z-20
                          flex
                          flex-col
                          justify-end
                          p-4
                          sm:p-5
                        "
                      >
                        {/* CATEGORIA + ÍCONE */}
                        <div
                          className="
                            mb-2
                            flex
                            items-center
                            justify-between
                            gap-3
                          "
                        >
                          <span
                            className="
                              text-[10px]
                              font-medium
                              uppercase
                              tracking-[0.15em]
                              text-cyan-400
                            "
                          >
                            {projeto.categoria}
                          </span>

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
                              group-hover:border-cyan-400/30
                              group-hover:bg-cyan-400/[0.08]
                              group-hover:text-cyan-400
                            "
                          >
                            <ArrowUpRight
                              size={16}
                            />
                          </span>
                        </div>

                        {/* TÍTULO */}
                        <h3
                          className="
                            text-lg
                            font-semibold
                            text-white
                            sm:text-xl
                          "
                        >
                          {projeto.titulo}
                        </h3>

                        {/* MINI DESCRIÇÃO */}
                        <p
                          className="
                            mt-1.5
                            line-clamp-2
                            text-xs
                            leading-5
                            text-white/50
                            sm:text-sm
                          "
                        >
                          {projeto.miniDescricao}
                        </p>

                        {/* BOTÃO */}
                        {temAplicacao && temLink && (
                          <a
                            href={projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => {
                              event.stopPropagation();
                            }}
                            className="
                              relative
                              z-50
                              mt-3
                              flex
                              w-fit
                              cursor-pointer
                              items-center
                              gap-1.5
                              rounded-lg
                              border
                              border-cyan-400/30
                              bg-cyan-400/10
                              px-3
                              py-2
                              text-[11px]
                              font-semibold
                              text-cyan-400
                              backdrop-blur-md
                              transition-all
                              duration-200
                              hover:border-cyan-400/50
                              hover:bg-cyan-400/20
                              hover:text-cyan-300
                            "
                          >
                            <span>
                              Visitar aplicação
                            </span>

                            <ExternalLink
                              size={13}
                            />
                          </a>
                        )}
                      </div>
                    </article>
                  );
                }
              )}
            </div>
          )}

          {/* BOTÕES VER MAIS / VER MENOS */}
          {projetosFiltrados.length >
            PROJECTS_PER_PAGE && (
            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              {temMaisProjetos && (
                <button
                  type="button"
                  onClick={handleShowMore}
                  className="
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white/70
                    transition
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/[0.06]
                    hover:text-cyan-400
                  "
                >
                  Ver mais

                  <ChevronDown size={16} />
                </button>
              )}

              {estaExpandido && (
                <button
                  type="button"
                  onClick={handleShowLess}
                  className="
                    inline-flex
                    cursor-pointer
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white/70
                    transition
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/[0.06]
                    hover:text-cyan-400
                  "
                >
                  Ver menos

                  <ChevronDown
                    size={16}
                    className="rotate-180"
                  />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* MODAL DO PROJETO */}
      {projetoSelecionado && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/70
            p-3
            backdrop-blur-xl
            sm:p-6
          "
          onClick={handleCloseProject}
        >
          <div
            onClick={(event) =>
              event.stopPropagation()
            }
            className="
              relative
              z-10
              my-auto
              max-h-[94vh]
              w-full
              max-w-4xl
              overflow-y-auto
              rounded-2xl
              border
              border-white/10
              bg-[#070d1a]/95
              shadow-2xl
              backdrop-blur-2xl
              sm:max-h-[90vh]
              sm:rounded-3xl
            "
          >
            {/* FECHAR */}
            <button
              type="button"
              onClick={handleCloseProject}
              aria-label="Fechar"
              className="
                absolute
                right-3
                top-3
                z-30
                flex
                h-9
                w-9
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/30
                text-white/60
                backdrop-blur-md
                transition
                hover:border-cyan-400/30
                hover:bg-cyan-400/[0.08]
                hover:text-cyan-400
                sm:right-5
                sm:top-5
              "
            >
              <X size={18} />
            </button>

            {/* IMAGEM PRINCIPAL */}
            <div
              className="
                relative
                h-[200px]
                w-full
                overflow-hidden
                sm:h-[300px]
                lg:h-[380px]
              "
            >
              <img
                src={
                  projetoSelecionado.imagem
                }
                alt={
                  projetoSelecionado.titulo
                }
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#070d1a]
                  via-[#070d1a]/20
                  to-transparent
                "
              />
            </div>

            {/* CONTEÚDO */}
            <div
              className="
                px-5
                pb-6
                sm:px-7
                sm:pb-8
                lg:px-9
                lg:pb-9
              "
            >
              {/* CATEGORIA */}
              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-cyan-400
                "
              >
                {projetoSelecionado.categoria}
              </span>

              {/* TÍTULO */}
              <h3
                className="
                  mt-2
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                  sm:text-3xl
                "
              >
                {projetoSelecionado.titulo}
              </h3>

              {/* DESCRIÇÃO COMPLETA */}
              <div
                className="
                  mt-5
                  max-w-3xl
                  space-y-4
                "
              >
                {projetoSelecionado.descricao
                  .split("\n\n")
                  .map(
                    (
                      paragrafo: string,
                      index: number
                    ) => (
                      <p
                        key={index}
                        className="
                          text-sm
                          leading-6
                          text-white/55
                          sm:text-base
                        "
                      >
                        {paragrafo}
                      </p>
                    )
                  )}
              </div>

              {/* AVISO DE SISTEMA PRIVADO */}
              {!projetoSelecionado.link && (
                <div
                  className="
                    mt-6
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-red-500/20
                    bg-red-500/[0.06]
                    px-4
                    py-3.5
                  "
                >
                  <div
                    className="
                      mt-0.5
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      bg-red-500
                      shadow-[0_0_10px_rgba(239,68,68,0.5)]
                    "
                  />

                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold
                        text-red-400
                      "
                    >
                      Sistema privado
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        leading-5
                        text-red-400/60
                        sm:text-sm
                      "
                    >
                      Este projeto possui acesso
                      restrito e não está disponível
                      publicamente para visualização.
                    </p>
                  </div>
                </div>
              )}

              {/* FOTOS DO SISTEMA */}
              {projetoSelecionado.fotos &&
                projetoSelecionado.fotos.length > 0 && (
                  <div className="mt-8">
                    <div className="mb-4">
                      <h4
                        className="
                          text-sm
                          font-semibold
                          text-white
                          sm:text-base
                        "
                      >
                        Imagens do projeto
                      </h4>

                      <p
                        className="
                          mt-1
                          text-xs
                          text-white/35
                        "
                      >
                        Clique em uma imagem para
                        visualizar em tamanho maior.
                      </p>
                    </div>

                    <div
                      className="
                        grid
                        grid-cols-2
                        gap-3
                        sm:grid-cols-3
                      "
                    >
                      {projetoSelecionado.fotos.map(
                        (
                          foto: string,
                          index: number
                        ) => (
                          <button
                            key={`${foto}-${index}`}
                            type="button"
                            onClick={() =>
                              setFotoSelecionada(
                                foto
                              )
                            }
                            className="
                              group
                              relative
                              aspect-video
                              cursor-pointer
                              overflow-hidden
                              rounded-xl
                              border
                              border-white/10
                              bg-white/[0.03]
                              text-left
                              transition-all
                              duration-300
                              hover:border-cyan-400/30
                              hover:bg-white/[0.05]
                            "
                          >
                            <img
                              src={foto}
                              alt={`${projetoSelecionado.titulo} - imagem ${
                                index + 1
                              }`}
                              className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-105
                              "
                            />

                            <div
                              className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-black/0
                                transition
                                duration-300
                                group-hover:bg-black/20
                              "
                            />

                            <div
                              className="
                                pointer-events-none
                                absolute
                                bottom-2
                                right-2
                                flex
                                h-7
                                w-7
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/10
                                bg-black/40
                                text-white/70
                                opacity-0
                                backdrop-blur-md
                                transition
                                duration-300
                                group-hover:opacity-100
                              "
                            >
                              <ArrowUpRight
                                size={14}
                              />
                            </div>
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* BOTÃO VISUALIZAR */}
              {projetoSelecionado.link && (
                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                  "
                >
                  <a
                    href={
                      projetoSelecionado.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) =>
                      event.stopPropagation()
                    }
                    className="
                      inline-flex
                      cursor-pointer
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-sky-400
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-black
                      transition-all
                      duration-200
                      hover:bg-sky-300
                      hover:shadow-[0_0_25px_rgba(56,189,248,0.18)]
                    "
                  >
                    Visualizar

                    <ExternalLink
                      size={16}
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL DA FOTO */}
      {fotoSelecionada && (
        <div
          className="
            fixed
            inset-0
            z-[1100]
            flex
            items-center
            justify-center
            bg-black/85
            p-3
            backdrop-blur-xl
            sm:p-6
          "
          onClick={() =>
            setFotoSelecionada(null)
          }
        >
          <button
            type="button"
            onClick={() =>
              setFotoSelecionada(null)
            }
            aria-label="Fechar imagem"
            className="
              absolute
              right-3
              top-3
              z-20
              flex
              h-10
              w-10
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/40
              text-white/70
              backdrop-blur-md
              transition
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.08]
              hover:text-cyan-400
              sm:right-6
              sm:top-6
            "
          >
            <X size={20} />
          </button>

          <div
            className="
              relative
              flex
              max-h-[92vh]
              max-w-7xl
              items-center
              justify-center
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <img
              src={fotoSelecionada}
              alt="Visualização ampliada"
              className="
                max-h-[90vh]
                max-w-full
                rounded-xl
                object-contain
                shadow-2xl
                sm:rounded-2xl
              "
            />
          </div>
        </div>
      )}
    </>
  );
}