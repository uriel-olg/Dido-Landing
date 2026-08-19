import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section
        className="min-h-[162.2px] bg-cover bg-no-repeat bg-[95%] md:bg-[100%_center] md:min-h-[400px] "
        style={{ backgroundImage: `url(${"fondo-1.png"})` }}
      >
        <div className="flex min-h-[500px]  items-center md:text-center">
          <div className="w-full px-8 flex flex-col items-center">
            <span className="text-sm font-medium text-celeste">
              HECHO A MANO, CADA DÍA
            </span>

            <h1 className="mt-4 text-5xl font-bold text-carbon font-serif">
              Dulzura en cada detalle
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              Tortas, panadería y bocaditos artesanales hechos con ingredientes
              seleccionados.
            </p>

            <a  href="/productos?" className="mt-10 w-3/6 md:w-1/6 rounded-full bg-celeste px-6 py-3 text-white" >
              Ver el menú →
            </a>
          </div>
        </div>
      </section>

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
      </section>

      {/*seccion destacados  */}
      <section className="flex flex-col items-center py-10 px-4 w-full bg-celeste-light">
        <h2 className="pb-2 border-b border-celeste-light text-celeste text-lg md:text-2xl">
          Destacados
        </h2>

        <div className="flex flex-1  overflow-x-auto snap-x snap-mandatory gap-4 md:gap-15 md:w-full md:grid md:grid-cols-4  md:overflow-visible mt-8 pb-4 w-full max-w-5xl md:max-w-6xl">
          {[
            {
              img: "tiramisu.png",
              nombre: "Tiramisu",
              precio: "$8.500",
            },
            {
              img: "chocotorta.png",
              nombre: "Chocotorta",
              precio: "$2.200",
            },
            {
              img: "chipa.png",
              nombre: "Chipa",
              precio: "$3.800",
            },
            {
              img: "focaccia.png",
              nombre: "Focaccia",
              precio: "$1.800",
            },
          ].map((item) => (
            <div
              key={item.nombre}
              className="snap-center shrink-0 w-64 md:w-auto bg-white rounded-xl shadow-lg shadow-black/10 hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col"
            >
              <img
                src={item.img}
                alt={item.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col items-center text-center font-serif text-carbon">
                <h3 className="text-lg">{item.nombre}</h3>
                <p className="mt-1 text-celeste">{item.precio}</p>
                <br />
                <a
                  href={`https://wa.me/542625591849?text=Hola, quiero hacer un pedido de: ${item.nombre}`}
                  className="rounded-3xl bg-white border border-celeste-hover px-15 py-1 text-carbon hover:bg-celeste-hover hover:cursor-pointer hover:text-celeste-light"
                >
                  Pedir
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 px-20 py-2 rounded-full border border-celeste bg-celeste font-serif hover:bg-celeste-hover text-white transition-colors duration-200 hover:cursor-pointer">
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
                      img: "orden.png",
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
                          src={item.img}
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
            min-h-[162.2px] bg-cover bg-no-repeat bg-[95%] md:bg-[100%_left-50] md:min-h-[300px] rounded-3xl
            flex flex-col items-start justify-center text-center gap-1 p-6 w-full max-w-sm "
            style={{ backgroundImage: `url(${"cupcake1.png"})` }}
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
