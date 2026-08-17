# SYNC Fiestas

Sitio comercial de SYNC: experiencias interactivas para eventos.

## Tecnología

- React 19
- [vinext](https://github.com/cloudflare/vinext) con Vite
- CSS global y componentes TSX

## Requisitos

- Node.js `>=22.13.0`
- npm `>=10`

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí la dirección que indique la consola (normalmente `http://localhost:3000`).

## Build de producción

```bash
npm run build
```

## Calidad

```bash
npm run lint
```

## Publicación

El proyecto se publica en Vercel, conectado al repositorio de GitHub.

1. Importá el repositorio `sync-fiestas` desde Vercel.
2. Usá `npm run build` como comando de build.
3. Configurá la rama de producción como `main`.
4. Cada push a `main` dispara un nuevo deployment automáticamente.

No se requieren variables de entorno para la versión actual. Si se agregan en el
futuro, cargalas en la configuración de Vercel y nunca las confirmes en Git.

## Estructura relevante

- `app/`: páginas, componentes y estilos del sitio.
- `public/`: imágenes y otros assets estáticos.
- `src/data/`: contenido estructurado para clientes y reseñas.
- `package.json`: scripts y dependencias.
