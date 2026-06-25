# Emilio Faraoni B2B · Web Catálogo Mayorista

## 0. Propósito de este documento

Este archivo define el contexto completo del proyecto **Emilio Faraoni B2B**.

Debe ser leído antes de realizar cualquier tarea de diseño, desarrollo, refactor, creación de componentes, integración de backend o modificación de arquitectura.

El objetivo es que cualquier IA/agente/desarrollador entienda:

* qué es el proyecto,
* qué tipo de web se está construyendo,
* qué funcionalidades tendrá ahora y más adelante,
* qué stack se utilizará,
* qué estilo visual debe respetarse,
* qué estructura de carpetas se espera,
* cómo se modelarán los productos,
* cómo funcionará el acceso mayorista,
* qué se debe evitar,
* cómo debe crecer el proyecto por fases.

No se debe implementar nada que contradiga este documento salvo instrucción explícita posterior.

---

# 1. Contexto del negocio

## 1.1 Empresa

**Emilio Faraoni** es una empresa/fabricante de cinturones, bolsos y marroquinería ubicada en Elche, Alicante.

La empresa tiene trayectoria en fabricación y venta mayorista. El objetivo de la nueva web es modernizar su presencia digital y convertirla en una herramienta comercial B2B clara, rápida, seria y profesional.

La web debe presentar a Emilio Faraoni como:

* fabricante,
* proveedor mayorista,
* empresa con trayectoria,
* especialista en marroquinería,
* proveedor para tiendas, distribuidores y compradores profesionales.

No debe parecer una tienda online B2C genérica.

---

## 1.2 Problema actual

La presencia digital anterior presentaba problemas de:

* imagen abandonada,
* estructura poco clara,
* catálogo poco profesional,
* experiencia de usuario débil,
* problemas de confianza,
* arquitectura web desordenada,
* falta de orientación comercial B2B,
* necesidad de separar venta mayorista de venta al consumidor final.

La nueva web debe resolver esto con una base limpia, ordenada, rápida y escalable.

---

## 1.3 Diferencia entre Emilio Faraoni y KingBelt

Este proyecto es únicamente para **Emilio Faraoni**.

La estrategia general del negocio separa dos canales:

### Emilio Faraoni

Canal B2B / mayorista.

* Web corporativa.
* Catálogo profesional.
* Precios privados.
* Registro de empresas.
* Validación manual.
* Contacto comercial.
* Solicitudes de productos.
* Captación de tiendas/distribuidores.

### KingBelt

Canal B2C / ecommerce.

* Venta directa al consumidor final.
* Precios públicos.
* Ecommerce.
* Pago online.
* Promociones.
* Producto orientado a usuario particular.

No mezclar ambos enfoques en esta web.

Emilio Faraoni debe ser serio, corporativo y mayorista.
KingBelt será la marca más comercial/B2C en otro proyecto.

---

# 2. Objetivo principal de la web

Crear una web catálogo B2B moderna para Emilio Faraoni.

La web debe permitir:

* presentar la empresa,
* mostrar categorías de productos,
* mostrar fichas de producto,
* ocultar precios al público general,
* permitir a empresas solicitar acceso mayorista,
* validar manualmente empresas antes de mostrar precios,
* mostrar precios solo a usuarios mayoristas aprobados,
* facilitar el contacto comercial.

---

# 3. Tipo de proyecto

Este proyecto NO es inicialmente un ecommerce completo.

No habrá en V1:

* pago online,
* checkout,
* gestión avanzada de stock,
* facturación,
* transportistas,
* logística,
* descuentos complejos,
* ERP,
* tarifas por cliente,
* panel administrativo avanzado.

La web será un:

**catálogo B2B con acceso privado para precios mayoristas.**

---

# 4. Alcance funcional por fases

## Fase 1 · Catálogo estático inicial

Primera fase del desarrollo.

Objetivo:

Crear una web navegable, profesional y estática usando datos locales.

Incluye:

