
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import { getProducto } from "../sanity/productos";
import { categorias } from "../componentes/productos";
import CardProduct from "../componentes/CardProduct";

import { fadeUp, staggerContainer } from "../animations/animations";

import type { Producto } from "../types/ProductoType";

const caracteristicas = [
  {
    img: "/fresa.png",
    texto: (
      <>
        Ingredientes
        <br />
        Seleccionados
      </>
    ),
  },
  {
    img: "/manos-corazon.png",
    texto: (
      <>
        Hecho a mano
        <br />
        cada día
      </>
    ),
  },
  {
    img: "/magdalena.png",
    texto: (
      <>
        Pedidos con 24hs
        <br />
        anticipación
      </>
    ),
  },
];

export const PagProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const { categoria } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      const data = await getProducto();
      setProductos(data);
    };

    obtenerProductos();
  }, []);

  const productosFiltrados =
    !categoria || categoria === "todos"
      ? productos
      : productos.filter((p) => p.categoria === categoria);

  return (
    <>
      {/* =====================
          HERO
      ====================== */}
      <section className="relative min-h-[500px] overflow-hidden md:min-h-[450px]">

        {/* Imagen de fondo */}
        <motion.div
          className="absolute inset-0 bg-cover bg-[center_right] md:bg-left"
          style={{
            backgroundImage: 'url("/hero-inicio.png")',
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

        {/* Overlay blanco */}
        <div className="absolute inset-0 bg-white/80 md:bg-transparent" />

        {/* Contenido */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-20 mx-auto flex min-h-[500px] w-11/12 max-w-6xl flex-col items-center text-center md:items-start justify-center py-10 md:text-start md:min-h-[450px]"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.2em] text-celeste md:text-sm"
          >
            Hecho a mano, con amor
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-lg font-serif text-2xl uppercase leading-tight text-carbon md:text-4xl"
          >
            Nuestro
            <span className="italic"> menú</span>
          </motion.h1>

          {/* Línea decorativa */}
          <motion.div
            variants={fadeUp}
            className="mt-4 flex max-w-xs items-center justify-center gap-2"
          >
            <div className="h-px flex-1 bg-gray-400" />

            <img
              src="/corazon.png"
              alt=""
              className="size-4 object-contain md:size-6"
            />

            <div className="h-px flex-1 bg-gray-400" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-sm leading-7 text-gray-blue md:text-base"
          >
            Descubrí todas nuestras delicias artesanales,
            <br className="hidden md:block" />
            hechas con ingredientes frescos y seleccionados.
          </motion.p>
        </motion.div>
      </section>

      {/* =====================
          CATEGORÍAS
      ====================== */}
      <section className="w-full py-4 md:py-6">
        <ul className="scrollbar-hide flex w-full snap-x snap-mandatory gap-3 overflow-x-auto px-4 py-3 md:justify-center md:gap-15 md:overflow-visible md:px-5 md:py-5">

          {categorias.map((cat, index) => (
            <motion.li
              key={cat.slug}

              initial={{
                opacity: 0,
                y: 15,
                scale: 0.97,
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
                duration: 0.4,
                delay: index * 0.07,
              }}

              className="shrink-0 snap-center text-center font-serif text-carbon"
            >
              <NavLink
                to={`/productos/${cat.slug}`}
                className="group flex items-center"
              >
                {({ isActive }) => (
                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className={`
                      flex items-center gap-2 whitespace-nowrap
                      rounded-full px-4 py-2
                      shadow-lg shadow-black/10
                      transition-colors duration-200
                      md:gap-3 md:px-7 md:py-3
                      ${
                        isActive
                          ? "bg-celeste/70"
                          : "border border-celeste"
                      }
                    `}
                  >
                    {cat.img && (
                      <img
                        src={cat.img}
                        alt={cat.label}
                        className="size-4 object-contain md:size-5"
                      />
                    )}

                    <span
                      className={`font-sans text-xs transition-colors duration-200 md:text-base ${
                        isActive
                          ? "text-white"
                          : "text-celeste"
                      }`}
                    >
                      {cat.label}
                    </span>
                  </motion.div>
                )}
              </NavLink>
            </motion.li>
          ))}

        </ul>
      </section>

      {/* =====================
          PRODUCTOS
      ====================== */}
      <section className="flex w-full items-center justify-center py-6 md:py-10">

        <ul className="grid w-full grid-cols-2 items-stretch justify-center gap-4 px-4 md:flex md:flex-row md:flex-wrap md:gap-10 md:px-20">

          <AnimatePresence mode="popLayout">
            {productosFiltrados.map((producto, index) => (
              <motion.li
                layout
                key={producto._id}

                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.97,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}

                exit={{
                  opacity: 0,
                  scale: 0.97,
                }}

                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}

                whileHover={{
                  y: -5,
                }}

                className="flex h-full w-full flex-col rounded-2xl md:w-1/6"
              >
                <CardProduct producto={producto} />
              </motion.li>
            ))}
          </AnimatePresence>

        </ul>
      </section>

      {/* =====================
          TORTAS PERSONALIZADAS
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

        className="m-auto mt-8 mb-5 flex h-min w-11/12 flex-col justify-between gap-5 overflow-hidden rounded-3xl bg-celeste-light md:mt-0 md:flex-row md:gap-0"
      >

        {/* Imagen */}
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
          }}

          transition={{
            duration: 0.6,
          }}

          className="h-56 w-full bg-cover bg-center bg-no-repeat md:h-auto md:w-3/12"
          style={{
            backgroundImage: 'url("/box.png")',
          }}
        />

        {/* Información */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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

          className="flex w-full flex-col items-start gap-3 px-5 py-5 md:w-3/6 md:pr-5 md:pl-10"
        >
          <h2 className="font-serif text-2xl text-carbon md:text-3xl">
            ¿Buscas algo especial?
          </h2>

          <p className="text-sm leading-relaxed text-gray-blue md:text-base">
            Hacemos tortas personalizadas para cumpleaños,
            <br className="hidden md:block" />
            eventos y ocasiones únicas.
          </p>

          <motion.a
            whileHover={{
              scale: 1.03,
            }}

            whileTap={{
              scale: 0.97,
            }}

            href=""
            className="flex w-full items-center justify-center gap-2 rounded-3xl bg-celeste px-4 py-2 text-center text-sm text-celeste-light transition-colors duration-200 hover:bg-celeste-hover md:w-4/6 md:text-base"
          >
            Consultanos por WhatsApp

            <img
              src="/whatsapp-2.png"
              alt="WhatsApp"
              className="size-5"
            />
          </motion.a>
        </motion.div>

        {/* Características */}
        <div className="m-auto flex w-full flex-row items-start justify-between gap-1 p-5 md:w-3/6 md:items-center">

          {caracteristicas.map((item, index) => (
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

              className="flex flex-1 flex-col items-center justify-center gap-2 md:gap-5"
            >
              <img
                src={item.img}
                alt=""
                className="size-7 md:size-10"
              />

              <p className="text-center text-[10px] leading-tight md:text-xs">
                {item.texto}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.section>
    </>
  );
};
