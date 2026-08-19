import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PagProductos } from "./pages/Productos";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contact";
import Layout from "./layaout/Layaout";


export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<PagProductos />} />
        <Route path="/Productos/:categoria" element={<PagProductos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
  
}

