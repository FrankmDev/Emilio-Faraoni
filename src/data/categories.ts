export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  /** Optional cover image (path under /public). When absent,
   *  editorial placeholders are rendered in the public UI. */
  image?: string;
  isActive: boolean;
};

export const categories: Category[] = [
  {
    id: 'cat-cinturones',
    name: 'Cinturones',
    slug: 'cinturones',
    description:
      'Cinturones de piel y acabados sobrios para venta profesional.',
    isActive: true,
  },
  {
    id: 'cat-bolsos',
    name: 'Bolsos',
    slug: 'bolsos',
    description: 'Bolsos y piezas de marroquinería para catálogo mayorista.',
    isActive: true,
  },
  {
    id: 'cat-carteras',
    name: 'Carteras',
    slug: 'carteras',
    description: 'Carteras y billeteros orientados a tiendas especializadas.',
    isActive: true,
  },
  {
    id: 'cat-accesorios',
    name: 'Accesorios',
    slug: 'accesorios',
    description:
      'Complementos de marroquinería para ampliar surtido profesional.',
    isActive: true,
  },
];
