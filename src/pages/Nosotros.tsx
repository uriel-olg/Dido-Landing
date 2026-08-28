export const Nosotros = () => {
  return (
    <>
      {/* =========================
          HERO / NUESTRA HISTORIA
      ========================== */}
      <section className="relative min-h-[500px] md:min-h-[450px] overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="
            absolute inset-0
            bg-cover
            bg-[center_right]
            md:bg-left
          "
          style={{
            backgroundImage: `url('/hero-nosotros.png')`,
          }}
        />

        {/* Capa blanca de la izquierda */}
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
            py-16
            md:py-16
            flex
            flex-col
            items-center text-start
            md:items-start
            justify-center
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
            Nuestra historia
          </span>

          <h1
            className="
              mt-4
              max-w-lg
              text-4xl
              sm:text-5xl
              font-serif
              text-carbon
              leading-tight
            "
          >
            Hecho con amor,
            <br />
            <span className="italic">cada día</span>
          </h1>

          <p
            className="
              mt-6
              max-w-md
              text-gray-blue
              leading-7
              text-sm
              md:text-base
            "
          >
            En dulcería creemos que los mejores momentos de la vida se disfrutan
            con algo dulce.
          </p>

          <button
            className="
              mt-6
              w-fit
              rounded-full
              bg-celeste
              px-6
              py-3
              text-white
              text-sm
              md:text-base
              hover:opacity-90
              transition
            "
          >
            Conocé más sobre nuestro trabajo →
          </button>
        </div>
      </section>

      {/* =========================
          NUESTROS VALORES
      ========================== */}
      <section
        className="
          flex
          flex-col
          w-full
          h-full
          px-5
          py-12
          md:p-20
          gap-8
        "
      >
        {/* Título */}
        <div
          className="
            m-auto
            flex
            items-center
            justify-center
            gap-1
            w-full
            md:w-3/12
          "
        >
          <div className="h-px bg-celeste flex-1"></div>

          <div
            className="
              rounded-full
              px-2
              py-2
              text-celeste
              font-semibold
              text-sm
              md:text-lg
              whitespace-nowrap
            "
          >
            NUESTROS VALORES
          </div>

          <div className="h-px bg-celeste flex-1"></div>
        </div>

        {/* Valores */}
        <ul
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:flex
            md:justify-between
            gap-6
            md:gap-15
            md:w-11/12
            md:m-auto
            w-full
          "
        >
          {[
            {
              img: "corazon-c.png",
              titulo: "Hecho a mano",
              texto:
                "Elaboramos cada producto artesanalmente, cuidando cada detalle",
            },
            {
              img: "hoja-c.png",
              titulo: "Ingredientes reales",
              texto: "Usamos ingredientes frescos y de calidad, sin atajos",
            },
            {
              img: "magdalena-c.png",
              titulo: "Pasión por lo dulce",
              texto: "Nos inspira lo que hacemos y se nota en cada bocado",
            },
            {
              img: "persona-c.png",
              titulo: "Cercanía",
              texto: "Disfrutamos acompañarte en tus momentos especiales",
            },
          ].map((p) => {
            return (
              <li
                className="
                  w-3/6
                  m-auto
                  bg-white
                  rounded-xl
                  shadow-lg
                  shadow-black/10
                  hover:shadow-xl
                  transition-shadow
                  duration-200
                  text-center
                "
                key={p.titulo}
              >
                <div
                  className="
                    flex
                    p-5
                    md:p-5
                    flex-col
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      flex
                      bg-celeste-hover/10
                      rounded-full
                      size-24
                      md:size-30
                    "
                  >
                    <img
                      src={`/${p.img}`}
                      className="size-12 md:size-15 m-auto"
                      alt=""
                    />
                  </div>

                  <h2
                    className="
                      text-carbon
                      text-lg
                      font-semibold
                      font-serif
                      mt-3
                    "
                  >
                    {p.titulo}
                  </h2>

                  <p
                    className="
                      text-gray-blue
                      mt-2
                      text-sm
                      md:text-base
                      leading-6
                    "
                  >
                    {p.texto}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* =========================
          DETRÁS DE CADA CREACIÓN
      ========================== */}
      <section className="w-11/12 flex flex-col md:flex-row m-auto mt-5 md:mt-10 md:p-10">
        {/* Primera parte */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            // px-5
            // py-10
            // md:p-5
            text-center
          "
        >
          <p
            className="
              font-semibold
              text-celeste
              uppercase
              text-xs
              md:text-sm
              tracking-wide
            "
          >
            Detrás de cada creación
          </p>

          <h1
            className="
              text-carbon
              font-serif
              text-3xl
              md:text-4xl
              mt-3
              leading-tight
            "
          >
            Somos un equipo que
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            ama lo que hace
          </h1>

          {/* Línea + corazón */}
          <div
            className="
              flex
              items-center
              gap-1
              w-full
              max-w-md
              md:w-3/6
              mt-5
            "
          >
            <div className="h-px bg-celeste-pale flex-1"></div>

            <div className="rounded-full px-2 py-2">
              <img src="/corazon-c.png" alt="" className="size-5" />
            </div>

            <div className="h-px bg-celeste-pale flex-1"></div>
          </div>

          {/* Texto */}
          <p
            className="
              text-gray-blue
              mt-5
              max-w-2xl
              text-sm
              md:text-base
              leading-7
            "
          >
            Didos nació del sueño de compartir dulzura a través de recetas
            caseras que nos recuerdan a lo simple y lo auténtico.
          </p>

          <p
            className="
              text-gray-blue
              mt-4
              max-w-2xl
              text-sm
              md:text-base
              leading-7
            "
          >
            Trabajamos cada día para que disfrutes productos frescos, ricos y
            hechos especialmente para vos.
          </p>

          <h2
            className="
              font-serif
              text-celeste
              text-xl
              md:text-2xl
              mt-6
              max-w-xl
            "
          >
            <span className="italic">
              Gracias por elegir lo hecho con amor.
            </span>
          </h2>

          <img src="/corazon-c.png" alt="" className="size-5 mt-6" />
        </div>

        {/* Segunda parte del hero */}
        <div className="w-full h-[500px] flex gap-3 p-5">
          {/* Imagen grande izquierda */}
          <div
            className="w-1/2 h-full bg-cover bg-center bg-no-repeat rounded-2xl"
            style={{
              backgroundImage: `url('/cocinera.png')`,
            }}
          />

          {/* Columna derecha */}
          <div className="w-1/2 h-full flex flex-col gap-3">
            {/* Arriba */}
            <div
              className="w-full h-1/2 bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{
                backgroundImage: `url('/cocinera-2.png')`,
              }}
            />

            {/* Abajo */}
            <div
              className="w-full h-1/2 bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{
                backgroundImage: `url('/cocinera-3.png')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* =========================
          LO QUE NOS INSPIRA
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
          gap-8
          md:gap-0
          mt-10
          md:mt-20
          md:mb-10
          p-6
          md:p-0
        "
      >
        {/* Icono */}
        <div
          className="
            flex
            rounded-full
            size-24
            md:size-30
            bg-celeste/10
            m-auto
            md:m-auto
            shrink-0
          "
        >
          <img
            src="/mariposa-flor.png"
            alt=""
            className="size-12 md:size-15 m-auto"
          />
        </div>

        {/* Texto */}
        <div
          className="
            w-full
            md:w-2/6
            py-2
            md:py-5
            px-2
            md:pl-10
            gap-3
            flex
            flex-col
            items-center
            md:items-start
            text-center
            md:text-left
          "
        >
          <h2
            className="
              text-celeste
              font-sans
              text-2xl
              md:text-3xl
            "
          >
            Lo que nos inspira
          </h2>

          <p
            className="
              text-gray-blue
              text-sm
              md:text-base
              leading-6
            "
          >
            Los momentos compartidos, las reuniones en familia, los detalles que
            hacen feliz a alguien. Eso es lo que nos motiva a seguir creando.
          </p>
        </div>

        {/* Iconos */}
        <div
          className="
            w-full
            md:w-3/6
            px-2
            md:px-10
            py-5
            flex
            flex-row
            justify-between
            items-center
            gap-4
          "
        >
          {/* Momento especiales */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              gap-3
              flex-1
            "
          >
            <img
              src="/pastel-de-boda.png"
              alt=""
              className="size-8 md:size-10"
            />

            <p className="text-center text-xs">
              Momentos
              <br />
              especiales
            </p>
          </div>

          {/* Recetas */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-3
              flex-1
            "
          >
            <img src="/corazon-c.png" alt="" className="size-8 md:size-10" />

            <p className="text-center text-xs">
              Recetas que
              <br />
              unen
            </p>
          </div>

          {/* Detalles */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-3
              flex-1
            "
          >
            <img src="/destellos.png" alt="" className="size-8 md:size-10" />

            <p className="text-center text-xs">
              Pequeños detalles
              <br />
              que importan
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
