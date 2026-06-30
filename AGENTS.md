# AGENTS.md · Emilio Faraoni

## 1. Propósito

Este documento define las reglas de trabajo para cualquier IA, agente o desarrollador que intervenga en la web de **Emilio Faraoni**.

Antes de crear componentes, páginas, estilos, copy o arquitectura, se debe leer este archivo y respetar su dirección.

El objetivo es construir una web **moderna, editorial, elegante, profesional y escalable**, con un toque de **marroquinería, fabricación artesanal y producto de cuero**, evitando cualquier apariencia de plantilla genérica.

---

## 2. Contexto del proyecto

Emilio Faraoni es una empresa familiar de marroquinería ubicada en **Elche, Alicante**.

Datos clave:

* Empresa familiar.
* Fundada en 1988.
* Fabricación artesanal.
* Producto nacional.
* Materiales nacionales.
* Especializada en cinturones, bolsos y complementos de cuero.
* Enfoque profesional, comercial y B2B.
* Preparada para evolucionar hacia catálogo/ecommerce.

La web debe transmitir:

* oficio,
* calidad,
* confianza,
* trayectoria,
* fabricación nacional,
* relación profesional,
* capacidad de escalar digitalmente.

Percepción deseada:

> Fabricante serio de marroquinería con una presencia digital premium, editorial y preparada para crecer.

---

## 3. Fase actual

El proyecto está en una fase de **base estática editorial + preparación de catálogo B2B**.

Actualmente existe:

* una ruta pública principal en `src/pages/index.astro`,
* un sistema visual global,
* componentes de layout, UI, secciones, blog y producto,
* datos locales mínimos en `src/data/`,
* helpers de rutas, SEO, productos y seguridad,
* mock de productos/categorías para validar estructura visual y arquitectura futura.

La intención de fase sigue siendo:

* presentar a Emilio Faraoni como fabricante de marroquinería,
* consolidar la identidad editorial premium,
* preparar la arquitectura para catálogo/ecommerce,
* mantener una base estática, rápida y fácil de ampliar.

No convertir todavía la web en ecommerce completo.

No crear todavía, salvo instrucción explícita:

* carrito,
* checkout,
* login,
* registro,
* auth,
* Supabase,
* base de datos,
* admin,
* panel mayorista,
* precios privados visibles,
* pagos,
* emails transaccionales,
* stock real,
* filtros complejos,
* búsqueda avanzada,
* endpoints públicos de producto.

Los componentes y datos de producto existentes se consideran **scaffold preparatorio**. Se pueden corregir, ordenar, tipar, mejorar visualmente y proteger, pero no ampliar hacia catálogo completo ni ecommerce funcional sin permiso.

Páginas objetivo de la fase editorial:

* Inicio
* Empresa / Quiénes Somos
* Blog
* Artículos individuales
* Contacto

Si esas rutas no existen todavía, crearlas solo cuando la tarea lo pida. No asumir que deben añadirse en cualquier cambio.

---

## 4. Stack

Usar:

* Astro
* TypeScript
* Tailwind CSS
* CSS global en `src/styles/global.css`

Priorizar Astro estático.

El proyecto actual usa Astro 6 y no tiene React. Mantener componentes `.astro` por defecto.

No añadir dependencias salvo necesidad real.

No introducir sin permiso:

* Next.js
* React innecesario
* Supabase
* Prisma
* Drizzle
* Redux/Zustand
* CMS externo
* Shopify/WooCommerce
* librerías UI
* sliders
* animaciones pesadas

---

## 5. Dirección estética

La web debe mezclar:

* ecommerce editorial limpio tipo Zara, Sfera, Mango, COS o The Row,
* catálogo premium de producto,
* fabricante de marroquinería,
* taller contemporáneo de cuero,
* empresa familiar modernizada.

No copiar literalmente ninguna referencia.

Proporción visual deseada:

* 65% ecommerce editorial premium
* 20% fabricante / taller / oficio
* 15% marroquinería / cuero / materialidad

La estética debe ser:

* profesional,
* fina,
* elegante,
* moderna,
* editorial,
* minimalista,
* atractiva,
* cálida,
* sobria,
* escalable,
* artesanal sin ser rústica,
* comercial sin ser agresiva.

Debe evitar:

* plantilla WordPress,
* WooCommerce genérico,
* ecommerce barato,
* web corporativa antigua,
* landing genérica,
* estética SaaS,
* tienda de dropshipping,
* catálogo PDF pasado a web,
* marca rústica artesanal,
* web excesivamente marrón,
* moda fast fashion sin identidad.

---

## 6. Sistema global de estilos

