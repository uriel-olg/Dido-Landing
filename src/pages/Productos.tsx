import { NavLink, useParams } from "react-router-dom";
import { categorias, Productos } from "../componentes/productos";

import CardProduct from "../componentes/cardProduct";

export const PagProductos = () => {
  const { categoria } = useParams();

  const productosFiltrados =
    !categoria || categoria === "todos"
      ? Productos
      : Productos.filter((producto) => producto.categoria === categoria);

  return (
    <>
      {/* background image */}
      <section
        className="flex flex-col justify-center min-h-[162.2px] bg-cover bg-no-repeat bg-[95%] md:bg-[100%_center] md:min-h-[400px] "
        style={{ backgroundImage: `url(${"fondo-2.png"})` }}
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
      <section className="h-40 w-full flex m-auto">
        <ul className="flex w-full gap-15 items-center justify-center">
          {categorias.map((p) => {
            return (
              <li key={p}>
                <NavLink
                  to={`/Productos/${p}`}
                  className={({ isActive }) =>
                    `flex flex-row rounded-full py-2.5 px-5 ${
                      isActive ? "bg-celeste-hover text-white" : "text-celeste-hover border-1 border-celeste-hover hover:bg-celeste hover:text-white"
                    }`
                  }
                >
                  {p}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </section>

      {/* productos*/}
      <section className="h-min ">
        <ul className="flex flex-wrap justify-center p-20 gap-10 items-center">
          {productosFiltrados.map((p) => {
            return (
              <li key={p.id} className="">
                <CardProduct producto={p}></CardProduct>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