* Inicio.
* Catálogo.
* Categorías.
* Fichas de producto.
* Empresa/About.
* Contacto.
* Datos mock de productos.
* Datos mock de categorías.
* Mensaje de precios restringidos.
* Diseño responsive.
* SEO base.
* Componentes limpios.

No incluye:

* Supabase.
* Login.
* Registro.
* Base de datos.
* Auth.
* Panel admin.
* Emails.
* Cesta.
* Backend.

Esta fase sirve para validar:

* estructura,
* diseño,
* modelo de producto,
* navegación,
* presentación del catálogo,
* estilo visual.

---

## Fase 2 · Backend y autenticación mayorista

Se implementará después de que la parte estática esté sólida.

Incluye:

* Supabase.
* Supabase Auth.
* Registro mayorista.
* Login.
* Logout.
* Recuperación de contraseña.
* Perfil de usuario.
* Empresa asociada al usuario.
* Estado de solicitud: pending / approved / rejected.
* Admin mínimo para aprobar/rechazar usuarios.
* Protección real de precios.
* Precios visibles solo para mayoristas aprobados.

---

## Fase 3 · Catálogo conectado a base de datos

Una vez validado el modelo estático, se migrará a base de datos.

Incluye:

* productos en Supabase/PostgreSQL,
* categorías,
* variantes,
* imágenes,
* precios mayoristas,
* carga inicial desde datos estructurados,
* queries centralizadas.

---

## Fase 4 · Solicitudes comerciales

Opcional o posterior.

Puede incluir:

* solicitud de información por producto,
* envío de consulta comercial por email,
* posible cesta simple de solicitud,
* email a la empresa con productos seleccionados,
* copia al comprador.

No es prioridad en la primera fase.

---

# 5. Stack técnico

## 5.1 Stack base

Usar:

* Astro
* TypeScript
* Tailwind CSS

Astro será el framework principal del proyecto.

El objetivo es una web:

* rápida,
* limpia,
* SEO-friendly,
* mantenible,
* modular,
* con poco JavaScript innecesario,
* preparada para zonas dinámicas privadas más adelante.

---

## 5.2 Stack futuro

Cuando se implemente backend/auth:

* Supabase Auth
* Supabase PostgreSQL
* Supabase Storage
* Supabase Row Level Security
* Zod
* Resend
* React Email
* Astro Actions o endpoints server-side
* Nanostores si hay cesta/interactividad ligera

---

## 5.3 Qué NO introducir sin necesidad

No introducir de inicio:

* Next.js,
* Prisma,
* Drizzle,
* Redux,
* Zustand,
* CMS externo,
* Shopify,
* WooCommerce,
* librerías UI pesadas,
* animaciones complejas,
* dependencias innecesarias.

Si una funcionalidad se puede resolver con Astro + TypeScript + Tailwind, hacerlo así.

---

# 6. Principios técnicos

## 6.1 Desarrollo por fases

No construir funcionalidades futuras antes de tiempo.

Primero:

1. datos locales,
2. catálogo estático,
3. rutas dinámicas,
4. UI sólida,
5. SEO base.

Después:

1. auth,
2. base de datos,
3. permisos,
4. precios privados,
5. emails,
6. admin.

---

## 6.2 Código limpio

El código debe ser:

* modular,
* legible,
* tipado,
* reutilizable,
* sin duplicación innecesaria,
* con nombres claros,
* sin lógica dispersa.

Cada componente debe tener una función concreta.

---

## 6.3 Separación de responsabilidades

No mezclar:

* lógica de datos con UI,
* estilos globales con lógica de producto,
* queries con componentes,
* datos mock con componentes,
* funciones SEO con layouts,
* lógica futura de auth en páginas públicas hasta que se implemente.

---

## 6.4 Escalabilidad razonable

El proyecto debe ser simple, pero no improvisado.

Debe permitir crecer hacia:

