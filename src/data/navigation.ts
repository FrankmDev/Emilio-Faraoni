import { ROUTES } from '@/lib/routes';

export const mainNavigation = [
  { label: 'Inicio', href: ROUTES.HOME },
  { label: 'Catálogo', href: ROUTES.CATALOG },
  { label: 'Empresa', href: ROUTES.COMPANY },
  { label: 'Contacto', href: ROUTES.CONTACT },
] as const;

export const wholesaleAccessCta = {
  label: 'Acceso mayorista',
  href: ROUTES.WHOLESALE_ACCESS,
} as const;