El sistema visual principal está en:

```txt
src/styles/global.css
```

Antes de crear componentes, revisar ese archivo.

Regla principal:

> Usar clases globales, tokens CSS y componentes existentes antes que cadenas largas de Tailwind.

Correcto:

```astro
<section class="section">
  <div class="container">
    <div class="section-header">
      ...
    </div>
  </div>
</section>
```

Incorrecto:

```astro
<section class="py-24 px-6 bg-[#fbfaf6]">
  <div class="mx-auto max-w-7xl">
    ...
  </div>
</section>
```

Tailwind solo debe usarse para ajustes puntuales.

El estado actual mezcla clases globales con utilidades Tailwind en algunos componentes. Al tocar un componente, reducir Tailwind repetitivo y mover patrones reutilizables a `src/styles/global.css` o a props del componente correspondiente.

Priorizar clases globales como:

```txt
container
container-wide
container-narrow
container-reading
section
section-y
section-lg
section-md
section-sm
split
grid
grid-2
grid-3
stack-sm
stack-md
stack-lg
surface
surface-soft
surface-muted
panel
panel-soft
atelier-surface
leather-wash
display-serif
heading-section
heading-card
copy-lead
copy-body
copy-small
eyebrow
meta-label
button
button-primary
button-secondary
button-dark
button-ghost
button-gold
button-inverse
badge
pill
nav-link
breadcrumb
breadcrumbs
page-hero
section-header
feature-card
blog-grid
blog-card
article-header
contact-grid
final-cta
image-placeholder
image-ground
section-divider
divider
hover-image
hover-craft
surface-card
surface-accent
```

No duplicar estilos ya existentes en `src/styles/global.css`.

---

## 7. Reglas visuales para componentes

Cada componente debe parecer diseñado a medida.

Debe tener:

* proporción,
* aire,
* jerarquía,
* detalle sutil,
* buen responsive,
* coherencia con `src/styles/global.css`,
* ausencia de ruido decorativo.

Minimalista no significa vacío.

Se pueden usar detalles como:

* líneas finas,
* numeración discreta,
* serif editorial,
* fondos cálidos,
* contraste de superficies,
* acentos cuero/brass,
* placeholders amplios,
* bloques oscuros puntuales.

No usar:

* sombras fuertes,
* iconos grandes,
* gradientes llamativos,
* pespuntes decorativos,
* texturas fuertes de cuero,
* marrón dominante,
* botones enormes,
* cards SaaS,
* efectos complejos.

---

## 8. Componentes actuales

Organización recomendada:

```txt
src/components/
  layout/
    Header.astro
    Footer.astro
    PageShell.astro
    NavLink.astro

  ui/
    Badge.astro
    Breadcrumbs.astro
    Button.astro
    Container.astro
    SectionHeader.astro
    FeaturedCard.astro
    CategoryPillList.astro
    ContactInfoCard.astro
    ImagePlaceholder.astro
    SectionDivider.astro

  sections/
    HomeHero.astro
    PageHero.astro
    CompanyIntro.astro
    FeaturedCategories.astro
    FeaturedProducts.astro
    B2BAccessBlock.astro
    FeaturedGrid.astro
    FinalCTA.astro
    ArticleHeader.astro

  blog/
    BlogCard.astro
    BlogGrid.astro

  product/
    ProductCard.astro
    ProductGrid.astro
    ProductGallery.astro
    ProductInfo.astro
    RelatedProducts.astro
    RestrictedPriceCTA.astro
```

La carpeta `product/` ya existe. Tratarla como base preparatoria B2B, no como ecommerce terminado.

No crear nuevas carpetas de ecommerce/backend salvo instrucción explícita:

```txt
src/lib/supabase/
src/lib/auth/
src/lib/validation/
src/server/actions/
src/server/queries/
```

---

## 9. Criterios por componente

### NavLink

Pequeño, uppercase, fino, con hover sutil y estado activo discreto.

Usar:

```txt
nav-link
```

Debe aceptar:

* `href`
* `label`
* `active`
* `aria-current` si aplica

---

### PageHero

Hero principal para páginas internas.

Debe usar:

```txt
page-hero
page-hero-inner
page-hero-content
page-hero-centered
display-serif
copy-lead
eyebrow
```

Debe ser amplio, editorial y claro.

---

### FeaturedCard

Para diferenciales como:

* Empresa familiar
* Desde 1988
* Fabricación artesanal
* Producto nacional
* Materiales nacionales
* Alta calidad

Debe usar:

```txt
feature-card
heading-card
copy-small
eyebrow
editorial-numeral
hover-craft
```

