import { COMPANY_NAME, CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants';

export const company = {
  name: COMPANY_NAME,
  location: 'Elche, Alicante',
  city: 'Elche',
  province: 'Alicante',
  country: 'España',
  foundedYear: 1976,
  description:
    'Fabricante y proveedor mayorista de cinturones, bolsos y artículos de marroquinería para tiendas, distribuidores y compradores profesionales.',
  contactEmail: CONTACT_EMAIL,
  contactPhone: CONTACT_PHONE,
} as const;
