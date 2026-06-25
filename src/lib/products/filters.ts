import type { Product } from '@/data/products';

export function filterActiveProducts(products: Product[]): Product[] {
  return products.filter((product) => product.isActive);
}

export function filterProductsByCategory(
  products: Product[],
  categorySlug: string,
): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function filterFeaturedProducts(products: Product[]): Product[] {
  return products.filter((product) => product.isFeatured === true);
}
