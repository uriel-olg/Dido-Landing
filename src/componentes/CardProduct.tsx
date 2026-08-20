interface Producto {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  categoria: string;
}

interface ProductCardProps {
  producto: Producto;
}

export default function CardProduct({ producto }: ProductCardProps) {
  return (
    <article className="flex flex-col rounded-3xl border border-celeste-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Imagen */}
      <div className="h-56 overflow-hidden rounded-3xl">
        <img
          src={`/${producto.img}`}
          alt={producto.nombre}
          className=" object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Categoría */}
        
      </div>

      {/* Información */}
      <div className="flex flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-semibold text-carbon">
            {producto.nombre}
          </h3>

          <p className="mt-1 text-sm text-gray-blue">
            Elaborado artesanalmente
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-celeste">
            ${producto.precio}
          </span>

          <button
            className="
              rounded-full
              bg-celeste
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:bg-celeste-hover
              active:scale-95
              hover:cursor-pointer
            "
          >
            Pedir
          </button>
        </div>
      </div>
    </article>
  );
}
