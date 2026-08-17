import { NavLink } from "react-router-dom";
import HamburgerMenu from "./Hamburgermenu";

const linkStyle = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-celeste font-semibold border-b-2 border-celeste"
    : "text-gray-blue hover:text-celeste transition-colors";

export const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-8 py-2 md:py-3">
      {/* <img src="logo.png" alt="" className="size-10 rounded-3xl md:size-20 md:rounded-full" /> */}
      <p className="font-serif text-celeste-hover">By Didos</p>
      <ul className="hidden md:flex flex-row items-center gap-10 md:text-l">
        <li>
          <NavLink to="/" className={linkStyle}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/productos" className={linkStyle}>
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/nosotros" className={linkStyle}>
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" className={linkStyle}>
            Contacto
          </NavLink>
        </li>
        <li>
          <a
            href="https://wa.me/542625591849?text=Hola ,queria hacer un pedido"
            className="
    inline-flex items-center justify-center
    rounded-full
    bg-celeste
    px-6 py-3
    text-xs text-white
    shadow-md shadow-celeste/20
    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-celeste-hover
    hover:shadow-lg hover:shadow-celeste/30
    active:translate-y-0
    active:scale-95
    focus:outline-none
    focus:ring-2 focus:ring-celeste/40
    md:px-3 md:py-1.5 md:text-base
    hover:cursor-pointer
  "
          >
            Pedir ahora
          </a>
        </li>
      </ul>

      <HamburgerMenu />
    </nav>
  );
};
