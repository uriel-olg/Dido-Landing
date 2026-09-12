
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../animations/animations";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { categorias } from "../componentes/productos";
import { getProducto } from "../sanity/productos";
import { urlFor } from "../sanity/imageUrl";

import type { Producto } from "../types/ProductoType";
import CardProduct from "../componentes/CardProduct";

const pasosPedido = [
  {
    paso: "1",
    texto: "Escribinos por WhatsApp",
    img: "whatsapp.png",
  },
  {
    paso: "2",
    texto: "Contanos qué querés pedir",
    img: "notas.png",
  },
  {
    paso: "3",
    texto: "Confirmamos tiempo y detalles",
    img: "tiempo-rapido.png",
  },
  {
    paso: "4",
    texto: "Retirá o recibilo en tu casa",
    img: "caja.png",
  },
];

export const Home = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const data = await getProducto();
      setProductos(data);
    };

    obtenerProductos();
  }, []);

  const destacados = productos.filter((p) => p.destacados === true);

  return (
    <>
      {/* =====================
          HERO
      ====================== */}
      <section className="relative min-h-[500px] overflow-hidden md:min-h-[450px]">

        {/* Imagen de fondo */}
        <motion.div
          className="absolute inset-0 bg-cover bg-no-repeat md:bg-[100%_center]"
          style={{
            backgroundImage: 'url("/fondo-incio.png")',
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

        {/* Contenido */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-20 mx-auto flex min-h-[500px] w-11/12 max-w-6xl flex-col items-center justify-center py-16 md:min-h-[450px] md:items-start"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.2em] text-celeste md:text-sm"
          >
            Hecho a mano, cada día
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-lg font-serif text-2xl uppercase leading-tight text-carbon md:text-4xl"
          >
            <span className="italic">
              Dulzura en cada detalle
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-sm leading-7 text-gray-blue md:text-base"
          >
            Tortas, panadería y bocaditos artesanales
            <br />
            hechos con ingredientes seleccionados.
          </motion.p>

          <motion.div
            variants={fadeUp}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <NavLink
              to="/productos"
              className="mt-6 block w-fit rounded-full bg-celeste px-6 py-3 text-sm text-white transition-colors duration-200 hover:bg-celeste-hover md:text-base"
            >
              Ver el menú →
            </NavLink>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================
          CATEGORÍAS
      ====================== */}
      <section className="flex flex-col items-center py-10">

        <motion.h2
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
          className="text-lg text-celeste md:text-2xl"
        >
          Categorías
        </motion.h2>

        <ul className="scrollbar-hide flex w-full snap-x snap-mandatory gap-5 overflow-x-auto px-6 py-6 md:justify-center md:gap-15 md:overflow-visible">

          {categorias.map((cat, index) => (
            <motion.li
              key={cat.slug}
              initial={{
                opacity: 0,
                y: 20,
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
              className="min-w-[120px] shrink-0 snap-center text-center font-serif text-carbon"
            >
              <NavLink
                to={`/productos/${cat.slug}`}
                className="group flex flex-col items-center"
              >
                <div className="flex size-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-xl">

                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="size-8 object-contain"
                  />

                </div>

                <p className="py-5 font-sans text-lg transition-colors duration-200 group-hover:text-celeste">
                  {cat.label}
                </p>
              </NavLink>
            </motion.li>
          ))}

        </ul>
      </section>

      {/* =====================
          DESTACADOS
      ====================== */}
      <section className="flex w-full flex-col items-center bg-celeste-light px-4 py-10">

        <motion.h2
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
          className="border-b border-celeste-light pb-2 text-lg text-celeste md:text-2xl"
        >
          Destacados
        </motion.h2>

        <div className="mt-8 flex w-full max-w-5xl snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:grid md:max-w-6xl md:grid-cols-4 md:gap-15 md:overflow-visible">

          {destacados.map((producto, index) => (

            <CardProduct producto={producto}></CardProduct>
            
          ))}

        </div>

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
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="mt-10"
        >
          <NavLink
            to="/productos"
            className="block rounded-full border border-celeste  px-20 py-2 font-sans text-celeste transition-colors duration-200 hover:bg-celeste-hover hover:text-white"
          >
            Ver todo el menú →
          </NavLink>
        </motion.div>

      </section>

      {/* =====================
          CÓMO PEDIR
      ====================== */}
      <section className="bg-white p-6 md:p-10">

        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row">

          {/* PASOS */}
          <div className="w-full py-10 md:py-20">

            {/* Título */}
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
                amount: 0.1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mb-14 text-center"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-celeste">
                Pedidos fáciles
              </span>

              <h2 className="mt-2 font-serif text-3xl text-carbon md:text-4xl">
                ¿Cómo pedir?
              </h2>

              <p className="mx-auto mt-3 max-w-xl font-sans text-sm text-carbon/70 md:text-base">
                Hacé tu pedido de manera rápida y sencilla. Nosotros nos
                encargamos de preparar algo delicioso para vos.
              </p>
            </motion.div>

            {/* Lista de pasos */}
            <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">

              {/* Línea desktop */}
              <div className="absolute top-[30px] right-[12%] left-[12%] hidden h-px bg-celeste/30 md:block" />

              {pasosPedido.map((item, index) => (
                <motion.div
                  key={item.paso}

                  initial={{
                    opacity: 0,
                    y: 20,
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
                    delay: index * 0.1,
                  }}

                  className="group relative flex flex-col items-center text-center"
                >

                  {/* Número */}
                  <div className="relative z-10 flex size-14 items-center justify-center rounded-full border-2 border-celeste bg-white shadow-sm transition-all duration-300 group-hover:bg-celeste">

                    <span className="text-lg font-semibold text-celeste transition-colors duration-300 group-hover:text-white">
                      {item.paso}
                    </span>

                  </div>

                  {/* Icono */}
                  <div className="mt-6 flex size-20 items-center justify-center rounded-2xl bg-celeste/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-celeste/15">

                    <img
                      src={`/${item.img}`}
                      alt=""
                      className="size-10 object-contain"
                    />

                  </div>

                  {/* Texto */}
                  <p className="mt-5 max-w-[12rem] text-sm font-semibold leading-snug text-carbon md:text-base">
                    {item.texto}
                  </p>

                </motion.div>
              ))}

            </div>

            {/* CTA */}
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
              className="mt-14 flex justify-center"
            >
              <motion.a
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="https://wa.me/542625591849?text=Hola,%20quiero%20hacer%20un%20pedido"
                className="inline-flex items-center gap-2 rounded-full bg-celeste px-6 py-3 text-sm font-semibold text-white shadow-md shadow-celeste/20 transition-colors duration-300 hover:bg-celeste-hover"
              >
                Hacer mi pedido

                <img
                  src="/whatsapp-2.png"
                  alt="WhatsApp"
                  className="size-5"
                />
              </motion.a>
            </motion.div>

          </div>

          {/* =====================
              BANNER
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
            className="min-h-[162px] w-full max-w-sm rounded-3xl bg-[length:140%_auto] bg-no-repeat px-10 py-5 md:min-h-[300px] md:py-15"
            style={{
              backgroundImage: 'url("/cupcake-fondo.png")',
            }}
          >
            <p className="text-start text-lg text-carbon">
              Pedidos con 24hs
              <br />
              de anticipación
            </p>

            <p className="mt-5 text-start font-sans text-xs text-gray-blue">
              Gracias por elegir
              <br />
              lo hecho con amor
            </p>

            <img
              src="/corazon.png"
              alt=""
              className="mt-4 size-5"
            />
          </motion.div>

        </div>
      </section>
    </>
  );
};

