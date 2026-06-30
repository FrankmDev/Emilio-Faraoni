/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-muted': 'var(--color-surface-muted)',
        'surface-soft': 'var(--color-surface-soft)',
        'surface-sand': 'var(--color-surface-sand)',
        'surface-accent': 'var(--color-surface-accent)',
        'surface-elevated': 'var(--color-surface-elevated)',
        'surface-inverse': 'var(--color-surface-inverse)',
        ink: 'var(--color-ink)',
        'ink-soft': 'var(--color-ink-soft)',
        'ink-on-inverse': 'var(--color-ink-on-inverse)',
        muted: 'var(--color-muted)',
        'muted-light': 'var(--color-muted-light)',
        'border-hairline': 'var(--color-border-hairline)',
        border: 'var(--color-border)',
        'border-soft': 'var(--color-border-soft)',
        'border-strong': 'var(--color-border-strong)',
        leather: 'var(--color-leather)',
        'leather-dark': 'var(--color-leather-dark)',
        clay: 'var(--color-clay)',
        oxide: 'var(--color-oxide)',
        'gold-soft': 'var(--color-gold-soft)',
        smoke: 'var(--color-smoke)',
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
