import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactoSchema,
  type ContactoForm,
} from "../componentes/contactoSchema";

import { fadeUp, staggerContainer } from "../animations/animations";

const campos = [
  {
    name: "usuario",
    type: "text",
    placeholder: "Tu nombre",
    icono: "/usuario.png",
  },
  {
    name: "email",
    type: "email",
    placeholder: "ejemplo@email.com",
    icono: "/sobre.png",
  },
  {
    name: "telefono",
    type: "tel",
    placeholder: "+54 9 260...",
    icono: "/llamada-telefonica.png",
  },
] as const;

const opciones = [
  {
    value: "tortas",
    label: "Tortas",
  },
  {
    value: "eventos",
    label: "Eventos",
  },
  {
    value: "otros",
    label: "Otros",
  },
];

const informacionContacto = [
  {
    titulo: "WhatsApp",
    contenido: "+54 2625 491859",
    descripcion: "Escribinos y te responderemos rápido",
    icono: "/mano-movil.png",
  },
  {
    titulo: "Email",
    contenido: "bydidos@gmail.com",
    descripcion: "Respondemos todas tus consultas.",
    icono: "/sobre.png",
  },
  {
    titulo: "Ubicación",
    contenido: "General Alvear, Mendoza",
    descripcion: "Consultanos por entregas y retiros.",
    icono: "/marcador-de-mapa.png",
  },
  {
    titulo: "Horarios",
    contenido: "Lunes a sábado",
    descripcion: "9:00 a 20:00 hs",
    icono: "/reloj-cinco.png",
  },
];

const inputStyles = `
  w-full
  rounded-xl
  border
  border-celeste/30
  bg-white
  px-4
  py-3
  pl-11
  text-black
  outline-none
  transition-all
  duration-200
  placeholder:text-gray-blue/60
  focus:border-celeste
  focus:ring-4
  focus:ring-celeste/10
`;

