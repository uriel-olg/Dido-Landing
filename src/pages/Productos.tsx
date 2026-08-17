import { Link } from "react-router-dom"
export const Productos = () =>{

    return (
        <>
        {/* seccion categorias */}
      <section className="flex flex-col items-center pt-10 pb-10">
        <h2 className=" text-celeste text-lg md:text-2xl">Categorias</h2>
        <br />
        <ul className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-10 md:gap-30 mt-6">
          {[
            { img: "pastel.png", label: "Tortas", slug: "tortas" },
            { img: "galleta.png", label: "Galletas", slug: "galletas" },
            { img: "un-pan.png", label: "Panaderia", slug: "panaderia" },
            { img: "vaso.png", label: "Bebidas", slug: "bebidas" },
            { img: "vaso.png", label: "Bebidas", slug: "bebidas" },
            { img: "vaso.png", label: "Bebidas", slug: "bebidas" }
          ].map((cat) => (
            <li
              key={cat.label}
              className="font-serif text-carbon text-center w-1/6 "
            >
              <div className="rounded-full size-17 md:size-30 mx-auto flex items-center justify-center bg-white shadow-lg shadow-black/10 group-hover:shadow-xl group-hover:scale-105 transition-all duration-200">
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="size-9 md:size-16"
                />
              </div>
              <p className="mt-2 mb-1 group-hover:text-celeste transition-colors text-xs md:text-xl md:pt-5">
                {cat.label}
              </p>
              {/* { <Link
                ref={`/productos?categoria=${cat.slug}`}
                className="group flex flex-col items-center"
              >
                <div className="rounded-full size-18 mx-auto flex items-center justify-center bg-white shadow-lg shadow-black/10 group-hover:shadow-xl group-hover:scale-105 transition-all duration-200">
                  <img src={cat.img} alt={cat.label} className="size-10" />
                </div>
                <p className="mt-2 mb-1 group-hover:text-celeste transition-colors">
                  {cat.label}
                </p>
              </Link> } */}
              <div className="border-b border-celeste-muted/70  w-1/4 md:w-1/6 mx-auto" />
            </li>
          ))}
        </ul>

        <ul>

        </ul>
      </section>
        </>
    )
}