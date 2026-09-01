import type { Producto } from "../types/ProductoType";
import { client } from "./client";


export const getProducto = async ():Promise<Producto[]> => {
  const productos = await client.fetch(`*[_type == "producto"]{
  _id,
  nombre,
  slug,
  precio,
  descripcion,
  categoria,
  imagen,
  disponible,
  destacados
}`);

  return productos;
};