export const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactoForm>({
    resolver: zodResolver(contactoSchema),

    defaultValues: {
      usuario: "",
      email: "",
      telefono: "",
      seleccion: undefined,
      mensaje: "",
    },
  });

  const onSubmit = (data: ContactoForm) => {
    console.log(data);
    reset();
  };

  return (
    <>
      {/* =====================
          HERO
      ====================== */}
      <section className="relative min-h-[500px] overflow-hidden md:min-h-[450px]">
        {/* Fondo */}
        <motion.div
          className="absolute inset-0 bg-cover bg-[center_right] md:bg-left"
          style={{
            backgroundImage: "url('/fondo-nosotros.png')",
          }}
          initial={{
            opacity: 0.8,
            scale: 1.03,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 md:bg-transparent" />

        {/* Contenido */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-20 mx-auto flex min-h-[600px] w-11/12 max-w-6xl flex-col items-center justify-center py-10 text-center md:min-h-[450px]"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.2em] text-celeste md:text-sm"
          >
            Estamos para ayudarte
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-lg font-serif text-4xl leading-tight text-carbon sm:text-5xl"
          >
            Hablemos, estamos
            <br />
            <span className="italic text-celeste">para vos</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-sm leading-7 text-gray-blue md:text-base"
          >
            ¿Tenés una consulta, querés hacer un pedido
            <br />
            especial o tenés algún evento en mente?
            <br />
            Escribinos y te responderemos a la brevedad.
          </motion.p>

          <motion.a
            variants={fadeUp}
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="https://wa.me/542625491859"
            className="mt-6 flex w-fit items-center gap-3 rounded-full bg-celeste px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-celeste-hover md:text-base"
          >
            <img src="/whatsapp-2.png" alt="WhatsApp" className="size-5" />
            Escribinos por WhatsApp
          </motion.a>
        </motion.div>
      </section>

      {/* =====================
          FORMULARIO + INFORMACIÓN
      ====================== */}
      <section className="m-auto w-10/12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 py-20 md:flex-row">
          {/* =====================
              FORMULARIO
          ====================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="flex w-full flex-col rounded-3xl bg-white p-5 shadow-xl md:w-1/2"
          >
            <h2 className="font-serif text-3xl text-carbon">
              Envianos tu mensaje
            </h2>

            <p className="mt-2 mb-8 text-gray-blue">
              Completá el formulario y te respondemos pronto.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full h-full flex-col gap-5"
            >
              {/* INPUTS */}
              {campos.map((campo) => (
                <div key={campo.name} className="flex flex-col h-full justify-between gap-2">
                  <div className="relative">
                    <img
                      src={campo.icono}
                      alt=""
                      className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2"
                    />

                    <input
                      type={campo.type}
                      placeholder={campo.placeholder}
                      {...register(campo.name)}
                      className={inputStyles}
                    />
                  </div>

                  {errors[campo.name] && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="text-sm text-red-500"
                    >
                      {errors[campo.name]?.message}
                    </motion.p>
                  )}
                </div>
              ))}

              {/* SELECT */}
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <img
                    src="/menu-hamburguesa.png"
                    alt=""
                    className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2"
                  />

                  <select
                    {...register("seleccion")}
                    className={`${inputStyles} cursor-pointer text-gray-500`}
                  >
                    <option value="">Seleccioná una opción</option>

                    {opciones.map((opcion) => (
                      <option key={opcion.value} value={opcion.value}>
                        {opcion.label}
                      </option>
                    ))}
                  </select>
                </div>

                {errors.seleccion && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="text-sm text-red-500"
                  >
                    {errors.seleccion.message}
                  </motion.p>
                )}
              </div>

              {/* MENSAJE */}
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <img
                    src="/lapiz.png"
                    alt=""
                    className="pointer-events-none absolute top-4 left-4 size-5"
                  />

                  <textarea
                    rows={5}
                    placeholder="Contanos qué necesitás..."
                    {...register("mensaje")}
                    className={`${inputStyles} resize-none`}
                  />
                </div>

                {errors.mensaje && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="text-sm text-red-500"
                  >
                    {errors.mensaje.message}
                  </motion.p>
                )}
              </div>

              {/* BOTÓN */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{
                  scale: 1.02,
                  y: -1,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="flex items-center justify-center gap-5 rounded-full bg-celeste px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-celeste-hover disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}

                <img src="/avion-de-papel.png" alt="" className="size-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* =====================
              INFORMACIÓN
          ====================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="w-full rounded-3xl bg-celeste-light px-6 py-8 md:w-1/2 md:px-10"
          >
            <h2 className="mb-5 font-serif text-3xl text-carbon">
              Información de contacto
            </h2>

            {informacionContacto.map((info, index) => (
              <motion.div
                key={info.titulo}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.05,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  x: 4,
                }}
                className="flex items-center gap-5 border-b border-celeste/50 py-6"
              >
                {/* Icono */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="flex size-20 shrink-0 items-center justify-center rounded-full bg-celeste/10"
                >
                  <img src={info.icono} alt="" className="size-8" />
                </motion.div>

                {/* Texto */}
                <div>
                  <h3 className="font-medium text-celeste-hover">
                    {info.titulo}
                  </h3>

                  <p className="text-carbon">{info.contenido}</p>

                  <p className="text-sm text-gray-blue">{info.descripcion}</p>
                </div>
              </motion.div>
            ))}

            {/* PEDIDOS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.05,
              }}
              transition={{
                duration: 0.4,
                delay: informacionContacto.length * 0.08,
              }}
              whileHover={{
                x: 4,
              }}
              className="flex items-center gap-5 py-6"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className="flex size-20 shrink-0 items-center justify-center rounded-full bg-celeste/10"
              >
                <img
                  src="/historial-de-pedidos.png"
                  alt=""
                  className="size-8"
                />
              </motion.div>

              <div>
                <h3 className="font-medium text-celeste-hover">
                  Pedidos con 24hs
                  <br />
                  de anticipación
                </h3>

                <p className="text-sm text-gray-blue">
                  Para garantizar la mejor calidad.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================
          GOOGLE MAPS
      ====================== */}
      <section className="pb-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.98,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="m-auto h-56 w-9/12 overflow-hidden rounded-3xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.715809015641!2d-67.69974192444045!3d-34.98878257281869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9678176c6f30ef43%3A0x821e5c0e631c28e7!2sDomingo%20Faustino%20Sarmiento%201023%2C%20M5620%20Gral.%20Alvear%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1787794514962!5m2!1ses!2sar"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </motion.div>
      </section>
    </>
  );
};

