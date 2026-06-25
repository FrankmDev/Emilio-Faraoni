/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        leather: 'var(--color-leather)',
        'leather-dark': 'var(--color-leather-dark)',
        'gold-soft': 'var(--color-gold-soft)',
      },
    },
  },
  plugins: [],
};