* Supabase,
* auth,
* productos reales,
* precios privados,
* admin mínimo,
* solicitudes comerciales.

La arquitectura inicial debe facilitar esa transición.

---

# 7. Estructura de carpetas recomendada

Usar una estructura similar:

```txt
src/
  components/
    layout/
      Header.astro
      Footer.astro
      PageShell.astro

    ui/
      Button.astro
      Badge.astro
      SectionHeader.astro
      Container.astro
      Breadcrumbs.astro

    product/
      ProductCard.astro
      ProductGrid.astro
      ProductGallery.astro
      ProductInfo.astro
      ProductMeta.astro
      RestrictedPriceCTA.astro
      RelatedProducts.astro

    sections/
      Hero.astro
      FeaturedCategories.astro
      FeaturedProducts.astro
      CompanyIntro.astro
      FinalCTA.astro

  data/
    products.ts
    categories.ts
    company.ts
    navigation.ts

  layouts/
    BaseLayout.astro

  pages/
    index.astro
    catalogo/
      index.astro
      [categoria].astro
    producto/
      [slug].astro
    empresa.astro
    contacto.astro
    acceso-mayorista.astro

  lib/
    products.ts
    categories.ts
    seo.ts
    utils.ts

  styles/
    global.css
```

Cuando se implemente backend:

```txt
src/
  lib/
    supabase/
      client.ts
      server.ts

    auth/
      session.ts
      permissions.ts

    validation/
      wholesale.ts
      contact.ts

  server/
    queries/
      products.ts
      users.ts
      companies.ts

    actions/
      auth.ts
      wholesale.ts
      contact.ts
```

---

# 8. Rutas de la web

## 8.1 Rutas públicas iniciales

```txt
/
```

Home / Inicio.

```txt
/catalogo
```

Listado general de productos.

```txt
/catalogo/[categoria]
```

Listado de productos filtrados por categoría.

```txt
/producto/[slug]
```

Ficha individual de producto.

```txt
/empresa
```

Página corporativa de la empresa.

```txt
/contacto
```

Página de contacto.

```txt
/acceso-mayorista
```

Página informativa para solicitar acceso mayorista. En Fase 1 puede ser informativa/CTA. En Fase 2 tendrá formulario real.

---

## 8.2 Rutas futuras

```txt
/login
/registro
/cuenta
/cuenta/pendiente
/admin
/admin/mayoristas
```

No implementarlas en Fase 1 salvo instrucción explícita.

---

# 9. Modelo de producto

## 9.1 Tipo Product

El producto debe poder funcionar primero con datos locales y más tarde con base de datos.

Modelo inicial recomendado:

```ts
export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  images: string[];
  colors: string[];
  sizes: string[];
  measurements?: string;
  materials?: string;
  reference?: string;
  wholesalePrice?: number;
  isFeatured?: boolean;
  isActive: boolean;
};
```

---

## 9.2 Campos explicados

### id

Identificador interno.

Ejemplo:

```txt
ef-001
```

### slug

URL limpia.

Ejemplo:

```txt
cinturon-piel-clasico
```

### name

Nombre del producto.

Ejemplo:

```txt
Cinturón de piel clásico
```

### category

Nombre visible de categoría.

Ejemplo:

```txt
Cinturones
```

### categorySlug

Slug de categoría.

Ejemplo:

```txt
cinturones
```

### shortDescription

Texto breve para card.

Ejemplo:

```txt
Cinturón de piel para uso diario con hebilla metálica y acabado sobrio.
```

### description

Texto algo más amplio para ficha de producto.

### images

Array de imágenes.

Ejemplo:

```ts
[
  "/images/products/cinturon-clasico-01.webp",
  "/images/products/cinturon-clasico-02.webp"
]
```

### colors

Colores disponibles.

Ejemplo:

```ts
["Negro", "Marrón", "Cuero"]
```

### sizes

Tallas disponibles.

Ejemplo:

```ts
["90", "95", "100", "105", "110"]
```

### measurements

