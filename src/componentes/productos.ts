export interface Producto {
    id:number,
    nombre:string,
    precio: number,
    imagen:string
    categoria:string
}

export const categorias = [
  "todos",
  "dulces",   // tortas, cookies, postres, facturas dulces
  "salados",  // focaccias, chipa, panificados salados
  "bebidas",
  "boxes",
];

export const Productos: Producto[] = [
  {
    id: 1,
    nombre: "Cookies de chocolate",
    precio: 1000,
    imagen: "dasd",
    categoria: "dulces",
  },
  {
    id: 2,
    nombre: "Torta de vainilla",
    precio: 4500,
    imagen: "dasd",
    categoria: "dulces",
  },
  {
    id: 3,
    nombre: "Medialunas",
    precio: 800,
    imagen: "dasd",
    categoria: "salados",
  },
  {
    id: 4,
    nombre: "Flan casero",
    precio: 1200,
    imagen: "dasd",
    categoria: "dulces",
  },
  {
    id: 5,
    nombre: "Cookies de avena",
    precio: 1000,
    imagen: "dasd",
    categoria: "dulces",
  },
  {
    id: 6,
    nombre: "Cookies de chocolate",
    precio: 1000,
    imagen: "dasd",
    categoria: "dulces",
  },
  {
    id: 7,
    nombre: "Torta de vainilla",
    precio: 4500,
    imagen: "dasd",
    categoria: "dulces",
  },
  {
    id: 8,
    nombre: "Medialunas",
    precio: 800,
    imagen: "dasd",
    categoria: "salados",
  },
  {
    id: 9,
    nombre: "Flan casero",
    precio: 1200,
    imagen: "dasd",
    categoria: "dulces",
  },
  {
    id: 10,
    nombre: "Cookies de avena",
    precio: 1000,
    imagen: "dasd",
    categoria: "dulces",
  },
];