/**
 * Routes · central registry of every URL the site exposes.
 *
 * Active public routes are listed first and feed Header,
 * Footer and any page that needs to link to a public
 * destination.
 *
 * Reserved routes (marked RESERVED) are still referenced
 * by the section and product scaffold (HomeHero, B2BAccess,
 * ProductCard, etc.). They are NOT part of the editorial
 * public surface and must not be promoted to the main
 * navigation. They live in this file so the scaffold keeps
 * compiling while the corresponding phases are not built.
 *
 * Future / private routes are commented out at the bottom —
 * documented for reference only.
 */
export const ROUTES = {
  // ----- Active public routes -----
  HOME: '/',
  ABOUT: '/quienes-somos',
  BLOG: '/blog',
  CONTACT: '/contacto',

  // ----- Reserved (scaffold only — do not link publicly) -----
  /** @reserved Referenced by the section/product scaffold. */
  CATALOG: '/catalogo',
  /** @reserved Legacy company route. Replaced by ABOUT. */
  COMPANY: '/empresa',
  /** @reserved Referenced by the wholesale/B2B scaffold. */
  WHOLESALE_ACCESS: '/acceso-mayorista',
} as const;

/** Active routes only — used by the public navigation. */
export const ACTIVE_ROUTES = {
  HOME: ROUTES.HOME,
  ABOUT: ROUTES.ABOUT,
  BLOG: ROUTES.BLOG,
  CONTACT: ROUTES.CONTACT,
} as const;

// ----- Future / private routes -----
// Do not uncomment until the corresponding phase is approved:
// LOGIN: '/login'
// REGISTER: '/registro'
// ACCOUNT: '/cuenta'
// ADMIN: '/admin'

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
export type ActiveRoute = (typeof ACTIVE_ROUTES)[keyof typeof ACTIVE_ROUTES];
