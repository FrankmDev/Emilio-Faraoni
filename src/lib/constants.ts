/**
 * Constants · global non-derived values.
 *
 * Centralises strings that are reused across layouts, SEO and
 * shared data files. Keep this file tiny and stable — anything
 * that is *data* (navigation entries, company info, copy) lives
 * in `src/data/`.
 *
 * NOTE: contact details are intentionally empty. The brand has
 * not confirmed an email, phone or address publicly. When the
 * data is confirmed, fill it in once here and every consumer
 * picks it up.
 */
export const SITE_NAME = 'Emilio Faraoni';
export const SITE_DESCRIPTION =
  'Empresa familiar de marroquinería en Elche dedicada a la fabricación artesanal de cinturones, bolsos y complementos de cuero desde 1988.';
export const COMPANY_NAME = 'Emilio Faraoni';
export const DEFAULT_LOCALE = 'es';

/**
 * Public contact details. Leave empty until the brand confirms
 * the final values — never invent or placeholder them. Typed
 * explicitly as `string` so consumers can call string methods
 * (replace, trim, etc.) without literal-type narrowing.
 */
export const CONTACT_EMAIL: string = '';
export const CONTACT_PHONE: string = '';
export const CONTACT_ADDRESS: string = '';