Sin iconos grandes ni aspecto de plantilla.

---

### FeaturedGrid

Grid para agrupar cards.

Debe recibir `slot`.

Usar:

```txt
grid-2
grid-3
grid-wide
```

---

### FinalCTA

Cierre editorial de página.

Debe ser elegante, no publicitario.

Usar:

```txt
final-cta
final-cta-content
button
button-inverse
```

---

### BlogCard

Debe parecer una card de revista, no un blog WordPress.

Usar:

```txt
blog-card
blog-card-media
blog-card-title
meta-label
copy-small
fine-link
image-placeholder
hover-image
```

---

### BlogGrid

Debe recibir `slot` y usar:

```txt
blog-grid
```

---

### ArticleHeader

Cabecera editorial de artículo.

Usar:

```txt
article-header
display-soft
copy-lead
breadcrumb
meta-label
```

---

### CategoryPillList

Categorías finas, pequeñas y editoriales.

Usar:

```txt
pill-list
pill
```

---

### ContactInfoCard

Datos de contacto sobrios.

Usar:

```txt
contact-card
meta-label
copy-body
copy-small
```

No usar iconos grandes.

---

### ImagePlaceholder

Debe parecer intencional, no provisional.

Usar:

```txt
image-placeholder
image-placeholder-warm
ratio-square
ratio-portrait
ratio-wide
ratio-hero
```

No usar imágenes externas aleatorias.

---

### SectionDivider

Separador muy sutil.

Usar:

```txt
section-divider
section-divider-label
divider
divider-soft
divider-editorial
```

---

### Componentes de producto

Los componentes en `src/components/product/` deben tratarse como presentación editorial B2B preparatoria.

Pueden mostrar:

* nombre de producto,
* categoría,
* referencia,
* descripción sobria,
* colores,
* tallas,
* materiales confirmados,
* imágenes locales o placeholders intencionales,
* mensajes tipo “precio privado” sin importe.

No deben mostrar:

* `wholesalePrice`,
* precios públicos,
* descuentos,
* stock real,
* botón de compra,
* carrito,
* checkout,
* login simulado,
* promesas de disponibilidad no confirmadas.

Usar siempre los getters públicos de `src/lib/products/getters.ts` cuando un producto se renderice en UI pública. No importar `products` directamente en componentes o páginas públicas si eso puede exponer campos privados.

---

### B2BAccessBlock / RestrictedPriceCTA

Estos bloques deben explicar acceso comercial de forma elegante y contenida.

Deben comunicar:

* relación profesional,
* consulta comercial,
* precios no públicos,
* atención directa,
* preparación para acceso mayorista futuro.

No deben fingir que ya existe auth, registro funcional, panel privado o aprobación automática.

---

## 10. Reglas de código

* Usar TypeScript en props.
* No usar `any`.
* No crear componentes gigantes.
* No mezclar página completa, datos y UI en un solo componente.
* No hardcodear datos de página dentro de componentes reutilizables.
* Los datos deben ir en `src/data/`.
* Las rutas centralizadas deben vivir en `src/lib/routes.ts`.
* La lógica de producto debe vivir en `src/lib/products/`.
* Los datos privados mock, como `wholesalePrice`, no deben renderizarse en UI pública.
* No añadir JavaScript si Astro estático basta.
* No usar React salvo necesidad real.
* No añadir dependencias sin permiso.

Ejemplo de props:

```ts
type Props = {
  title: string;
  description?: string;
  variant?: 'default' | 'muted' | 'inverse';
};
```

---

## 11. Copywriting

El tono debe ser:

* profesional,
* sobrio,
* claro,
* editorial,
* comercial B2B,
* elegante,
* directo.

Evitar:

* “la mejor calidad”
* “calidad insuperable”
* “producto único”
* “diseño exclusivo”
* “artesanía perfecta”
* “pasión por el cuero”
* “tradición y modernidad”
* “la elección perfecta”
* “excelencia hecha producto”

Preferir:

* empresa familiar,
* desde 1988,
* fabricación artesanal,
* producto nacional,
* materiales nacionales,
* marroquinería,
* complementos de cuero,
* cinturones,
* bolsos,
* acabados,
* selección de materiales,
* oficio,
* continuidad,
* relación profesional,
* Elche, Alicante.

No inventar datos ni claims no confirmados.

---

## 12. Páginas editoriales

### Inicio

Debe servir como presentación editorial y comercial.

Puede incluir:

* hero fuerte,
* introducción corporativa,
* diferenciales,
* bloque visual de oficio,
* últimos artículos,
* CTA final.

