// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.emiliofaraoni.com',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
  security: {
    checkOrigin: true,
  },
});
