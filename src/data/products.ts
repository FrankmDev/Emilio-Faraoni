export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  measurements?: string;
  materials?: string;
  reference?: string;
  /**
   * wholesalePrice is private B2B data. Do not expose in public UI or public API responses.
   * It will later be protected server-side.
   */
  wholesalePrice?: number;
  isFeatured?: boolean;
  isActive: boolean;
};

function slugify(value: string): string {
  return value
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

type ProductInput = Omit<Product, 'categorySlug'>;

function defineProduct(input: ProductInput): Product {
  return {
    ...input,
    categorySlug: slugify(input.category),
  };
}

function buildProducts(): Product[] {
  return [
    defineProduct({
      id: 'ef-001',
      slug: 'cinturon-piel-clasico',
      name: 'Cinturón de piel clásico',
      category: 'Cinturones',
      shortDescription:
        'Cinturón de piel con hebilla metálica y acabado sobrio.',
      description:
        'Modelo base para surtido profesional, pensado para tiendas que buscan una referencia versátil y estable.',
      images: ['/images/products/cinturon-piel-clasico-01.webp'],
      colors: ['Negro', 'Marrón', 'Cuero'],
      sizes: ['90', '95', '100', '105', '110'],
      measurements: 'Ancho aproximado: 3,5 cm',
      materials: 'Piel y hebilla metálica',
      reference: 'EF-001',
      wholesalePrice: 12.5,
      isFeatured: true,
      isActive: true,
    }),
    defineProduct({
      id: 'ef-002',
      slug: 'bolso-bandolera-piel',
      name: 'Bolso bandolera piel',
      category: 'Bolsos',
      shortDescription:
        'Bandolera de piel con formato compacto para catálogo profesional.',
      description:
        'Artículo de marroquinería pensado para compradores mayoristas que necesitan una pieza funcional y clara.',
      images: ['/images/products/bolso-bandolera-piel-01.webp'],
      colors: ['Negro', 'Marrón'],
      sizes: ['Única'],
      measurements: 'Medidas editables pendientes de confirmar',
      materials: 'Piel',
      reference: 'EF-002',
      wholesalePrice: 28,
      isFeatured: true,
      isActive: true,
    }),
    defineProduct({
      id: 'ef-003',
      slug: 'cartera-piel-hombre',
      name: 'Cartera piel hombre',
      category: 'Carteras',
      shortDescription:
        'Cartera de piel con distribución interior para uso diario.',
      description:
        'Referencia inicial de cartera para validar estructura de producto, variantes y presentación pública sin precios.',
      images: ['/images/products/cartera-piel-hombre-01.webp'],
      colors: ['Negro', 'Cuero'],
      sizes: ['Única'],
      materials: 'Piel',
      reference: 'EF-003',
      wholesalePrice: 9.75,
      isFeatured: false,
      isActive: true,
    }),
  ];
}

export const products: Product[] = buildProducts();
