# 🚀 Guía de Despliegue en Vercel

## Pasos Rápidos

### 1. Preparación

- Asegúrate de tener todos los archivos en tu proyecto
- Verifica que `data/resume.json` existe y tiene contenido válido

### 2. Opción A: Desde GitHub (Recomendado)

1. **Sube tu proyecto a GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/tu-repositorio.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**

   - Ve a [vercel.com](https://vercel.com)
   - Inicia sesión con GitHub
   - Haz clic en "Add New Project"
   - Selecciona tu repositorio
   - Vercel detectará automáticamente la configuración
   - Haz clic en "Deploy"

3. **¡Listo!** Tu sitio estará disponible en `tu-proyecto.vercel.app`

### 3. Opción B: Desde la Terminal

1. **Instala Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Despliega:**

   ```bash
   vercel
   ```

3. **Sigue las instrucciones:**
   - Inicia sesión o crea una cuenta
   - Confirma la configuración del proyecto
   - Vercel desplegará automáticamente

### 4. Opción C: Arrastrar y Soltar

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión
3. Arrastra la carpeta completa del proyecto
4. ¡Listo!

## 🔄 Actualizar el Contenido

Después de desplegar, cada vez que actualices `data/resume.json`:

1. **Si usas GitHub:** Haz commit y push, Vercel desplegará automáticamente
2. **Si usas CLI:** Ejecuta `vercel --prod` para actualizar

## ✅ Verificación

Después del despliegue, verifica que:

- El sitio carga correctamente
- El JSON se carga sin errores (revisa la consola del navegador)
- Todos los estilos se aplican correctamente
- Los enlaces de proyectos funcionan

## 🐛 Solución de Problemas

### El JSON no carga

- Verifica que `data/resume.json` existe en el repositorio
- Revisa la consola del navegador para errores
- Asegúrate de que el JSON es válido

### Los estilos no se aplican

- Verifica que `styles.css` está en la raíz
- Revisa las rutas en `index.html`

### Error 404

- Verifica que `index.html` está en la raíz del proyecto
- Asegúrate de que `vercel.json` está configurado correctamente

## 📝 Notas

- Vercel ofrece un dominio gratuito `.vercel.app`
- Puedes conectar un dominio personalizado desde el dashboard
- Cada push a GitHub desplegará automáticamente (si está configurado)
- Vercel ofrece SSL/HTTPS automático
