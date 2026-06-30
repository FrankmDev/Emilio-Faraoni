import {
  COMPANY_NAME,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
} from '@/lib/constants';

/**
 * Company · corporate identity for Emilio Faraoni.
 *
 * The only public source of truth for the brand's name,
 * location, year of foundation and corporate description.
 * Consumed by `Header`, `Footer`, `BaseLayout` and any
 * section that needs to reference the company.
 *
 * IMPORTANT: contact details (email, phone, address) are
 * intentionally empty strings. They are not public until
 * the brand confirms them. Display logic in the UI should
 * check for empty values before rendering.
 */
export const company = {
  name: COMPANY_NAME,
  foundedYear: 1988,
  location: 'Elche, Alicante',
  city: 'Elche',
  province: 'Alicante',
  country: 'España',
  shortDescription:
    'Empresa familiar dedicada a la fabricación artesanal de cinturones, bolsos y artículos de marroquinería.',
  description:
    'Desde 1988, Emilio Faraoni trabaja en la fabricación de complementos de cuero con producto nacional, materiales nacionales y una forma de hacer basada en el oficio, el acabado y la continuidad.',
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
  address: CONTACT_ADDRESS,
} as const;

export type Company = typeof company;