Medidas generales.

Ejemplo:

```txt
Ancho aproximado: 3,5 cm
```

### materials

Materiales principales.

Ejemplo:

```txt
Piel y hebilla metálica
```

### reference

Referencia comercial.

Ejemplo:

```txt
EF-001
```

### wholesalePrice

Precio mayorista.

Importante:

* Puede estar en datos mock.
* No mostrar a usuarios públicos.
* En el futuro solo se mostrará a usuarios aprobados.

### isFeatured

Producto destacado para Home.

### isActive

Permite ocultar productos sin borrarlos.

---

# 10. Categorías

## 10.1 Categorías iniciales

Crear inicialmente:

* Cinturones
* Bolsos
* Carteras
* Accesorios

---

## 10.2 Tipo Category

```ts
export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  isActive: boolean;
};
```

---

# 11. Datos mock

En Fase 1 usar datos locales.

Archivos:

```txt
src/data/products.ts
src/data/categories.ts
```

Crear entre 8 y 12 productos mock realistas.

Evitar textos exagerados.

Productos sugeridos:

* Cinturón de piel clásico
* Cinturón vestir hebilla metálica
* Cinturón trenzado
* Cinturón casual piel envejecida
* Cinturón piel reversible
* Bolso piel mujer
* Bolso bandolera piel
* Cartera piel hombre
* Monedero piel
* Accesorio marroquinería

Estos productos son temporales y servirán para diseñar la estructura.

---

# 12. Reglas sobre precios

## 12.1 Fase 1

En Fase 1 no hay auth.

Por tanto:

* no mostrar precios,
* no mostrar tarifas,
* no mostrar descuentos,
* no mostrar condiciones internas.

Donde iría el precio, mostrar:

```txt
Precio disponible para clientes mayoristas registrados.
```

CTAs recomendados:

```txt
Solicitar acceso mayorista
Contactar con ventas
```

---

## 12.2 Fase 2 y posteriores

Los precios solo podrán verlos usuarios mayoristas aprobados.

Estados futuros:

```txt
public
pending
approved
rejected
admin
```

Regla crítica:

> Los precios no deben ocultarse solo visualmente. Si el usuario no está aprobado, los precios no deben enviarse desde servidor/base de datos.

No hacer:

```tsx
{isLoggedIn && <Price />}
```

si el precio ya está en el HTML, JSON o payload público.

Hacer:

* query pública sin precios,
* query privada con precios solo para usuario aprobado,
* control server-side,
* RLS en Supabase cuando se implemente.

---

# 13. Sistema futuro de acceso mayorista

## 13.1 Flujo previsto

Usuario público:

1. Entra en la web.
2. Ve catálogo sin precios.
3. Pulsa "Solicitar acceso mayorista".
4. Rellena formulario de empresa.
5. Su cuenta queda pendiente.
6. La empresa revisa los datos.
7. Admin aprueba o rechaza.
8. Si se aprueba, el usuario inicia sesión y ve precios.

---

## 13.2 Datos de registro mayorista

Formulario futuro:

* Nombre completo.
* Email.
* Teléfono.
* Contraseña.
* Nombre de empresa.
* CIF/NIF.
* Tipo de negocio.
* Ciudad.
* Provincia.
* País.
* Web o red social.
* Mensaje opcional.

---

## 13.3 Estados

```ts
type WholesaleStatus = "pending" | "approved" | "rejected";
type UserRole = "wholesale" | "admin";
```

---

## 13.4 Pantalla pendiente

Cuando el usuario se registre pero aún no esté aprobado:

```txt
Tu solicitud ha sido recibida.

Revisaremos los datos de empresa y activaremos el acceso si corresponde. Mientras tanto, puedes seguir navegando por el catálogo público sin precios.
```

---

# 14. Futuro modelo de base de datos

Cuando se migre a Supabase, usar una estructura aproximada:

## profiles

```txt
id
user_id
email
full_name
phone
role
status
created_at
updated_at
```

