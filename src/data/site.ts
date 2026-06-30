/**
 * Site · global metadata for the Emilio Faraoni web.
 *
 * Single source of truth for SEO defaults (title, description,
 * canonical URL, locale, Open Graph). Consumed by `BaseLayout`
 * and by any consumer that needs to reference the brand name
 * or default page metadata.
 *
 * IMPORTANT: do not invent commercial claims here. The
 * description is intentionally sober and tied to the
 * editorial facts the brand is comfortable communicating
 * publicly (Spanish-language catalogue, family business,
 * leather goods, since 1988, Elche).
 */
export const site = {
  name: 'Emilio Faraoni',
  shortName: 'Emilio Faraoni',
  title: 'Emilio Faraoni · Marroquinería y complementos de cuero',
  description:
    'Empresa familiar de marroquinería en Elche dedicada a la fabricación artesanal de cinturones, bolsos y complementos de cuero desde 1988.',
  url: 'https://emilio-faraoni.vercel.app',
  locale: 'es_ES',
  language: 'es',
} as const;

export type Site = typeof site;
