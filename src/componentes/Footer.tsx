export const Footer = () => {
  return (
    <footer
      className="w-full bg-cover bg-center p-10 md:p-20 font-sans"
      style={{ backgroundImage: `url("/fondo-footer.png")`}}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Columna 1 - Marca */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl text-carbon font-serif">By Didos</h2>

          <p className="mt-3 text-sm text-carbon max-w-xs">
            Hecho a mano cada día con ingredientes frescos y mucho amor.
          </p>

          <div className="flex gap-3 mt-5">
            <a
              href="https://instagram.com/by.didos"
              className="size-9 bg-carbon flex items-center justify-center rounded-full"
            >
              <img src="/instagram.png" alt="Instagram" className="size-5" />
            </a>

            <a
              href="https://facebook.com/by.didos"
              className="size-9 bg-carbon flex items-center justify-center rounded-full"
            >
              <img src="/facebook.png" alt="Facebook" className="size-5" />
            </a>

            <a
              href="https://wa.me/542625591849?text=Hola, quiero hacer un pedido"
              className="size-9 bg-carbon flex items-center justify-center rounded-full"
            >
              <img src="/whatsapp-2.png" alt="WhatsApp" className="size-5" />
            </a>
          </div>
        </div>

        {/* Columna 2 - Contacto */}
        <div className="border-t md:border-t-0 md:border-l border-celeste/80 pt-8 md:pt-0 md:pl-10">
          <h2 className="text-xl tracking-wide text-carbon uppercase font-serif">
            Contacto
          </h2>

          <ul className="mt-4 flex flex-col gap-3 text-sm text-carbon">
            
            <li className="flex items-center gap-2">
              <img src="/whatsapp.png" alt="WhatsApp" className="size-5" />
              <span>+54 2625 591849</span>
            </li>

            <li className="flex items-center gap-2">
              <img src="/ubicacion.png" alt="Ubicación" className="size-5" />
              <span>Mendoza, Argentina</span>
            </li>

            <li className="flex items-center gap-2">
              <img src="/reloj.png" alt="Horario" className="size-5" />
              <span>Lun a Sáb 9:00 - 20:00 hs</span>
            </li>

          </ul>
        </div>

        {/* Columna 3 - Instagram */}
        <div className="border-t md:border-t-0 md:border-l border-celeste/80 pt-8 md:pt-0 md:pl-10 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-xl tracking-wide text-carbon uppercase font-sans">
            Seguinos en Instagram
          </h2>

          <p className="mt-4 text-sm text-carbon max-w-xs">
            Novedades, promociones y mucho más en nuestro Instagram.
          </p>

          <a
            href="https://instagram.com/by.didos"
            className="mt-4 bg-celeste-hover inline-flex items-center gap-2 border border-celeste-light text-white rounded-full px-4 py-2 text-sm hover:bg-celeste transition-colors"
          >
            @by.didos
            <i className="ti ti-brand-instagram" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