## companies

```txt
id
profile_id
company_name
tax_id
business_type
website
city
province
country
notes
created_at
updated_at
```

## categories

```txt
id
name
slug
description
sort_order
is_active
created_at
updated_at
```

## products

```txt
id
category_id
name
slug
sku
short_description
description
measurements
materials
is_public
is_active
sort_order
created_at
updated_at
```

## product_variants

```txt
id
product_id
sku
color
size
wholesale_price
min_quantity
stock_status
is_active
created_at
updated_at
```

## product_images

```txt
id
product_id
variant_id
url
alt
sort_order
is_primary
created_at
updated_at
```

## future_b2b_requests

Solo si se añade sistema de solicitud.

```txt
id
profile_id
company_id
status
message
created_at
updated_at
```

## future_b2b_request_items

```txt
id
request_id
product_id
variant_id
quantity
unit_price_snapshot
product_name_snapshot
variant_snapshot
```

---

# 15. Diseño visual

## 15.1 Dirección de arte

Emilio Faraoni debe sentirse:

* profesional,
* sobrio,
* cálido,
* editorial,
* B2B,
* limpio,
* industrial suave,
* artesanal sin parecer rústico,
* premium sin parecer lujo exagerado.

No debe parecer:

* tienda de moda joven,
* ecommerce agresivo,
* web motera,
* plantilla WooCommerce,
* web de dropshipping,
* catálogo barato,
* landing de marketing genérico.

---

## 15.2 Paleta visual orientativa

Usar tonos:

```txt
blanco cálido
beige
marrón cuero
negro suave
gris cálido
dorado apagado
arena
marfil
```

Ejemplo de paleta:

```txt
Background: #F7F3EC
Surface: #FFFFFF
Ink: #17130E
Muted: #766E63
Leather: #7A4E2A
Leather Dark: #3A2416
Gold Soft: #B8904A
Border: #E4DDD2
```

No usar:

* neones,
* rojo agresivo,
* negro puro excesivo,
* colores biker,
* efectos saturados.

---

## 15.3 Tipografía

Usar tipografías limpias, profesionales y legibles.

La web debe priorizar:

* legibilidad,
* jerarquía clara,
* estilo editorial,
* profesionalidad.

Tipografías posibles:

* Inter,
* DM Sans,
* Manrope,
* Cormorant Garamond para títulos si se quiere toque editorial,
* Playfair Display con moderación,
* Instrument Sans.

No usar tipografías demasiado decorativas.

---

## 15.4 Jerarquía tipográfica

Definir escala consistente:

```txt
Eyebrow: 11-12px uppercase
H1: 56-80px desktop / 38-48px mobile
H2: 36-52px desktop / 30-38px mobile
H3: 24-32px
Body: 16-18px
Small/meta: 13-14px
```

Evitar demasiados tamaños diferentes.

---

## 15.5 Espaciado

Usar sistema consistente:

```txt
Section padding desktop: 96px
Section padding tablet: 72px
Section padding mobile: 56px
Container max-width: 1120px - 1280px
Grid gap: 24px - 32px
Card padding: 20px - 28px
```

No hacer secciones comprimidas.

---

# 16. Copywriting

## 16.1 Tono

El tono debe ser:

* profesional,
* sobrio,
* claro,
* comercial B2B,
* directo,
* sin promesas exageradas,
* sin lenguaje publicitario barato.

---

## 16.2 Evitar

Evitar frases tipo:

* "la mejor calidad del mercado",
* "producto único",
* "diseño brutal",
* "calidad insuperable",
* "durabilidad extrema",
* "artesanía pura",
* "garantía absoluta",
* "la elección perfecta".

---

## 16.3 Preferir

Preferir lenguaje basado en:

* fabricación,
* catálogo,
* producto,
* materiales,
* trayectoria,
* venta mayorista,
* compradores profesionales,
* disponibilidad,
* contacto comercial,
* confianza,
* claridad.

