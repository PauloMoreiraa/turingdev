import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
  UserRound,
  XCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface FormularioContato {
  nome: string;
  email: string;
  whatsapp: string;
  assunto: string;
  mensagem: string;
}

export default function Contato() {
  const [formulario, setFormulario] = useState<FormularioContato>({
    nome: "",
    email: "",
    whatsapp: "",
    assunto: "",
    mensagem: "",
  });

  const [status, setStatus] = useState<
    "idle" | "enviando" | "sucesso" | "erro"
  >("idle");

  const whatsappNumber = "5511963949077";

  const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site da TuringDev e gostaria de falar sobre um projeto.",
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("enviando");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formulario.nome,
          email: formulario.email,
          whatsapp: formulario.whatsapp,
          subject: formulario.assunto,
          message: formulario.mensagem,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setFormulario({
        nome: "",
        email: "",
        whatsapp: "",
        assunto: "",
        mensagem: "",
      });

      setStatus("sucesso");
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatus("erro");
    }
  }

  return (
    <section
      id="contato"
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
      {/* Brilho decorativo */}
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
          bg-sky-400/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >
        {/* Cabeçalho */}
        <div className="mb-12 max-w-2xl sm:mb-14">
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-sky-400/20
              bg-sky-400/5
              px-3
              py-1.5
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-sky-400
            "
          >
            <MessageCircle size={14} />
            Entre em contato
          </div>

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Vamos transformar sua <span className="text-sky-400">ideia</span> em
            realidade.
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
            Tem um projeto em mente, uma ideia ou precisa de uma solução
            personalizada? Fale com a TuringDev e vamos entender como podemos
            ajudar.
          </p>
        </div>

        {/* Conteúdo */}
        <div
          className="
            grid
            gap-6
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-8
          "
        >
          {/* Lado esquerdo */}
          <div
            className="
              flex
              flex-col
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              sm:p-8
            "
          >
            <div>
              <div
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-sky-400/20
                  bg-sky-400/10
                  text-sky-400
                "
              >
                <Mail size={22} />
              </div>

              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                "
              >
                Fale com a gente
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-slate-400
                "
              >
                Preencha o formulário ao lado ou, se preferir, fale diretamente
                conosco pelo WhatsApp.
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-8
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.03]
                p-4
                transition
                duration-300
                hover:border-sky-400/30
                hover:bg-sky-400/[0.05]
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-sky-400/10
                    text-sky-400
                  "
                >
                  <FaWhatsapp size={22} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-medium
                      text-slate-500
                    "
                  >
                    WhatsApp
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    +55 11 96394-9077
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="
                  text-slate-500
                  transition
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-sky-400
                "
              />
            </a>

            <div
              className="
                mt-auto
                hidden
                pt-10
                lg:block
              "
            >
              <div
                className="
                  h-px
                  w-full
                  bg-white/[0.06]
                "
              />

              <p
                className="
                  mt-5
                  text-xs
                  leading-5
                  text-slate-500
                "
              >
                Conte-nos sobre seu projeto, objetivo e o que você precisa.
                Quanto mais detalhes, melhor poderemos entender sua necessidade.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              sm:p-8
            "
          >
            <div
              className="
                grid
                gap-5
                sm:grid-cols-2
              "
            >
              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    text-slate-300
                  "
                >
                  Nome
                </label>

                <div className="relative">
                  <UserRound
                    size={17}
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-500
                    "
                  />

                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    value={formulario.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/20
                      pl-11
                      pr-4
                      text-sm
                      text-white
                      outline-none
                      transition
                      placeholder:text-slate-600
                      focus:border-sky-400/40
                      focus:bg-sky-400/[0.02]
                    "
                  />
                </div>
              </div>

              {/* E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    text-slate-300
                  "
                >
                  E-mail
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-500
                    "
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formulario.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/20
                      pl-11
                      pr-4
                      text-sm
                      text-white
                      outline-none
                      transition
                      placeholder:text-slate-600
                      focus:border-sky-400/40
                      focus:bg-sky-400/[0.02]
                    "
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    text-slate-300
                  "
                >
                  WhatsApp
                </label>

                <div className="relative">
                  <FaWhatsapp
                    size={17}
                    className="
                      pointer-events-none
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-slate-500
                    "
                  />

                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    value={formulario.whatsapp}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/20
                      pl-11
                      pr-4
                      text-sm
                      text-white
                      outline-none
                      transition
                      placeholder:text-slate-600
                      focus:border-sky-400/40
                      focus:bg-sky-400/[0.02]
                    "
                  />
                </div>
              </div>

              {/* Assunto */}
              <div>
                <label
                  htmlFor="assunto"
                  className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    text-slate-300
                  "
                >
                  Assunto
                </label>

                <input
                  id="assunto"
                  name="assunto"
                  type="text"
                  required
                  value={formulario.assunto}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar?"
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-black/20
                    px-4
                    text-sm
                    text-white
                    outline-none
                    transition
                    placeholder:text-slate-600
                    focus:border-sky-400/40
                    focus:bg-sky-400/[0.02]
                  "
                />
              </div>
            </div>

            {/* Mensagem */}
            <div className="mt-5">
              <label
                htmlFor="mensagem"
                className="
                  mb-2
                  block
                  text-xs
                  font-semibold
                  text-slate-300
                "
              >
                Mensagem
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                required
                rows={7}
                value={formulario.mensagem}
                onChange={handleChange}
                placeholder="Conte um pouco sobre seu projeto..."
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-black/20
                  px-4
                  py-3.5
                  text-sm
                  leading-6
                  text-white
                  outline-none
                  transition
                  placeholder:text-slate-600
                  focus:border-sky-400/40
                  focus:bg-sky-400/[0.02]
                "
              />
            </div>

            {/* Status */}
            {status === "sucesso" && (
              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-emerald-400/20
                  bg-emerald-400/5
                  px-4
                  py-3
                  text-sm
                  text-emerald-400
                "
                role="status"
              >
                <CheckCircle2 size={18} />

                <span>Mensagem enviada com sucesso!</span>
              </div>
            )}

            {status === "erro" && (
              <div
                className="
                  mt-5
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-red-400/20
                  bg-red-400/5
                  px-4
                  py-3
                  text-sm
                  text-red-400
                "
                role="alert"
              >
                <XCircle size={18} />

                <span>
                  Não foi possível enviar a mensagem. Tente novamente.
                </span>
              </div>
            )}

            {/* Botão */}
            <button
              type="submit"
              disabled={status === "enviando"}
              className="
                mt-5
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-sky-400
                px-5
                text-sm
                font-bold
                text-slate-950
                transition
                duration-300
                hover:bg-sky-300
                disabled:cursor-not-allowed
                disabled:opacity-60
				cursor-pointer
              "
            >
              {status === "enviando" ? (
                <>
                  <span
                    className="
                      h-4
                      w-4
                      animate-spin
                      rounded-full
                      border-2
                      border-slate-950/30
                      border-t-slate-950
                    "
                  />
                  Enviando...
                </>
              ) : (
                <span className="flex items-center gap-2 text-white">
                  Enviar mensagem
                  <Send size={16} />
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