Puede enlazar a una base de catálogo B2B si ya existe y la tarea lo pide, pero no debe comportarse como tienda ni priorizar venta directa.

---

### Empresa / Quiénes Somos

Debe enfatizar:

* empresa familiar,
* fundada en 1988,
* fabricación artesanal,
* producto nacional,
* materiales nacionales,
* calidad,
* Elche, Alicante,
* oficio,
* continuidad,
* profesionalidad.

Estructura recomendada:

* hero editorial,
* introducción,
* historia,
* cards de diferenciales,
* bloque de oficio,
* bloque de materiales nacionales,
* CTA final.

---

### Catálogo preparatorio

Si se trabaja sobre `/catalogo` o componentes de producto, debe sentirse como catálogo editorial B2B, no como ecommerce retail.

Debe enfatizar:

* producto protagonista,
* consulta profesional,
* precios no públicos,
* categorías claras,
* fichas sobrias,
* materiales y referencias confirmadas,
* ausencia de compra directa.

No añadir todavía:

* carrito,
* checkout,
* filtros avanzados,
* reviews,
* wishlist,
* promociones,
* urgencia comercial,
* badges de descuento.

---

### Blog

Debe sentirse como sección editorial, no plantilla.

Categorías posibles:

* Empresa
* Marroquinería
* Fabricación
* Materiales
* Sector

---

### Contacto

Debe ser claro y comercial.

Debe incluir:

* datos de contacto,
* formulario visual,
* ubicación,
* mensaje para consultas profesionales,
* CTA final.

El formulario puede no ser funcional en esta fase.

---

## 13. SEO

Cada página debe tener:

* title,
* description,
* un solo H1,
* headings ordenados,
* URLs limpias,
* alt en imágenes,
* estructura semántica,
* Open Graph básico si existe sistema SEO.

Titles sugeridos:

```txt
Inicio · Emilio Faraoni
Empresa · Emilio Faraoni
Blog · Emilio Faraoni
Contacto · Emilio Faraoni
```

Si se publica catálogo preparatorio:

```txt
Catálogo · Emilio Faraoni
```

---

## 14. Accesibilidad

Obligatorio:

* enlaces como `<a>`,
* botones como `<button>` solo para acciones,
* alt descriptivos,
* labels en formularios,
* focus visible,
* contraste suficiente,
* navegación por teclado,
* `aria-current` para navegación activa,
* headings semánticos,
* no usar divs clicables.

---

## 15. Rendimiento

Reglas:

* evitar JS innecesario,
* evitar sliders,
* evitar librerías de animación,
* optimizar imágenes,
* usar Astro estático,
* no cargar dependencias UI,
* no usar imágenes externas aleatorias,
* evitar efectos pesados.

---

## 16. Futuro catálogo/ecommerce

El repositorio ya contiene una base local de catálogo:

* `src/data/products.ts`
* `src/data/categories.ts`
* `src/components/product/`
* `src/lib/products/`
* rutas centralizadas en `src/lib/routes.ts`

Esa base no equivale a ecommerce completo.

Más adelante se podrá añadir:

* catálogo completo,
* categorías reales,
* subcategorías,
* fichas de producto definitivas,
* precios privados protegidos,
* acceso mayorista real,
* Supabase,
* auth,
* panel mínimo,
* solicitudes comerciales.

No implementarlo ahora salvo instrucción explícita.

Cuando llegue esa fase, mantener la misma dirección:

* catálogo editorial,
* producto protagonista,
* B2B profesional,
* precios ocultos para público,
* arquitectura escalable.

---

## 17. Checklist antes de terminar

Antes de finalizar cualquier tarea, comprobar:

* ¿Respeta el estilo editorial ecommerce + marroquinería?
* ¿Parece diseñado a medida?
* ¿Evita estética WordPress?
* ¿Usa `src/styles/global.css` correctamente?
* ¿Evita Tailwind innecesario?
* ¿Es reutilizable?
* ¿Está tipado?
* ¿No usa `any`?
* ¿No añade dependencias?
* ¿No crea funcionalidades futuras sin permiso?
* ¿No expone precios privados ni datos B2B sensibles?
* ¿Es responsive?
* ¿Es accesible?
* ¿Compila sin errores?
* ¿El copy es sobrio?
* ¿No inventa datos?
* ¿Mantiene escalabilidad futura?

---

## 18. Principio final

La web debe parecer la evolución digital de una empresa familiar fabricante de marroquinería.

No debe parecer una tienda barata, una plantilla de WordPress ni un ecommerce de moda sin identidad.

Cada componente debe reforzar:

> Fabricación, oficio, producto nacional y presencia digital premium, editorial y escalable.
