// App.tsx

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Productos } from "./pages/Productos";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contact";
import Layout from "./layaout/Layaout";


export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
  
}

