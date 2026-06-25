/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-muted': 'var(--color-surface-muted)',
        ink: 'var(--color-ink)',
        'ink-soft': 'var(--color-ink-soft)',
        muted: 'var(--color-muted)',
        'muted-light': 'var(--color-muted-light)',
        border: 'var(--color-border)',
        'border-soft': 'var(--color-border-soft)',
        leather: 'var(--color-leather)',
        'leather-dark': 'var(--color-leather-dark)',
        'gold-soft': 'var(--color-gold-soft)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        control: 'var(--radius-control)',
      },
      fontFamily: {
        serif: 'var(--font-serif)',
        sans: 'var(--font-sans)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
      spacing: {
        section: 'var(--section-y)',
        'section-compact': 'var(--section-y-compact)',
        grid: 'var(--grid-gap)',
      },
    },
  },
  plugins: [],
};
