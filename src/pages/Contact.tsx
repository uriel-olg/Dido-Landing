import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactoSchema,
  type ContactoForm,
} from "../componentes/contactoSchema";

export const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactoForm>({
    resolver: zodResolver(contactoSchema),

    defaultValues: {
      usuario: "",
      email: "",
      telefono: "",
      seleccion: undefined,
      mensaje: "",
    },
  });

  const onSubmit = (data: ContactoForm) => {
    console.log(data);

    reset();
  };

  return (
    <>
      {/* HERO */}
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
            backgroundImage: `url('/fondo-nosotros.png')`,
          }}
        />

        {/* Overlay */}
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
            items-center
            text-center
            
            justify-center
            min-h-[600px]
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
            estamos para ayudarte
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
            Hablemos,estamos
            <br />
            <span className="italic text-celeste">para vos </span>
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
            ¿ tenes una consulta,queres hacer un pedido
            <br />
            especial o tenés algún evento en mente?
            <br />
            Escribinos y te responderemos a la brevedad.
          </p>

          <button
            type="button"
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
              flex
              gap-3
            "
          >
            {<img src="/whatsapp-2.png" alt="" className="size-5" />}
            Escribinos por WhatssApp
          </button>
        </div>
      </section>

      {/* FORMULARIO + INFORMACIÓN */}
      <section className="w-10/12 m-auto">
        <div
          className="
            w-11/12
            max-w-6xl
            mx-auto
            flex
            flex-col
            md:flex-row
            py-20
            gap-10
          "
        >
          {/* FORMULARIO */}
          <div className="w-full md:w-1/2 flex flex-col rounded-3xl shadow-xl p-5">
            <h1 className="text-3xl font-serif text-carbon">
              Envianos tu mensaje
            </h1>

            <p className="text-gray-blue mt-2 mb-8">
              Completá el formulario y te respondemos pronto.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full flex-col gap-5"
            >
              {/* NOMBRE */}
              <div className="flex flex-col gap-2 relative">
                <img
                  src="/usuario.png"
                  alt=""
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-celeste size-5"
                />
                <input
                  id="usuario"
                  type="text"
                  placeholder="Tu nombre"
                  {...register("usuario")}
                  className="
                    rounded-xl
                    border
                    border-celeste/30
                    px-4
                    py-3
                    outline-none
                    focus:border-celeste
                    text-black
                    pl-10
                  "
                />

                {errors.usuario && (
                  <p className="text-sm text-red-500">
                    {errors.usuario.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2 relative">
                <img
                  src="/sobre.png"
                  alt=""
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-celeste size-5"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="ejemplo@email.com"
                  {...register("email")}
                  className="
                    rounded-xl
                    border
                    border-celeste/30
                    px-4
                    py-3
                    outline-none
                    focus:border-celeste
                    text-black
                    pl-10
                  "
                />

                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* TELÉFONO */}
              <div className="flex flex-col gap-2 relative">
                <img
                  src="/llamada-telefonica.png"
                  alt=""
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-celeste size-5"
                />
                <input
                  id="telefono"
                  type="tel"
                  placeholder="+54 9 260..."
                  {...register("telefono")}
                  className="
                    rounded-xl
                    border
                    border-celeste/30
                    px-4
                    py-3
                    outline-none
                    focus:border-celeste
                    text-black
                    pl-10
                  "
                />

                {errors.telefono && (
                  <p className="text-sm text-red-500">
                    {errors.telefono.message}
                  </p>
                )}
              </div>

              {/* SELECT */}
              <div className="flex flex-col gap-2 relative">
                <img
                  src="/menu-hamburguesa.png"
                  alt=""
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-celeste size-5"
                />
                <select
                  id="seleccion"
                  {...register("seleccion")}
                  className="
                    rounded-xl
                    border
                    border-celeste/30
                    px-4
                    py-3
                    outline-none
                    bg-white
                    focus:border-celeste
                    text-gray-500
                    pl-10
                  "
                >
                  <option value="">Seleccioná una opción</option>

                  <option value="tortas">Tortas</option>

                  <option value="eventos">Eventos</option>

                  <option value="otros">Otros</option>
                </select>

                {errors.seleccion && (
                  <p className="text-sm text-red-500">
                    {errors.seleccion.message}
                  </p>
                )}
              </div>

              {/* MENSAJE */}
              <div className="flex flex-col gap-2 relative">
                <img
                  src="/lapiz.png"
                  alt=""
                  className="absolute left-4 top-1/6 -translate-y-1/2 text-celeste size-5"
                />
                <textarea
                  id="mensaje"
                  rows={5}
                  placeholder="Contanos qué necesitás..."
                  {...register("mensaje")}
                  className="
                  text-black
                    resize-none
                    rounded-xl
                    border
                    border-celeste/30
                    px-4
                    py-3
                    outline-none
                    focus:border-celeste
                    pl-10
                  "
                ></textarea>

                {errors.mensaje && (
                  <p className="text-sm text-red-500">
                    {errors.mensaje.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  rounded-full
                  bg-celeste
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:bg-celeste-hover
                  disabled:opacity-50
                  flex
                  items-center
                  justify-center
                  gap-5
                "
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje "}{" "}
                <img src="/avion-de-papel.png" alt="" className="size-5" />
              </button>
            </form>
          </div>

          {/* INFORMACIÓN DE CONTACTO */}
          <div
            className="
              w-full
              md:w-1/2
              px-6
              md:px-10
              py-8
              rounded-3xl
              bg-celeste-light
            "
          >
            <h1 className="text-3xl font-serif text-carbon mb-5">
              Información de contacto
            </h1>

            {/* WHATSAPP */}
            <div className="flex gap-5 items-center border-b border-celeste/50 py-6">
              <div
                className="
                  size-16
                  shrink-0
                  bg-celeste/10
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                <img src="/mano-movil.png" alt="" className="size-8" />
              </div>

              <div>
                <h2 className="text-celeste-hover font-medium">WhatsApp</h2>

                <p className="text-carbon">+54 2625 491859</p>

                <p className="text-gray-blue text-sm">
                  Escribinos y te responderemos rápido
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-5 items-center border-b border-celeste/50 py-6">
              <div
                className="
                  size-20
                  shrink-0
                  bg-celeste/10
                  rounded-full
                  flex 
                  items-center
                  justify-center
                "
              >
                <img src="/sobre.png" alt="" className="size-8" />
              </div>

              <div>
                <h2 className="text-celeste-hover font-medium">Email</h2>

                <p className="text-carbon">bydidos@gmail.com</p>

                <p className="text-gray-blue text-sm">
                  Respondemos todas tus consultas.
                </p>
              </div>
            </div>

            {/* UBICACIÓN */}
            <div className="flex gap-5 items-center py-6">
              <div
                className="
                  size-20
                  shrink-0
                  bg-celeste/10
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                <img src="/marcador-de-mapa.png" alt="" className="size-8" />
              </div>

              <div>
                <h2 className="text-celeste-hover font-medium">Ubicación</h2>

                <p className="text-carbon">General alvear, Mendoza</p>

                <p className="text-gray-blue text-sm">
                  Consultanos por entregas y retiros.
                </p>
              </div>
            </div>

            {/* HORARIOS */}
            <div className="flex gap-5 items-center border-b border-celeste/50 py-6">
              <div
                className="
                  size-20
                  shrink-0
                  bg-celeste/10
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
              >
                <img src="/reloj-cinco.png" alt="" className="size-8" />
              </div>

              <div>
                <h2 className="text-celeste-hover font-medium">Horarios</h2>

                <p className="text-carbon">Lunes a sábado</p>

                <p className="text-gray-blue text-sm">9:00 a 20:00 hs</p>
              </div>
            </div>

            <div className="flex gap-5 items-center py-6">
              <div
                className="
                flex
                  size-20
                  shrink-0
                  bg-celeste/10
                  rounded-full
                  items-center
                  justify-center
                "
              >
                <img
                  src="/historial-de-pedidos.png"
                  alt=""
                  className="size-8"
                />
              </div>

              <div>
                <h2 className="text-celeste-hover font-medium">
                  Pedido con 24hs
                  <br />
                  de anticipacion
                </h2>

                <p className="text-gray-blue text-sm">
                  para garantizar la mejor calidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* zona de google maps */}
      <section>
        <div className="w-9/12 h-56 m-auto rounded-3xl overflow-hidden mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.715809015641!2d-67.69974192444045!3d-34.98878257281869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9678176c6f30ef43%3A0x821e5c0e631c28e7!2sDomingo%20Faustino%20Sarmiento%201023%2C%20M5620%20Gral.%20Alvear%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1787794514962!5m2!1ses!2sar"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </section>
    </>
  );
};
