export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  categoria: string;
}

export const categorias = [
  {
    label: "Todos",
    slug: "todos",
    img: "/todo.png",
  },
  {
    label: "Tortas",
    slug: "tortas",
    img: "/pastel.png",
  },
  {
    label: "Dulce",
    slug: "dulce",
    img: "/cupcake-2.png",
  },
  {
    label: "Salado",
    slug: "salado",
    img: "/pan.png",
  },
  {
    label: "Bebidas",
    slug: "bebidas",
    img: "/bebida.png",
  },
  {
    label: "Boxs",
    slug: "boxs",
    img: "/caja.png",
  },
];

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "Chocotorta",
    categoria: "tortas",
    precio: 8500,
    img:"chocotorta.png",
  },
  {
    id: 2,
    nombre: "Tiramisú",
    categoria: "dulce",
    precio: 7500,
    img: "tiramisu.png",
  },
  {
    id: 3,
    nombre: "Cupcake",
    categoria: "dulce",
    precio: 2500,
    img: "tiramisu.png",
  },
  {
    id: 4,
    nombre: "Focaccia",
    categoria: "salado",
    precio: 5000,
    img: "focaccia.png",
  },
  {
    id: 5,
    nombre: "Chipá",
    categoria: "salado",
    precio: 3500,
    img: "chipa.png",
  },
  {
    id: 6,
    nombre: "Café",
    categoria: "bebidas",
    precio: 2000,
    img: "cafe.png",
  },
  {
    id: 7,
    nombre: "Box Desayuno",
    categoria: "boxs",
    precio: 12000,
    img:"box-desayuno.png",
  },
];
