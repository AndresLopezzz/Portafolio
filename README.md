# Portafolio Web Estático - Andres Felipe Lopez Cabrera

Portafolio web estático generado desde un archivo JSON, con estilo profesional tipo ATS (Applicant Tracking System). Construido con Astro para un rendimiento óptimo.

## 📋 Características

- ✅ **Fácil de modificar**: Todo el contenido se gestiona desde `public/data/resume.json`
- ✅ **Estilo ATS profesional**: Diseño limpio y optimizado para sistemas de seguimiento de candidatos
- ✅ **Responsive**: Se adapta a diferentes tamaños de pantalla
- ✅ **Imprimible**: Optimizado para impresión
- ✅ **Construido con Astro**: Framework moderno para sitios estáticos
- ✅ **Descarga de PDF**: Botón para descargar el CV en formato PDF

## 🚀 Uso Rápido

### Desarrollo Local

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abre tu navegador en `http://localhost:4321`

### Build para Producción

```bash
npm run build
```

El sitio se generará en la carpeta `dist/`.

## 📝 Modificar el Contenido

Para actualizar tu portafolio, simplemente edita el archivo `public/data/resume.json`. La estructura es:

```json
{
  "personalInfo": {
    "name": "Tu Nombre",
    "location": "Ciudad, País",
    "email": "tu@email.com",
    "phone": "+57 1234567890"
  },
  "professionalProfile": "Tu perfil profesional...",
  "education": [...],
  "experience": [...],
  "technicalSkills": {...},
  "projects": [...],
  "programs": [...],
  "languages": [...]
}
```

### Ejemplos de Modificación

#### Agregar una nueva experiencia:
```json
{
  "position": "Nuevo Puesto",
  "company": "Nombre de la Empresa",
  "startDate": "Ene 2024",
  "endDate": "Presente",
  "responsibilities": [
    "Responsabilidad 1",
    "Responsabilidad 2"
  ]
}
```

#### Agregar un nuevo proyecto:
```json
{
  "name": "Nombre del Proyecto",
  "description": "Descripción del proyecto...",
  "technologies": ["React", "Node.js"],
  "link": "https://github.com/usuario/proyecto"
}
```

#### Agregar habilidades:
Edita las secciones dentro de `technicalSkills`:
- `languages`: Lenguajes de programación
- `frameworks`: Frameworks y librerías
- `tools`: Herramientas de desarrollo
- `other`: Otras habilidades

## 📁 Estructura del Proyecto

```
.
├── src/
│   ├── layouts/
│   │   └── Layout.astro    # Layout base
│   ├── pages/
│   │   └── index.astro     # Página principal
│   └── styles/
│       └── styles.css        # Estilos CSS (estilo ATS)
├── public/
│   ├── data/
│   │   └── resume.json      # Datos del currículum (EDITAR AQUÍ)
│   └── HDVAFLC-ENG.pdf      # PDF del CV
├── package.json              # Configuración del proyecto
├── astro.config.mjs         # Configuración de Astro
├── vercel.json               # Configuración de Vercel
└── README.md                 # Este archivo
```

## 🎨 Personalización del Estilo

Si deseas modificar el estilo visual, edita `src/styles/styles.css`. El diseño actual sigue las mejores prácticas ATS:

- Fuentes sans-serif limpias (Arial, Calibri)
- Colores neutros (negro, gris, blanco)
- Buena separación y espaciado
- Secciones claramente definidas
- Formato fácil de escanear

## 🌐 Despliegue en Vercel

Este proyecto está configurado y listo para desplegarse en Vercel. Sigue estos pasos:

### Opción 1: Desde la CLI de Vercel

1. Instala Vercel CLI (si no lo tienes):
   ```bash
   npm i -g vercel
   ```

2. En la raíz del proyecto, ejecuta:
   ```bash
   vercel
   ```

3. Sigue las instrucciones en pantalla para autenticarte y desplegar.

### Opción 2: Desde GitHub (Recomendado)

1. Sube tu proyecto a un repositorio de GitHub.

2. Ve a [vercel.com](https://vercel.com) e inicia sesión.

3. Haz clic en "Add New Project".

4. Importa tu repositorio de GitHub.

5. Vercel detectará automáticamente la configuración y desplegará tu sitio.

6. ¡Listo! Tu portafolio estará disponible en una URL como `tu-proyecto.vercel.app`.

### Opción 3: Arrastrar y Soltar

1. Ve a [vercel.com](https://vercel.com) e inicia sesión.

2. Arrastra la carpeta del proyecto directamente a la interfaz de Vercel.

3. Vercel desplegará automáticamente tu sitio.

### Otros Servicios de Hosting

También puedes desplegar en:

- **GitHub Pages**: Sube los archivos a un repositorio y activa GitHub Pages
- **Netlify**: Arrastra la carpeta o conecta tu repositorio
- **Cualquier servidor web**: Solo necesitas servir los archivos estáticos

## 📄 Licencia

Este proyecto es de uso personal.

---

**Nota**: Asegúrate de mantener el formato JSON válido al editar `resume.json`. Puedes usar un validador JSON online si tienes dudas.

## 📦 Instalación de Dependencias

Si clonas este repositorio, asegúrate de instalar las dependencias:

```bash
npm install
```

## 📄 Nota sobre el PDF

Asegúrate de copiar el archivo `HDVAFLC-ENG.pdf` a la carpeta `public/` antes de hacer el build. El botón de descarga lo buscará allí.

