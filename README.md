# Fernando Jácome · Portfolio profesional

Portafolio personal con Next.js App Router, React y TypeScript. Grafito y verde técnico, capturas reales, logos de los proyectos y trayectoria profesional.

## Desarrollo

Requiere Node.js 20.9 o posterior (preferible una versión LTS vigente).

```sh
npm ci
npm run dev
```

Abrir http://localhost:3000.

## Verificación y producción

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Editar contenido

- `src/content/portfolio.ts`: identidad, contacto, experiencia, capacidades y proyectos.
- `src/app/page.tsx`: estructura semántica de la página.
- `src/app/portfolio.module.css`: diseño y adaptación móvil.
- `src/app/globals.css`: paleta, tipografía del sistema y accesibilidad.
- `src/app/portfolio-layout.tsx` y `src/app/portfolio-seo.ts`: metadatos bilingües y datos estructurados. La URL pública se configura en `profile.url`.
- `src/app/social-card.tsx`: tarjetas sociales en español e inglés generadas con el logo de `public/brand.png`.

Los casos se expanden con HTML nativo. `src/app/components/ProjectMedia.tsx` contiene la galería con diálogo modal, navegación entre capturas y controles de teclado. El resto de la página se renderiza en el servidor. No hay librerías de animación ni escena 3D.

Las imágenes optimizadas están en `public/projects/` y `public/logos/`. Su procedencia está documentada en [ASSETS.md](docs/ASSETS.md); los archivos originales no se modifican.

## Contenido y publicación

Consultar [fuentes y pendientes editoriales](docs/CONTENT.md) y [revisión del proyecto](docs/PROJECT-REVIEW.md). Confirmar contactos, dominio y materiales pendientes antes de presentar la web como versión definitiva. No hay formulario, analítica, secretos ni acceso a los sistemas descritos.

`archive/previous-portfolio/` conserva la implementación y los cambios locales anteriores; no se compila ni se sirve. No utilizar su CV de 2025 como documento actualizado.
