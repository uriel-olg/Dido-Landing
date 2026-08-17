import { useState } from "react";
import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-celeste font-semibold text-lg"
    : "text-carbon text-lg hover:text-celeste transition-colors";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 md:hidden"
        aria-label="Abrir menú"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-carbon rounded-full transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-carbon rounded-full transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-carbon rounded-full transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Menú desplegable (mobile) */}
      {isOpen && (
        <div className="absolute right-3 p-5 text-center w-min top-16 bg-celeste-light z-40 flex flex-col items-center gap-4 md:hidden rounded-2xl">
          <NavLink
            to="/"
            className={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            inicio
          </NavLink>
          <NavLink
            to="/productos"
            className={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            menú
          </NavLink>
          <NavLink
            to="/nosotros"
            className={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            nosotros
          </NavLink>
          <NavLink
            to="/contacto"
            className={linkStyle}
            onClick={() => setIsOpen(false)}
          >
            contacto
          </NavLink>
          <a
            href="https://wa.me/542625591849?text=Hola!%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-celeste text-white text-center rounded-full w-25 h-8 flex items-center justify-center"
          >
            Pedir
          </a>
        </div>
      )}
    </>
  );
}
