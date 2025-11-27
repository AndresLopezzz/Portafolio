# 🚀 Guía de Configuración Rápida

## Pasos Iniciales

1. **Copia el PDF a la carpeta public:**
   ```bash
   cp HDVAFLC-ENG.pdf public/
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Prueba localmente:**
   ```bash
   npm run dev
   ```

4. **Build para producción:**
   ```bash
   npm run build
   ```

## Despliegue en Vercel

Una vez que hayas hecho commit y push a GitHub:

1. Vercel detectará automáticamente que es un proyecto Astro
2. Usará el comando `npm run build` automáticamente
3. El output directory será `dist/` (configurado en `vercel.json`)

¡Listo! Tu portafolio estará desplegado.

## Estructura de Archivos Importantes

- **Editar contenido**: `public/data/resume.json`
- **Editar estilos**: `src/styles/styles.css`
- **Editar página**: `src/pages/index.astro`
- **PDF del CV**: `public/HDVAFLC-ENG.pdf`