---

## 16.4 Frases útiles

Posibles frases:

```txt
Fabricación y distribución mayorista de cinturones y marroquinería.
```

```txt
Catálogo profesional para tiendas, distribuidores y compradores especializados.
```

```txt
Precios disponibles únicamente para clientes mayoristas registrados.
```

```txt
Solicite acceso profesional para consultar tarifas y condiciones.
```

```txt
Una web orientada a facilitar el contacto comercial y la consulta de producto.
```

---

# 17. Páginas detalladas

## 17.1 Inicio

La home debe servir como entrada corporativa y comercial.

Debe incluir:

1. Hero corporativo.
2. Categorías principales.
3. Productos destacados.
4. Bloque de empresa/trayectoria.
5. Bloque B2B/mayorista.
6. CTA final.

---

### Hero

Debe comunicar rápido:

* quién es Emilio Faraoni,
* qué fabrica,
* a quién se dirige,
* qué puede hacer el comprador.

Ejemplo:

```txt
Fabricación mayorista de cinturones y marroquinería
```

Subtexto:

```txt
Catálogo profesional para tiendas, distribuidores y compradores especializados. Producto en piel, fabricación nacional y atención comercial directa.
```

CTAs:

```txt
Ver catálogo
Solicitar acceso mayorista
```

---

### Categorías principales

Mostrar:

* Cinturones
* Bolsos
* Carteras
* Accesorios

---

### Productos destacados

Mostrar 4-6 productos con `isFeatured`.

---

### Empresa/trayectoria

Bloque breve:

```txt
Desde 1976, Emilio Faraoni trabaja en el desarrollo y distribución de artículos de marroquinería para clientes profesionales.
```

---

### Bloque B2B

Explicar:

```txt
Los precios del catálogo están disponibles únicamente para clientes mayoristas registrados y aprobados por la empresa.
```

---

## 17.2 Catálogo

Debe incluir:

* título claro,
* descripción breve,
* links de categoría,
* grid de productos,
* mensaje de precios privados.

Ejemplo:

```txt
Catálogo profesional
```

```txt
Explore nuestra selección de cinturones, bolsos y artículos de marroquinería. Las tarifas están disponibles exclusivamente para clientes profesionales registrados.
```

---

## 17.3 Categoría

Cada categoría debe tener:

* título,
* descripción,
* listado filtrado,
* enlace al catálogo general,
* mensaje de precios privados.

---

## 17.4 Producto

Cada producto debe incluir:

* breadcrumb,
* galería,
* nombre,
* referencia,
* descripción,
* colores disponibles,
* tallas disponibles,
* medidas,
* materiales,
* precio restringido,
* CTA mayorista,
* CTA contacto,
* productos relacionados.

---

### Bloque de precio restringido

Mientras no haya login:

```txt
Precio disponible para clientes mayoristas registrados.

Solicite acceso profesional para consultar tarifas y condiciones.
```

Botones:

```txt
Solicitar acceso mayorista
Contactar con ventas
```

---

## 17.5 Empresa

Debe incluir:

* historia breve,
* trayectoria desde 1976,
* fabricación,
* especialización,
* ubicación,
* enfoque mayorista,
* valor para tiendas y distribuidores.

No hacer una página excesivamente larga.

---

## 17.6 Contacto

Debe incluir:

* datos de contacto,
* formulario visual,
* bloque para compradores mayoristas,
* CTA a acceso mayorista.

El formulario puede no ser funcional en Fase 1.

---

## 17.7 Acceso mayorista

En Fase 1 puede ser una página informativa.

Debe explicar:

* quién puede solicitar acceso,
* por qué los precios no son públicos,
* qué datos se pedirán,
* cómo se valida la empresa,
* qué verá el comprador aprobado.

En Fase 2 tendrá formulario real.

---

# 18. Componentes

## 18.1 Layout

### Header

Debe incluir:

