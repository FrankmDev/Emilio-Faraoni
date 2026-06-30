# Emilio Faraoni B2B

Base inicial para una futura web catálogo mayorista de Emilio Faraoni.

## Fase Actual

Esta rama prepara únicamente la arquitectura de Fase 1:

- Astro
- TypeScript
- Tailwind CSS
- datos locales mínimos
- layout base
- componentes UI simples
- helpers de rutas, SEO y seguridad

No incluye login, Supabase, base de datos, panel admin, emails, carrito ni catálogo completo.

## Comandos

```sh
bun install
bun run dev
bun run build
```

## Estructura

```txt
src/
  components/
    layout/
    product/
    sections/
    ui/
  data/
  layouts/
  lib/
    products/
    security/
  pages/
  styles/
```

## Seguridad B2B

`wholesalePrice` puede existir en datos mock para validar el modelo, pero no debe renderizarse en UI pública ni exponerse desde endpoints públicos.

Cuando se implemente Supabase/Auth, los precios deberán obtenerse solo desde queries server-side protegidas y con permisos de usuario mayorista aprobado.

## Carpetas Futuras

No existen todavía. Se añadirán solo cuando toque implementar backend/auth:

```txt
src/lib/supabase/
src/lib/auth/
src/lib/validation/
src/server/actions/
src/server/queries/
```
