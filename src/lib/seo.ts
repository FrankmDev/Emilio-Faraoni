import { SITE_DESCRIPTION, SITE_NAME } from './constants';

export const defaultSeo = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export function createPageTitle(title?: string): string {
  return title ? `${title} · ${SITE_NAME}` : SITE_NAME;
}

export function createMetaDescription(description?: string): string {
  return description ?? SITE_DESCRIPTION;
}
