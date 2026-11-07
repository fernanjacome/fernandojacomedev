# Revisión y modernización — 6 de noviembre de 2026

## Estado encontrado

- Next.js 15.5.18 y React 19.1.0 instalados, con herramientas y paquetes desactualizados.
- Escena Three.js global, texturas y animaciones continuas para presentar contenido mayormente textual.
- Página completa cliente, contexto de sección y eventos de scroll; desplazamiento forzado y contenido escondido en pestañas.
- Zoom deshabilitado mediante viewport. Contenido con edad, semestre y CV de 2025.
- Datos profesionales repartidos entre componentes; README genérico; ausencia de canonical y sitemap.
- Árbol de trabajo ya modificado al iniciar. Se conservó una copia del estado previo en `archive/previous-portfolio/` antes de sustituirlo.
- `npm audit` inicial: 14 vulnerabilidades (1 crítica, 6 altas, 7 moderadas). Incluía dependencias fijadas mediante overrides antiguos.

## Cambios

- Página de servidor con HTML semántico. Navegación por anclas y expansión nativa de casos con `details`. La galería es el único componente cliente; no se incorporan dependencias de animación/3D.
- Next.js y React actualizados; ESLint con configuración plana nativa. Dependencias activas reducidas a Next.js, React y React DOM.
- Dirección visual técnica oscura: grafito y verde bosque, tipografía sans serif, composición de capturas en la portada, logos y proyectos en cuadrícula con casos destacados. Encabezados descriptivos y presentación personal directa, sin eslóganes.
- Cuatro casos concretos; experiencia y capacidades en una fuente de contenido tipada. Formación sin asumir titulación obtenida.
- Zoom habilitado, foco visible, enlace para saltar al contenido y respeto a movimiento reducido.
- Canonical, sitemap, robots e imágenes sociales generadas con la identidad nueva.
- Versión anterior y sus assets conservados en archivo, excluidos de TypeScript y ESLint y fuera de la carpeta pública.

## Límites

La nueva presentación no equivale a publicación ni a comprobación funcional de los productos externos. El contenido pendiente se enumera en `CONTENT.md`. El dominio canónico se conservó de la configuración previa; si el despliegue final cambia, actualizar `profile.url`.

## Verificación realizada

- `npm run lint`, `npm run typecheck` y `npm run build`: correctos. Las siete páginas generadas, incluidas las rutas de metadatos, se prerenderizan.
- Instalación limpia con el lockfile actualizado: correcta. `npm audit`: cero vulnerabilidades. Los overrides corrigen PostCSS y dependencias transitivas de las herramientas; el salto de minimatch se limita a versiones 7 o superiores para conservar la API antigua utilizada por otros plugins.
- Respuestas HTTP 200 para la portada, robots, sitemap, favicon SVG y ambas imágenes sociales. Canonical presente; zoom permitido.
- Revisión visual en navegador a 1440 × 900 y 390 × 844. Sin desbordamiento horizontal en móvil, incluidos los detalles de proyectos abiertos.
- Comprobación de las anclas internas y apertura de los cuatro casos mediante teclado.
- Se conservan los contactos anteriores como valores pendientes de ratificación. No se comprobó el funcionamiento de los sistemas ni los enlaces externos a productos.
- Rediseño con assets: compilación, lint y TypeScript correctos. Galerías de ODIN, Courier y Condor comprobadas en navegador; cambio de imagen, cierre por Escape y devolución del foco verificados. Sin imágenes rotas ni desbordamiento horizontal a 1440 y 390 píxeles.