* logo/nombre Emilio Faraoni,
* navegación principal,
* CTA a catálogo,
* CTA o link a acceso mayorista.

Navegación:

```txt
Inicio
Catálogo
Empresa
Contacto
```

Opcional:

```txt
Acceso mayorista
```

---

### Footer

Debe incluir:

* nombre de empresa,
* descripción corta,
* navegación,
* contacto,
* legal,
* copyright.

No usar información falsa.
Si los datos no están confirmados, usar placeholders claros y editables.

---

## 18.2 Producto

### ProductCard

Debe mostrar:

* imagen,
* categoría,
* nombre,
* descripción corta,
* colores,
* CTA "Ver producto",
* aviso de precio privado.

No debe mostrar precio en fase pública.

---

### ProductGrid

Recibe array de productos.

Debe ser responsive:

* 3 columnas desktop,
* 2 tablet,
* 1 mobile.

---

### ProductGallery

Debe mostrar:

* imagen principal,
* thumbnails si hay más de una,
* alt descriptivo.

Puede ser estática en Fase 1.

---

### RestrictedPriceCTA

Componente reutilizable.

Contenido:

```txt
Precio disponible para clientes mayoristas registrados.
```

Botones:

```txt
Solicitar acceso mayorista
Contactar con ventas
```

Este componente se usará en cards o ficha de producto.

---

# 19. SEO

## 19.1 SEO base

Cada página debe tener:

* title,
* description,
* canonical si procede,
* Open Graph básico,
* HTML semántico,
* headings correctos,
* alt en imágenes,
* URLs limpias.

---

## 19.2 Titles sugeridos

Home:

```txt
Emilio Faraoni · Fabricante de cinturones y marroquinería en Elche
```

Catálogo:

```txt
Catálogo mayorista de cinturones y marroquinería · Emilio Faraoni
```

Producto:

```txt
[Nombre del producto] · Catálogo mayorista Emilio Faraoni
```

Empresa:

```txt
Empresa · Emilio Faraoni
```

Contacto:

```txt
Contacto comercial · Emilio Faraoni
```

---

## 19.3 Descripciones sugeridas

Home:

```txt
Fabricación y distribución mayorista de cinturones, bolsos y artículos de marroquinería para tiendas y compradores profesionales.
```

Catálogo:

```txt
Consulte el catálogo profesional de Emilio Faraoni. Precios disponibles exclusivamente para clientes mayoristas registrados.
```

---

## 19.4 Schema futuro

Más adelante añadir:

* Organization,
* LocalBusiness,
* Product,
* BreadcrumbList,
* WebSite.

No es imprescindible en la primera tarea, pero la arquitectura debe permitirlo.

---

# 20. Imágenes

## 20.1 Fase 1

Usar imágenes placeholder locales o URLs temporales.

Rutas recomendadas:

```txt
/public/images/products/
/public/images/categories/
/public/images/company/
```

Usar `.webp` cuando sea posible.

---

## 20.2 Alt text

Cada imagen debe tener alt descriptivo.

Ejemplo:

```txt
Cinturón de piel clásico Emilio Faraoni en color negro
```

No usar alt genérico tipo:

```txt
imagen producto
```

---

# 21. Accesibilidad

Cuidar:

* contraste,
* navegación por teclado,
* botones con texto claro,
* links descriptivos,
* estructura de headings,
* labels en formularios,
* focus visible,
* alt en imágenes.

No sacrificar accesibilidad por estética.

---

# 22. Rendimiento

La web debe ser rápida.

Reglas:

* no cargar JS innecesario,
* optimizar imágenes,
* usar componentes Astro por defecto,
* usar React solo si hace falta interactividad,
* evitar sliders pesados,
* evitar librerías de animación pesadas,
* evitar fondos enormes sin optimizar.

---

# 23. Futuro sistema de emails

Cuando se implemente:

Usar Resend.

Emails mínimos:

* nueva solicitud mayorista recibida,
* solicitud aprobada,
* solicitud rechazada,
* nueva consulta comercial,
* copia al comprador si aplica.

