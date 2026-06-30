import { ROUTES } from '@/lib/routes';

/**
 * Navigation · primary and footer site map.
 *
 * The base editorial phase of the site has four top-level
 * destinations: Inicio, Quiénes Somos, Blog and Contacto.
 * Footer navigation mirrors the main rail — no separate
 * "Información legal" or "Síguenos" sub-rail in this phase.
 *
 * Do NOT add Catálogo, Productos, Acceso mayorista or Login
 * here until those surfaces are explicitly approved.
 */
export const mainNavigation = [
  { label: 'Inicio', href: ROUTES.HOME },
  { label: 'Quiénes Somos', href: ROUTES.ABOUT },
  { label: 'Blog', href: ROUTES.BLOG },
  { label: 'Contacto', href: ROUTES.CONTACT },
] as const;

export const footerNavigation = mainNavigation;

export type NavigationItem = (typeof mainNavigation)[number];
