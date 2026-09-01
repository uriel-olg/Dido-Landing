import { NavLink } from "react-router-dom";
import { categorias } from "../componentes/productos";
import { getProducto } from "../sanity/productos";
import type { Producto } from "../types/ProductoType";
import { useState,useEffect } from "react";
import { urlFor } from "../sanity/imageUrl";
export const Home = () => {

  const [producto, setProductos] = useState<Producto[]>([]);
  
    useEffect(() => {
      const obtenerP = async () => {
        const producto = await getProducto();
        console.log(producto);
        setProductos(producto);
      };
  
      obtenerP();
    }, []);

  return (
    <>
      <section
        className=" bg-cover bg-no-repeat  md:bg-[100%_center] min-h-[500px] md:min-h-[450px] "
        style={{ backgroundImage: `url("/fondo-incio.png")` }}
      >
        <div
          className=" relative z-20
            w-11/12
            max-w-6xl
            mx-auto
            py-16
            md:py-16
            flex
            flex-col
            justify-center
            items-center
            md:items-start
            min-h-[500px]
            md:min-h-[450px]"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-celeste">
            hecho a mano,cada dia
          </span>

          <h1
            className="mt-4
        max-w-lg
       
        sm:text-2xl
        md:text-4xl
        font-serif
        text-carbon
        leading-tight
        uppercase"
          >
            <span className="italic">Dulzura en cada detalle</span>
          </h1>

          <p
            className=" mt-6
        max-w-md
        text-gray-blue
        leading-7
        text-sm
        md:text-base"
          >
            Tortas, panadería y bocaditos artesanales
            <br />
            hechos con ingredientes seleccionados.
          </p>

          <a
            href="/productos?"
            className="mt-6
              w-fit
              rounded-full
              bg-celeste
              px-6
              py-3
              text-white
              text-sm
              md:text-base
              hover:opacity-90
              transition"
          >
            Ver el menú →
          </a>
        </div>
      </section>

      {/* seccion categorias */}
      <section className="flex flex-col items-center pt-10 pb-10">
        <h2 className="text-celeste text-lg md:text-2xl">Categorías</h2>

        <ul
          className="
      flex w-full gap-5
      overflow-x-auto
      px-6 py-6
      snap-x snap-mandatory
      scrollbar-hide

      md:justify-center
      md:gap-15
      md:overflow-visible
    "
        >
          {categorias.map((cat) => (
            <li
              key={cat.label}
              className="
          min-w-[120px]
          flex-shrink-0
          snap-center
          font-serif
          text-carbon
          text-center
        "
            >
              <NavLink
                to={`/productos/${cat.slug}`}
                className="group flex flex-col items-center"
              >
                <div
                  className="
              size-20
              flex items-center justify-center
              rounded-full
              bg-white
              shadow-lg shadow-black/10
              transition-all duration-200
              group-hover:scale-105
              group-hover:shadow-xl
            "
                >
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="size-8 object-contain"
                  />
                </div>

                <p
                  className="
              py-5
              font-sans text-lg
              transition-colors
              group-hover:text-celeste
            "
                >
                  {cat.label}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>

      {/*seccion destacados  */}
      <section className="flex flex-col items-center py-10 px-4 w-full bg-celeste-light">
        <h2 className="pb-2 border-b border-celeste-light text-celeste text-lg md:text-2xl">
          Destacados
        </h2>

        <div className="flex flex-1  overflow-x-auto snap-x snap-mandatory gap-4 md:gap-15 md:w-full md:grid md:grid-cols-4  md:overflow-visible mt-8 pb-4 w-full max-w-5xl md:max-w-6xl">
          {producto.filter(p => p.destacados === true)
          .map((item) => (
            <div
              key={item._id}
              className="snap-center shrink-0 w-64 md:w-auto bg-white rounded-xl shadow-lg shadow-black/10 hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col"
            >
              <img
                src={urlFor(item.imagen).url()}
                alt={item.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col items-center text-center font-serif text-carbon">
                <h3 className="text-lg font-sans">{item.nombre}</h3>
                <p className="mt-1 text-celeste">{item.precio}</p>
                <br />
                <a
                  href={`https://wa.me/542625591849?text=Hola, quiero hacer un pedido de: ${item.nombre}`}
                  className="rounded-3xl bg-white border border-celeste-hover px-13 py-1 text-carbon hover:bg-celeste-hover hover:cursor-pointer hover:text-celeste-light font-sans"
                >
                  Pedir
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 px-20 py-2 rounded-full border border-celeste bg-celeste  hover:bg-celeste-hover text-white transition-colors duration-200 hover:cursor-pointer font-sans">
          Ver todo el menú →
        </button>
      </section>

      {/* Como pedir ? */}
      <section className="flex flex-col items-center p-10  bg-white">
        <div className="gap-10 md:flex md:flex-row justify-around items-center w-full">
          {/* div 1 */}
          <div className="flex flex-col md:flex-col-2 items-center w-full max-w-5xl">
            <br />
            <br />
            <div className="w-full bg-white px-6 py-16 md:px-10 md:py-20">
              {/* Título */}
              <div className="text-center mb-14">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-celeste">
                  Pedidos fáciles
                </span>

                <h2 className="mt-2 text-3xl md:text-4xl font-serif text-carbon">
                  ¿Cómo pedir?
                </h2>

                <p className="mt-3 mx-auto max-w-xl text-sm md:text-base text-carbon/70 font-sans">
                  Hacé tu pedido de manera rápida y sencilla. Nosotros nos
                  encargamos de preparar algo delicioso para vos.
                </p>
              </div>

              {/* Pasos */}
              <div className="relative mx-auto max-w-6xl">
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
                  {/* Línea conectora - Desktop */}
                  <div className="hidden md:block absolute top-[30px] left-[12%] right-[12%] h-px bg-celeste/30" />

                  {[
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
                  ].map((item) => (
                    <div
                      key={item.paso}
                      className="group relative flex flex-col items-center text-center"
                    >
                      {/* Número */}
                      <div className="relative z-10 flex size-14 items-center justify-center rounded-full bg-white border-2 border-celeste shadow-sm transition-all duration-300 group-hover:bg-celeste group-hover:text-white">
                        <span className="text-lg font-semibold text-celeste group-hover:text-white">
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
                      <p className="mt-5 max-w-[12rem] text-sm md:text-base font-semibold leading-snug text-carbon">
                        {item.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-14 flex justify-center">
                <a
                  href="https://wa.me/542625591849?text=Hola,%20quiero%20hacer%20un%20pedido"
                  className="inline-flex items-center gap-2 rounded-full bg-celeste px-6 py-3 text-sm font-semibold text-white shadow-md shadow-celeste/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-celeste-hover hover:shadow-lg"
                >
                  Hacer mi pedido
                  <img src="whatsapp-2.png" alt="" className="size-5" />
                </a>
              </div>
            </div>
          </div>
          <br />
          {/* div 2 */}
          <div
            className="
    min-h-[162px]
    md:min-h-[300px]
    w-full max-w-sm

    bg-no-repeat

    bg-[length:140%_auto]
    md:bg-[length:140%_auto]

    bg-[10%_rigth]
    md:bg-rigth

    rounded-3xl

    px-10
    py-5
    md:py-15
  "
            style={{
              backgroundImage: `url("cupcake-fondo.png")`,
            }}
          >
            <p className="text-lg text-carbon text-start">
              Pedidos con 24hs
              <br />
              de anticipación
            </p>
            <br />
            <p className="text-xs text-start font-sans text-gray-blue">
              Gracias por elegir
              <br />
              lo hecho con amor
              <br />
              <br />
              <img src="corazon.png" alt="" className="size-5" />
            </p>
          </div>
        </div>
      </section>
      <section> </section>
      <section></section>
    </>
  );
};
