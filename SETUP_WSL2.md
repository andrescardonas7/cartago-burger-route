# Configuración del Proyecto usando WSL2

WSL2 (Windows Subsystem for Linux 2) te permitirá evitar completamente los problemas de SSL que estás experimentando en Windows.

## Instalación de WSL2

1. **Abrir PowerShell como Administrador** y ejecutar:
   ```powershell
   wsl --install
   ```

2. **Reiniciar tu computadora** cuando se te solicite

3. **Configurar Ubuntu** (se abrirá automáticamente después del reinicio):
   - Crear un nombre de usuario y contraseña

## Configuración del Entorno de Desarrollo

1. **Abrir Ubuntu** desde el menú de inicio

2. **Actualizar el sistema**:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. **Instalar Node.js y npm**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Clonar tu proyecto**:
   ```bash
   cd ~
   git clone https://github.com/tu-usuario/cartago-burger-route.git
   cd cartago-burger-route
   ```

5. **Instalar dependencias**:
   ```bash
   npm install
   ```

6. **Ejecutar el proyecto**:
   ```bash
   npm run dev
   ```

## Acceder a los archivos desde Windows

- Los archivos de WSL están en: `\\wsl$\Ubuntu\home\tu-usuario\`
- Puedes abrir esta ruta en el Explorador de Windows
- También puedes usar Visual Studio Code con la extensión "WSL"

## Ventajas de WSL2

- ✅ Evita completamente los problemas de SSL de Windows
- ✅ Mejor rendimiento para herramientas de desarrollo
- ✅ Compatibilidad nativa con herramientas de Linux
- ✅ Integración perfecta con Docker Desktop
- ✅ Puedes seguir usando tu editor favorito en Windows 