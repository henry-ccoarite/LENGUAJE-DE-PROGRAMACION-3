# Venture Past Our Sky — sitio modular

## Cómo abrirlo xdxdxd
Solo abre `index.html` con doble clic (o arrástralo a tu navegador). No necesita servidor:
todos los `<script src="...">` son archivos JS planos locales, así que funcionan igual con
`file://` que con un servidor local.

## Estructura

```
index.html              <- carga todo, en el orden correcto
css/glass.css            <- el sistema "liquid glass" (los dos estilos de vidrio)
js-config/tailwind.config.js  <- fuentesgit  + el radio de borde "pill" por defecto
src/*.jsx                <- código fuente editable, uno por componente
build/*.js                <- versión ya compilada (NO la edites a mano)
build.sh                  <- recompila src/*.jsx -> build/*.js
```

## Si quieres modificar algo

1. Edita el archivo correspondiente dentro de `src/`:
   - `icons.jsx` → los íconos SVG
   - `FadingVideo.jsx` → la lógica del crossfade de los videos de fondo
   - `BlurText.jsx` → la animación de texto palabra por palabra
   - `Navbar.jsx` → el menú superior
   - `Hero.jsx` → la sección 1 (video, título, CTAs, stats, socios)
   - `Capabilities.jsx` → la sección 2 (video, título, las 3 tarjetas)
   - `App.jsx` → junta Hero + Capabilities y monta la app
2. Corre `./build.sh` (necesitas Node.js y `npm install -g typescript` una sola vez).
3. Recarga `index.html` en el navegador.

Si solo cambias texto, tags o clases de Tailwind (sin tocar la lógica), puedes editar
directamente el `.js` correspondiente dentro de `build/` — es JS normal (React.createElement),
solo que no vuelve a generarse desde el `.jsx` hasta que corras `build.sh` de nuevo.

## Notas
- Los dos videos de fondo (Hero y Capabilities) están definidos como constantes al principio
  de `Hero.jsx` y `Capabilities.jsx` — cambia la URL ahí para reemplazarlos.
- Tailwind, React, ReactDOM y Framer Motion se cargan desde CDN en `index.html`, así que
  necesitas conexión a internet para verlo (aunque los archivos locales no la requieren).
