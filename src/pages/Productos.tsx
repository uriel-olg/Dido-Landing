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
      {/* =========================
          HERO
      ========================== */}
      <section
  className="
    relative
    min-h-[500px]
    md:min-h-[450px]
    overflow-hidden
  "
>
  {/* Imagen de fondo */}
  <div
    className="
      absolute inset-0
      bg-cover
      bg-[center_right]
      md:bg-left
    "
    style={{
      backgroundImage: `url(${'/hero-inicio.png'})`,
    }}
  />

  {/* Capa blanca */}
  <div
    className="
      absolute inset-0
      bg-white/80
      md:bg-transparent
      md:from-white/95
      md:via-white/80
      md:to-transparent
    "
  />

  {/* Contenido */}
  <div
    className="
      relative z-20
      w-11/12
      max-w-6xl
      mx-auto
      py-10
      flex
      flex-col
      justify-center
      items-start
      text-start
    
      min-h-[500px]
      md:min-h-[450px]
    "
  >
    <span
      className="
        text-celeste
        uppercase
        tracking-[0.2em]
        text-xs
        md:text-sm
      "
    >
      Hecho a mano, con amor
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
      Nuestro
       
      <span className="italic"> menú</span>
    </h1>

    {/* Línea decorativa */}
    <div
      className="
        flex
        items-center
        justify-center
        gap-2
        mt-4
        max-w-xs
      "
    >
      <div className="h-1px bg-gray-400 flex-1" />

      <img
        src="/corazon.png"
        alt=""
        className="size-4 md:size-6 object-contain"
      />

      <div className="h-1px bg-gray-400 flex-1" />
    </div>

    <p
      className="w-6/6 flex-wrap mt-6
        max-w-md
        text-gray-blue
        leading-7
        text-sm
        md:text-base"
          
    >
      Descubrí todas nuestras delicias artesanales,
      <br className="hidden md:block" />
      hechas con ingredientes frescos y seleccionados.
    </p>
  </div>
</section>

      {/* =========================
          NAV CATEGORIAS
      ========================== */}
      <section className="w-full py-4 md:py-6">
        <ul
          className="
            flex
            w-full
            gap-3
            md:gap-15
            overflow-x-auto
            px-4
            md:px-5
            py-3
            md:py-5
            snap-x
            snap-mandatory
            scrollbar-hide
            md:justify-center
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
                      flex
                      items-center
                      gap-2
                      md:gap-3
                      rounded-full
                      px-4
                      py-2
                      md:px-7
                      md:py-3
                      shadow-lg
                      shadow-black/10
                      transition-all
                      duration-200
                      group-hover:scale-105
                      group-hover:shadow-xl
                      whitespace-nowrap
                      ${
                        isActive
                          ? "bg-celeste/70"
                          : "border border-celeste"
                      }
                    `}
                  >
                    {p.img && (
                      <img
                        src={p.img}
                        alt={p.label}
                        className="size-4 md:size-5 object-contain"
                      />
                    )}

                    <p
                      className={`
                        font-sans
                        text-xs
                        md:text-base
                        transition-colors
                        ${
                          isActive
                            ? "text-white"
                            : "text-celeste"
                        }
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

      {/* =========================
          PRODUCTOS
      ========================== */}
      <section
        className="
          w-full
          flex
          justify-center
          items-center
          py-6
          md:py-10
        "
      >
        <ul
          className="
            w-full
            grid
            grid-cols-2
            md:flex
            md:flex-row
            md:flex-wrap
            justify-center
            px-4
            md:px-20
            gap-4
            md:gap-10
            items-stretch
          "
        >
          {productosFiltrados.map((p) => {
            return (
              <li
                key={p.id}
                className="
                  flex
                  flex-col
                  w-full
                  md:w-1/6
                  h-full
                  rounded-2xl
                "
              >
                <CardProduct producto={p} />
              </li>
            );
          })}
        </ul>
      </section>

      {/* =========================
          BANNER TORTAS PERSONALIZADAS
      ========================== */}
      <section
        className="
          w-11/12
          h-min
          flex
          flex-col
          md:flex-row
          m-auto
          rounded-3xl
          bg-celeste-light
          justify-between
        
          mb-5
          gap-5
          md:gap-0
          mt-8
          md:mt-0
          overflow-hidden
        "
      >
        {/* Imagen */}
        <div
          className="
            w-full
            h-56
            md:h-auto
            md:w-3/12
            bg-cover
            bg-center
            bg-no-repeat
            rounded-3xl
          "
          style={{
            backgroundImage: `url("/box.png")`,
          }}
        ></div>

        {/* Información */}
        <div
          className="
            w-full
            md:w-3/6
            py-5
            px-5
            md:pl-10
            md:pr-5
            gap-3
            flex
            flex-col
            items-start
          "
        >
          <h2 className="text-carbon font-serif text-2xl md:text-3xl">
            ¿Buscas algo especial?
          </h2>

          <p className="text-gray-blue text-sm md:text-base leading-relaxed">
            Hacemos tortas personalizadas para cumpleaños,
            <br className="hidden md:block" />
            eventos y ocasiones únicas.
          </p>

          <a
            href=""
            className="
              bg-celeste
              py-2
              px-4
              rounded-3xl
              flex
              w-full
              md:w-4/6
              text-center
              gap-2
              justify-center
              items-center
              text-celeste-light
              text-sm
              md:text-base
            "
          >
            Consultanos por WhatsApp

            <img
              src="/whatsapp-2.png"
              alt=""
              className="size-5"
            />
          </a>
        </div>

        {/* Características */}
        <div
          className="
            w-full
            md:w-3/6
            p-5
            m-auto
            flex
            flex-row
            justify-between
            items-start
            md:items-center
            gap-1
          "
        >
          <div className="flex flex-col items-center justify-center gap-2 md:gap-5 flex-1">
            <img
              src="/fresa.png"
              alt=""
              className="size-7 md:size-10"
            />

            <p className="text-center text-[10px] md:text-xs leading-tight">
              Ingredientes
              <br />
              Seleccionados
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 md:gap-5 flex-1">
            <img
              src="/manos-corazon.png"
              alt=""
              className="size-7 md:size-10"
            />

            <p className="text-center text-[10px] md:text-xs leading-tight">
              Hecho a mano
              <br />
              cada día
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 md:gap-5 flex-1">
            <img
              src="/magdalena.png"
              alt=""
              className="size-7 md:size-10"
            />

            <p className="text-center text-[10px] md:text-xs leading-tight">
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