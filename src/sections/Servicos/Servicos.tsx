import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Monitor,
  Palette,
  PenTool,
  Rocket,
  Settings,
  Smartphone,
  Waypoints,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import "./Servicos.css";

const servicos = [
  {
    id: "01",
    titulo: "Sites Institucionais",
    categoria: "Desenvolvimento Web",
    descricao:
      "Sites modernos, responsivos e profissionais para empresas fortalecerem sua presença digital.",
    icone: Code2,
  },
  {
    id: "02",
    titulo: "Portfólios",
    categoria: "Presença Digital",
    descricao:
      "Portfólios personalizados para profissionais apresentarem seus trabalhos, projetos e experiências.",
    icone: Smartphone,
  },
  {
    id: "03",
    titulo: "Landing Pages",
    categoria: "Conversão",
    descricao:
      "Páginas estratégicas para divulgar produtos, serviços e campanhas com foco em conversão.",
    icone: Rocket,
  },
  {
    id: "04",
    titulo: "Sistemas Web",
    categoria: "Sistemas Personalizados",
    descricao:
      "Sistemas web personalizados para automatizar processos e otimizar a operação do seu negócio.",
    icone: Waypoints,
  },
  {
    id: "05",
    titulo: "Sistemas Desktop",
    categoria: "Aplicações",
    descricao:
      "Aplicações desktop desenvolvidas sob medida para atender às necessidades específicas da sua empresa.",
    icone: Monitor,
  },
  {
    id: "06",
    titulo: "UI/UX Design",
    categoria: "Design de Interfaces",
    descricao:
      "Interfaces modernas, intuitivas e funcionais para proporcionar uma experiência digital eficiente.",
    icone: Palette,
  },
  {
    id: "07",
    titulo: "Identidade Visual",
    categoria: "Branding",
    descricao:
      "Criação de logos e identidades visuais para construir marcas profissionais, consistentes e marcantes.",
    icone: PenTool,
  },
  {
    id: "08",
    titulo: "Consultoria de TI",
    categoria: "Tecnologia",
    descricao:
      "Orientação tecnológica para transformar ideias, processos e necessidades em soluções digitais.",
    icone: Settings,
  },
];

