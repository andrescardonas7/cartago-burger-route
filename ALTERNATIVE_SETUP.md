# Alternativas para Ejecutar el Proyecto

Debido a los problemas de SSL/TLS en tu sistema Windows, aquí tienes varias alternativas para trabajar en el proyecto:

## 1. GitHub Codespaces (Recomendado - Gratis)

GitHub ofrece un entorno de desarrollo en la nube gratuito:

1. **Sube tu código a GitHub**
   ```powershell
   git add .
   git commit -m "Estructura inicial del proyecto"
   git push origin main
   ```

2. **Abre GitHub Codespaces**
   - Ve a tu repositorio en GitHub
   - Haz clic en el botón verde "Code"
   - Selecciona la pestaña "Codespaces"
   - Haz clic en "Create codespace on main"

3. **En el terminal de Codespaces**
   ```bash
   npm install
   npm run dev
   ```

## 2. StackBlitz (Inmediato - Sin configuración)

1. Ve a [stackblitz.com](https://stackblitz.com)
2. Haz clic en "Create a new project"
3. Selecciona "Vite + React + TypeScript"
4. Copia y pega tus archivos

## 3. Usar otra computadora

Si tienes acceso a otra computadora sin estos problemas de SSL:
1. Clona el repositorio
2. Ejecuta `npm install`
3. Ejecuta `npm run dev`

## 4. Máquina Virtual

1. Descarga VirtualBox
2. Instala Ubuntu en una VM
3. Desarrolla dentro de la VM

## Estado actual del proyecto

✅ **Ya creado:**
- Estructura de carpetas
- Archivos de configuración (package.json, tsconfig.json, etc.)
- Componentes básicos de React
- Datos de las hamburgueserías

❌ **Falta:**
- Instalar dependencias (node_modules)
- Ejecutar el servidor de desarrollo

## Próximos pasos

Una vez que puedas instalar las dependencias por cualquiera de estos métodos, el proyecto estará listo para ejecutarse con:

```bash
npm run dev
```

La aplicación mostrará una lista interactiva de las 27 hamburgueserías de Cartago con sus direcciones y enlaces a Google Maps. 