No implementar en Fase 1.

---

# 24. Futuro panel admin

Admin mínimo futuro:

```txt
/admin/mayoristas
```

Funciones:

* ver solicitudes,
* ver empresa,
* ver CIF,
* ver email,
* ver teléfono,
* aprobar,
* rechazar.

No construir panel grande salvo instrucción explícita.

---

# 25. Decisiones importantes

## 25.1 Products primero

El primer paso real es definir productos, categorías y fichas.

La web gira alrededor del catálogo.

Por tanto, antes de auth/backend:

1. crear modelo de producto,
2. crear datos mock,
3. crear catálogo,
4. crear páginas dinámicas,
5. validar diseño.

---

## 25.2 Auth después

No implementar login al principio.

Primero debe existir una web catálogo pública sólida.

Después se añade la capa mayorista.

---

## 25.3 No construir ecommerce

No añadir:

* carrito de compra,
* checkout,
* pago,
* pedidos automáticos,
* stock avanzado.

Si se añade solicitud comercial, será posterior y simple.

---

# 26. Reglas para IA/agentes

## 26.1 Antes de editar

Antes de editar código:

1. Leer este `init.md`.
2. Entender la fase actual.
3. No implementar más de lo pedido.
4. Mantener arquitectura limpia.
5. Respetar estilo B2B.
6. Evitar funcionalidades no solicitadas.

---

## 26.2 Al crear código

El código debe:

* estar tipado,
* usar nombres claros,
* evitar duplicación,
* ser modular,
* usar componentes reutilizables,
* no mezclar lógica y presentación innecesariamente,
* mantener diseño consistente.

---

## 26.3 Al crear copy

El copy debe:

* sonar profesional,
* evitar exageración,
* hablar de fabricación, catálogo, producto y mayorista,
* no sonar a marketing barato,
* no usar claims no verificables.

---

## 26.4 Al crear componentes

Cada componente debe tener un objetivo.

No crear componentes demasiado grandes.

Separar:

* layout,
* UI,
* producto,
* secciones,
* lógica.

---

## 26.5 Al añadir dependencias

No añadir ninguna dependencia sin justificar.

Preferir:

* Astro,
* TypeScript,
* Tailwind,
* utilidades propias.

---

# 27. Criterios de aceptación de la Fase 1

La Fase 1 se considera correcta si:

* existe una home profesional,
* existe catálogo funcional,
* existen categorías dinámicas,
* existen productos dinámicos,
* las fichas de producto son claras,
* los precios no se muestran públicamente,
* hay mensaje de acceso mayorista,
* existe página empresa,
* existe página contacto,
* el diseño es coherente,
* el código es modular,
* los datos están centralizados,
* el SEO base está implementado,
* la web es responsive,
* no hay funcionalidades innecesarias.

---

# 28. Prioridades del proyecto

Orden de prioridad:

1. Claridad comercial.
2. Catálogo bien estructurado.
3. Diseño profesional B2B.
4. Código limpio.
5. SEO base.
6. Rendimiento.
7. Preparación para auth futura.
8. Escalabilidad.

No priorizar animaciones o efectos por encima de claridad.

---

# 29. Resumen ejecutivo

La web de Emilio Faraoni debe ser una plataforma catálogo B2B.

Primero se construirá una base estática con Astro, TypeScript y Tailwind.

Después se añadirá Supabase Auth para permitir registro/login de empresas y precios privados.

El producto y la categoría son el centro del proyecto.

El diseño debe ser sobrio, serio y profesional.

No se debe construir un ecommerce ni un sistema complejo de pedidos en esta primera etapa.

La regla más importante del proyecto futuro:

> Los precios mayoristas solo podrán verlos usuarios aprobados por la empresa.

La regla más importante de la fase actual:

> Crear primero un catálogo estático limpio, profesional y bien estructurado.

Ese es el contexto completo de lo que será la web