export default function Servicos() {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const wheelRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragDistance = useRef(0);

  const total = servicos.length;

  const next = () => {
    setActive((current) => (current + 1) % total);
  };

  const previous = () => {
    setActive((current) => (current - 1 + total) % total);
  };

  /*
   * AUTOPLAY
   *
   * O carrossel troca automaticamente a cada 4 segundos.
   *
   * O autoplay é pausado quando:
   * - o mouse está sobre os cards;
   * - o usuário está arrastando.
   */
  useEffect(() => {
    if (isDragging || isHovered) return;

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total, isDragging, isHovered]);

  /*
   * INÍCIO DO ARRASTO
   */
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
    dragDistance.current = 0;

    setIsDragging(true);

    wheelRef.current?.setPointerCapture(event.pointerId);
  };

  /*
   * MOVIMENTO DO ARRASTO
   */
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    dragDistance.current = event.clientX - dragStartX.current;
  };

  /*
   * FINALIZA O ARRASTO
   */
  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const distance = dragDistance.current;

    setIsDragging(false);

    if (wheelRef.current?.hasPointerCapture(event.pointerId)) {
      wheelRef.current.releasePointerCapture(event.pointerId);
    }

    /*
     * Só troca o slide quando o movimento
     * ultrapassar 60px.
     */
    if (Math.abs(distance) > 60) {
      if (distance < 0) {
        next();
      } else {
        previous();
      }
    }

    dragDistance.current = 0;
  };

  /*
   * CANCELAMENTO DO ARRASTO
   */
  const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    dragDistance.current = 0;

    if (wheelRef.current?.hasPointerCapture(event.pointerId)) {
      wheelRef.current.releasePointerCapture(event.pointerId);
    }
  };

  /*
   * POSIÇÃO DOS CARDS
   */
  const getPosition = (index: number) => {
    let position = index - active;

    if (position > total / 2) {
      position -= total;
    }

    if (position < -total / 2) {
      position += total;
    }

    return position;
  };

  return (
    <section
      id="servicos"
      className="servicos"
      aria-labelledby="servicos-titulo"
    >
      <div className="servicos-background" aria-hidden="true">
        <div className="servicos-glow servicos-glow-left" />
        <div className="servicos-glow servicos-glow-right" />
        <div className="servicos-grid" />
      </div>

      <div className="servicos-container">
        <header className="servicos-header">
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
            Nossos Serviços
          </span>

          <h2
            id="servicos-titulo"
            className="
              text-[clamp(30px,4.5vw,52px)]
              font-bold
              leading-[1.1]
              tracking-[-0.045em]
            "
          >
            Soluções <span className="text-cyan-400"> digitais</span> para o seu
            <span className="text-cyan-400"> negócio</span>
          </h2>

          <p
            className="
              text-[14px]
              leading-[1.65]
              max-[700px]:text-[13px]
            "
          >
            Desenvolvimento de sites, sistemas, interfaces e soluções digitais
            para empresas e profissionais.
          </p>
        </header>

        <div
          className={`servicos-wheel-area ${isDragging ? "dragging" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsDragging(false);
          }}
        >
          <button
            type="button"
            className="servicos-control servicos-control-left"
            onClick={previous}
            aria-label="Ver serviço anterior"
          >
            <ArrowLeft size={20} aria-hidden="true" />
          </button>

          <div
            ref={wheelRef}
            className="servicos-wheel"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            {servicos.map((servico, index) => {
              const position = getPosition(index);
              const Icon = servico.icone;

              return (
                <div
                  key={servico.id}
                  className={`servicos-card ${position === 0 ? "active" : ""}`}
                  style={
                    {
                      "--position": position,
                    } as React.CSSProperties
                  }
                  aria-hidden={position !== 0}
                >
                  <div className="servicos-card-glow" />

                  <div className="servicos-card-top">
                    <span
                      className="
                        servicos-number
                        text-[12px]
                        font-bold
                        tracking-[0.2em]
                      "
                    >
                      {servico.id}
                    </span>

                    <div className="servicos-icon">
                      <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="servicos-card-content">
                    <span
                      className="
                        servicos-category
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                      "
                    >
                      {servico.categoria}
                    </span>

                    <h3
                      className="
                        text-[25px]
                        font-semibold
                        leading-[1.2]
                        tracking-[-0.025em]
                        max-[480px]:text-[22px]
                      "
                    >
                      {servico.titulo}
                    </h3>

                    <p
                      className="
                        text-[14px]
                        leading-[1.7]
                        max-[480px]:text-[13px]
                      "
                    >
                      {servico.descricao}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="servicos-control servicos-control-right"
            onClick={next}
            aria-label="Ver próximo serviço"
          >
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>

        <nav
          className="servicos-navigation"
          aria-label="Navegação dos serviços"
        >
          <div className="servicos-dots">
            {servicos.map((servico, index) => (
              <button
                key={servico.id}
                type="button"
                className={
                  index === active ? "servicos-dot active" : "servicos-dot"
                }
                onClick={() => setActive(index)}
                aria-label={`Ver serviço: ${servico.titulo}`}
                aria-current={index === active ? "true" : undefined}
              />
            ))}
          </div>

          <div
            className="
              servicos-counter
              text-[11px]
              font-semibold
              tracking-[0.08em]
            "
            aria-label={`Serviço ${active + 1} de ${total}`}
          >
            <strong
              className="
                text-[inherit]
              "
            >
              {String(active + 1).padStart(2, "0")}
            </strong>

            <span>/</span>

            <span>{String(total).padStart(2, "0")}</span>
          </div>
        </nav>
      </div>
    </section>
  );
}
