import { MdLocalPizza as icon } from 'react-icons/md';

export default {
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      validation: (Rule) => Rule.min(500).max(5000),
      // TODO: add custom component
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      toping0: 'toppings.0.name',
      toping1: 'toppings.1.name',
      toping2: 'toppings.2.name',
      toping3: 'toppings.3.name',
    },
    prepare: ({ title, media, ...toppings }) => {
      // Filter undefined toppings out
      const tops = Object.values(toppings).filter(Boolean);
      // return the preview object for the pizza

      console.log('stop');
      return {
        title,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
