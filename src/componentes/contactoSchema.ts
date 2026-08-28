import { z } from "zod";

export const contactoSchema = z.object({
  usuario: z.string().min(2, "Ingresá tu nombre"),

  email: z
    .string()
    .email("Ingresá un email válido"),

  telefono: z
    .string()
    .min(8, "Ingresá un teléfono válido"),

  seleccion: z.enum(
    ["tortas", "eventos", "otros"],
    {
      message: "Seleccioná una opción",
    }
  ),

  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactoForm = z.infer<typeof contactoSchema>;