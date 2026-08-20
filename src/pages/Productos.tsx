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
              <img src="corazon.png" alt="" className="size-5" />
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
      <section className="h-50 w-full flex m-auto">
        <ul className="flex w-full items-center justify-around">
          {categorias.map((p) => {
            return (
              <li
                key={p.slug}
                className="font-serif text-carbon text-center flex flex-row"
              >
                <NavLink
                  to={`/productos/${p.slug}`}
                  className={({ isActive }) =>
                    `group flex flex-row items-center ${
                      isActive ? " text-white" : "text-carbon"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div
                        className={`rounded-full py-1 px-6 mx-auto flex flex-row items-center gap-3
                       shadow-lg shadow-black/10 
                        group-hover:shadow-xl group-hover:scale-105 
                        transition-all duration-200
                        ${isActive ? "bg-celeste" : "border border-celeste"}`}
                      >
                        {p.img ? (
                          <img src={p.img} alt={p.label} className="size-5" />
                        ) : (
                          ""
                        )}

                        <p className={`mt-2 mb-1 transition-colors font-sans ${isActive ? "group-hover:text-white text-white" : "text-celeste"}`}>
                          {p.label}
                        </p>
                      </div>
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </section>

      {/* productos*/}
      <section className="h-min w-full py-10">
        <ul className="flex flex-row flex-wrap justify-baseline px-20 gap-10 items-center">
          {productosFiltrados.map((p) => {
            return (
              <li key={p.id} className="flex flex-col w-1/6 rounded-2xl">
                <CardProduct producto={p}></CardProduct>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
