import { NavLink, useParams } from "react-router-dom";
import { categorias, productos } from "../componentes/productos";

import CardProduct from "../componentes/CardProduct";

export const PagProductos = () => {
  const { categoria } = useParams();

  const productosFiltrados =
    !categoria || categoria === "todos"
      ? productos
      : productos.filter((producto) => producto.categoria === categoria);

  return (
    <>
      {/* background image */}
      <section
        className="flex flex-col justify-center min-h-[162.2px] bg-cover bg-no-repeat bg-[95%] md:bg-[100%_center] md:min-h-[400px] "
        style={{ backgroundImage: `url(${"/fondo-2.png"})` }}
      >
        <div className="font-sans w-6/6 rounded-4xl h-80 flex flex-col items-center justify-center text-center">
          <p className="text-celeste">HECHO A MANO, CON AMOR</p>
          <h1 className="font-serif text-carbon text-6xl">Nuestro menú</h1>
          <div className="flex items-center gap-1 w-1/6">
            <div className="h-px bg-gray-400 flex-1"></div>

            <div className="rounded-full px-2 py-2 text-white">
              <img src="/corazon.png" alt="" className="size-5" />
            </div>

            <div className="h-px bg-gray-400 flex-1"></div>
          </div>

          <p className="text-gray-blue">
            Descubri todas nuestras delicias artesanales,hechas
            <p>con ingredientes frescos y seleccionados</p>
          </p>
        </div>
      </section>

      {/* Nav categorias */}
      <section className="w-full py-6">
        <ul
          className="
      flex w-full
      gap-5
      overflow-x-auto
      px-5 py-5
      snap-x snap-mandatory
      scrollbar-hide
      
      md:justify-center
      md:gap-15
      md:overflow-visible
    "
        >
          {categorias.map((p) => (
            <li
              key={p.slug}
              className="
          flex-shrink-0
          snap-center
          font-serif
          text-carbon
          text-center
        "
            >
              <NavLink
                to={`/productos/${p.slug}`}
                className={({ isActive }) =>
                  `group flex items-center ${
                    isActive ? "text-white" : "text-carbon"
                  }`
                }
              >
                {({ isActive }) => (
                  <div
                    className={`
                flex items-center gap-3
                rounded-full
                px-6 py-2
                md:px-7 md:py-3
                shadow-lg shadow-black/10
                transition-all duration-200
                group-hover:scale-105
                group-hover:shadow-xl
                ${isActive ? "bg-celeste" : "border border-celeste"}
              `}
                  >
                    {p.img && (
                      <img
                        src={p.img}
                        alt={p.label}
                        className="size-5 object-contain"
                      />
                    )}

                    <p
                      className={`
                  font-sans
                  transition-colors
                  ${isActive ? "text-white" : "text-celeste"}
                `}
                    >
                      {p.label}
                    </p>
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>

      {/* productos*/}
      <section className="h-min w-12/12 flex justify-between items-center py-10">
        <ul className="flex row-2 overflow-x-auto md:flex-row md:flex-wrap justify-baseline px-20 gap-10 items-center">
          {productosFiltrados.map((p) => {
            return (
              <li
                key={p.id}
                className="flex flex-col w-4/6 md:w-1/6 h-full rounded-2xl"
              >
                <CardProduct producto={p}></CardProduct>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="w-11/12 h-min flex flex-col md:flex-row m-auto rounded-3xl bg-celeste-light justify-between mb-5 gap-10 md:gap-0 mt-10 md:mt-0">
        <div
          className="w-full h-48 md:w-1/6 bg-cover bg-center bg-no-repeat rounded-3xl"
          style={{ backgroundImage: `url("/box.png")` }}
        ></div>

        <div className="w-full md:w-2/6 py-5 pl-10 gap-3 flex flex-col items-start">
          <h2 className="text-carbon font-serif text-3xl">
            ¿Buscas algo especial?
          </h2>
          <p className="text-gray-blue">
            Hacemos tortas personalizadas para cumpleaños,
            <br />
            eventos y ocasiones únicas.
          </p>
          <a
            href=""
            className="bg-celeste py-2 px-3 rounded-3xl flex md:w-4/6 text-center gap-3 justify-center text-celeste-light"
          >
            Consultanos por WhatsApp
            <img src="/whatsapp-2.png" alt="" className="size-5" />
          </a>
        </div>

        <div className="w-full md:w-3/6 px-10 flex flex-row justify-between items-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <img src="/fresa.png" alt="" className="size-5 md:size-10" />
            <p className="text-center text-xs">
              Ingredientes
              <br />
              Seleccionados
            </p>
          </div>

          <div className="flex flex-col items-center gap-5">
            <img src="/manos-corazon.png" alt="" className="size-5 md:size-10" />
            <p className="text-center text-xs">
              Hecho a mano
              <br />
              cada dia
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img src="/magdalena.png" alt="" className="size-5 md:size-10" />
            <p className="text-center text-xs">
              Pedidos con 24hs
              <br />
              anticipación
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
