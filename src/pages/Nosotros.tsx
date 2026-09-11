
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../animations/animations";

const valores = [
  {
    img: "/corazon-c.png",
    titulo: "Hecho a mano",
    texto: "Elaboramos cada producto artesanalmente, cuidando cada detalle",
  },
  {
    img: "/hoja-c.png",
    titulo: "Ingredientes reales",
    texto: "Usamos ingredientes frescos y de calidad, sin atajos",
  },
  {
    img: "/magdalena-c.png",
    titulo: "Pasión por lo dulce",
    texto: "Nos inspira lo que hacemos y se nota en cada bocado",
  },
  {
    img: "/persona-c.png",
    titulo: "Cercanía",
    texto: "Disfrutamos acompañarte en tus momentos especiales",
  },
];

const inspiraciones = [
  {
    img: "/pastel-de-boda.png",
    texto: (
      <>
        Momentos
        <br />
        especiales
      </>
    ),
  },
  {
    img: "/corazon-c.png",
    texto: (
      <>
        Recetas que
        <br />
        unen
      </>
    ),
  },
  {
    img: "/destellos.png",
    texto: (
      <>
        Pequeños detalles
        <br />
        que importan
      </>
    ),
  },
];

export const Nosotros = () => {
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
            backgroundImage: "url('/hero-nosotros.png')",
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
          className="relative z-20 mx-auto flex min-h-[500px] w-11/12 max-w-6xl flex-col items-center justify-center py-16 text-center md:text-start md:min-h-[450px] md:items-start"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.2em] text-celeste md:text-sm"
          >
            Nuestra historia
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-lg font-serif text-4xl leading-tight text-carbon sm:text-5xl"
          >
            Hecho con amor,
            <br />
            <span className="italic">cada día</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-sm leading-7 text-gray-blue md:text-base"
          >
            En dulcería creemos que los mejores momentos de la vida se disfrutan
            con algo dulce.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-6 w-fit rounded-full bg-celeste px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-celeste-hover md:text-base"
          >
            Conocé más sobre nuestro trabajo →
          </motion.button>
        </motion.div>
      </section>

      {/* =====================
          NUESTROS VALORES
      ====================== */}
      <section className="flex h-full w-full flex-col gap-8 px-5 py-12 md:p-20">

        {/* Título */}
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="m-auto flex w-full items-center justify-center gap-1 md:w-3/12"
        >
          <div className="h-px flex-1 bg-celeste" />

          <h2 className="whitespace-nowrap rounded-full px-2 py-2 text-sm font-semibold text-celeste md:text-lg">
            NUESTROS VALORES
          </h2>

          <div className="h-px flex-1 bg-celeste" />
        </motion.div>

        {/* Cards */}
        <ul className="grid w-full grid-cols-2 gap-10  md:m-auto md:flex md:w-11/12 md:justify-between md:gap-30">

          {valores.map((valor, index) => (
            <motion.li
              key={valor.titulo}

              initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              viewport={{
                once: true,
                amount: 0.05,
              }}

              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}

              whileHover={{
                y: -5,
              }}

              className="m-auto w-full h-full rounded-xl bg-white text-center shadow-lg shadow-black/10 transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-center justify-center px-5 py-10">

                {/* Icono */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="flex size-20 rounded-full bg-celeste-hover/10 md:size-25"
                >
                  <img
                    src={valor.img}
                    alt={valor.titulo}
                    className="m-auto size-10 md:size-13"
                  />
                </motion.div>

                <h3 className="mt-3 font-serif text-l md:text-lg font-semibold text-carbon">
                  {valor.titulo}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-blue md:text-l">
                  {valor.texto}
                </p>
              </div>
            </motion.li>
          ))}

        </ul>
      </section>

      {/* =====================
          DETRÁS DE CADA CREACIÓN
      ====================== */}
      <section className="m-auto mt-5 flex w-11/12 flex-col md:mt-10 md:flex-row md:p-10">

        {/* Texto */}
        <motion.div
          initial={{
            opacity: 0,
            x: -30,
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
          className="flex flex-col items-center justify-center text-center md:w-1/2"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-celeste md:text-sm">
            Detrás de cada creación
          </span>

          <h2 className="mt-3 font-serif text-3xl leading-tight text-carbon md:text-4xl">
            Somos un equipo que
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            ama lo que hace
          </h2>

          {/* Línea decorativa */}
          <div className="mt-5 flex w-full max-w-md items-center gap-1 md:w-3/6">

            <div className="h-px flex-1 bg-celeste-pale" />

            <motion.img
              src="/corazon-c.png"
              alt=""
              className="mx-2 size-5"
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: 0.2,
              }}
            />

            <div className="h-px flex-1 bg-celeste-pale" />

          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-blue md:text-base">
            Didos nació del sueño de compartir dulzura a través de recetas
            caseras que nos recuerdan a lo simple y lo auténtico.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-blue md:text-base">
            Trabajamos cada día para que disfrutes productos frescos, ricos y
            hechos especialmente para vos.
          </p>

          <h3 className="mt-6 max-w-xl font-serif text-xl text-celeste md:text-2xl">
            <span className="italic">
              Gracias por elegir lo hecho con amor.
            </span>
          </h3>

          <img
            src="/corazon-c.png"
            alt=""
            className="mt-6 size-5"
          />
        </motion.div>

        {/* Galería */}
        <motion.div
          initial={{
            opacity: 0,
            x: 30,
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
          className="flex h-[500px] w-full gap-3 p-5 md:w-1/2"
        >

          {/* Imagen grande */}
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.3,
            }}
            className="h-full w-1/2 overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/cocinera.png')",
            }}
          />

          {/* Columna derecha */}
          <div className="flex h-full w-1/2 flex-col gap-3">

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="h-1/2 w-full rounded-2xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/cocinera-2.png')",
              }}
            />

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="h-1/2 w-full rounded-2xl bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/cocinera-3.png')",
              }}
            />

          </div>
        </motion.div>
      </section>

      {/* =====================
          LO QUE NOS INSPIRA
      ====================== */}
      <motion.section
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
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
        className="m-auto mt-10 mb-5 flex h-min w-11/12 flex-col justify-between gap-8 rounded-3xl bg-celeste-light p-6 md:mt-20 md:mb-10 md:flex-row md:gap-0 md:p-0"
      >

        {/* Mariposa */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="m-auto flex size-24 shrink-0 rounded-full bg-celeste/10 md:size-30"
        >
          <img
            src="/mariposa-flor.png"
            alt=""
            className="m-auto size-12 md:size-15"
          />
        </motion.div>

        {/* Texto */}
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
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="flex w-full flex-col items-center gap-3 px-2 py-2 text-center md:w-2/6 md:items-start md:py-5 md:pl-10 md:text-left"
        >
          <h2 className="font-sans text-2xl text-celeste md:text-3xl">
            Lo que nos inspira
          </h2>

          <p className="text-sm leading-6 text-gray-blue md:text-base">
            Los momentos compartidos, las reuniones en familia, los detalles que
            hacen feliz a alguien. Eso es lo que nos motiva a seguir creando.
          </p>
        </motion.div>

        {/* Inspiraciones */}
        <div className="flex w-full flex-row items-center justify-between gap-4 px-2 py-5 md:w-3/6 md:px-10">

          {inspiraciones.map((item, index) => (
            <motion.div
              key={item.img}

              initial={{
                opacity: 0,
                y: 15,
                scale: 0.96,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.4,
                delay: 0.15 + index * 0.1,
              }}

              whileHover={{
                y: -3,
              }}

              className="flex flex-1 flex-col items-center justify-center gap-3"
            >
              <img
                src={item.img}
                alt=""
                className="size-8 md:size-10"
              />

              <p className="text-center text-xs">
                {item.texto}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.section>
    </>
  );
};

