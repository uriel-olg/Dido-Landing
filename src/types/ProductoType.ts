import type { SanityImageSource } from "@sanity/image-url";

export type Producto = {
  _id: string;
  nombre: string;
  slug: {
    current: string;
  };
  precio: number;
  descripcion?: string;
  categoria: string;
  imagen: SanityImageSource;
  disponible: boolean;
  destacados: boolean;
};