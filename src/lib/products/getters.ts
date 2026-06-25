import { products, type Product } from '@/data/products';
import {
  filterActiveProducts,
  filterFeaturedProducts,
  filterProductsByCategory,
} from './filters';

export type PublicProduct = Omit<Product, 'wholesalePrice'>;

function toPublicProduct(product: Product): PublicProduct {
  const { wholesalePrice: _privateWholesalePrice, ...publicProduct } = product;
  return publicProduct;
}

export function getPublicProducts(): PublicProduct[] {
  return filterActiveProducts(products).map(toPublicProduct);
}

export function getPublicFeaturedProducts(): PublicProduct[] {
  return filterFeaturedProducts(filterActiveProducts(products)).map(
    toPublicProduct,
  );
}

export function getPublicProductsByCategory(
  categorySlug: string,
): PublicProduct[] {
  return filterProductsByCategory(
    filterActiveProducts(products),
    categorySlug,
  ).map(toPublicProduct);
}

export function getPublicProductBySlug(
  slug: string,
): PublicProduct | undefined {
  const product = filterActiveProducts(products).find(
    (item) => item.slug === slug,
  );
  return product ? toPublicProduct(product) : undefined;
}
