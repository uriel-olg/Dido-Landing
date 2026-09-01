import {defineField, defineType} from 'sanity'

export const productoType = defineType({
  name: 'producto',
  title: 'Producto',
  type: 'document',

  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',

      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'nombre',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'precio',
      title: 'Precio',
      type: 'number',

        validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    }),

    defineField({
      name: 'categoria',
      title: 'Categoría',
      type: 'string',

      options: {
        list: [
          {title: 'Tortas', value: 'tortas'},
          {title: 'Dulce', value: 'dulce'},
          {title: 'Salado', value: 'salado'},
          {title: 'Bebidas', value: 'bebidas'},
          {title: 'Boxs', value: 'boxs'},
        ],
      },

      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'imagen',
      title: 'Imagen',
      type: 'image',

      options: {
        hotspot: true,
      },

      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'disponible',
      title: 'Disponible',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'destacados',
      title: 'Destacados',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
