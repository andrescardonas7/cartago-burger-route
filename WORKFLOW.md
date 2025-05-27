# 🔄 Flujo de Trabajo - Cartago Burger Route

Este documento describe el flujo de trabajo establecido para el desarrollo del proyecto.

## 🌳 Estructura de Ramas

### Ramas Principales

- **`main`**: Rama de producción. Solo contiene código estable y desplegable.
- **`develop`**: Rama de integración. Aquí se integran todas las nuevas funcionalidades.

### Ramas de Funcionalidades

- **`feature/nombre-descriptivo`**: Para nuevas funcionalidades
- **`fix/nombre-descriptivo`**: Para corrección de bugs
- **`hotfix/nombre-descriptivo`**: Para correcciones urgentes en producción

## 🚀 Flujo de Desarrollo

### 1. Crear una nueva funcionalidad

```bash
# Asegúrate de estar en develop y actualizado
git checkout develop
git pull origin develop

# Crea una nueva rama para tu funcionalidad
git checkout -b feature/mapa-interactivo

# Desarrolla tu funcionalidad...
# Haz commits frecuentes con mensajes descriptivos
git add .
git commit -m "feat: añade mapa base con Leaflet"

# Sube tu rama
git push -u origin feature/mapa-interactivo
```

### 2. Crear Pull Request

1. Ve a GitHub y crea un Pull Request desde tu rama hacia `develop`
2. Completa la plantilla de PR con toda la información
3. Asigna reviewers si es necesario
4. Espera la revisión y aprobación

### 3. Merge y Limpieza

```bash
# Después del merge, limpia tu rama local
git checkout develop
git pull origin develop
git branch -d feature/mapa-interactivo
```

## 📝 Convenciones de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[scope opcional]: <descripción>

[cuerpo opcional]

[footer opcional]
```

### Tipos de Commits

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (espacios, comas, etc.)
- `refactor`: Refactorización de código
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplos

```bash
feat: añade mapa interactivo con marcadores
fix: corrige error de carga en dispositivos móviles
docs: actualiza README con instrucciones de instalación
style: formatea código según ESLint
refactor: reorganiza componentes del mapa
test: añade tests para filtros de búsqueda
chore: actualiza dependencias de desarrollo
```

## 🔍 Proceso de Revisión

### Para el Autor del PR

- [ ] Completa toda la plantilla de PR
- [ ] Asegúrate de que todos los tests pasan
- [ ] Verifica que no hay conflictos de merge
- [ ] Añade capturas de pantalla si hay cambios visuales
- [ ] Responde a comentarios de revisión

### Para el Revisor

- [ ] Revisa el código línea por línea
- [ ] Verifica que se siguen las convenciones
- [ ] Prueba los cambios localmente si es necesario
- [ ] Deja comentarios constructivos
- [ ] Aprueba o solicita cambios

## 🚨 Reglas de Protección

### Rama `main`

- ❌ No se puede hacer push directo
- ✅ Requiere Pull Request
- ✅ Requiere revisión aprobada
- ✅ Requiere que pasen todos los checks de CI

### Rama `develop`

- ❌ No se puede hacer push directo
- ✅ Requiere Pull Request
- ✅ Requiere que pasen todos los checks de CI

## 🤖 CI/CD Pipeline

### Checks Automáticos

1. **Code Quality**: Verifica estructura del proyecto
2. **Build**: Compila el proyecto (cuando se defina el stack)
3. **Tests**: Ejecuta tests unitarios y de integración
4. **Deploy**: Despliega a GitHub Pages (solo desde `main`)

### Estados de los Checks

- ✅ **Passing**: Todo correcto, se puede hacer merge
- ❌ **Failing**: Hay errores, revisar logs
- 🟡 **Pending**: En proceso de ejecución

## 📋 Issues y Project Management

### Tipos de Issues

- 🐛 **Bug Report**: Para reportar errores
- 🚀 **Feature Request**: Para solicitar nuevas funcionalidades
- 📚 **Documentation**: Para mejoras en documentación
- ❓ **Question**: Para preguntas generales

### Labels Principales

- `bug` - Errores que necesitan corrección
- `enhancement` - Nuevas funcionalidades
- `documentation` - Relacionado con documentación
- `good first issue` - Ideal para nuevos contribuidores
- `help wanted` - Se necesita ayuda externa
- `priority: high/medium/low` - Nivel de prioridad

## 🎯 Milestones

### v1.0.0 - MVP (Minimum Viable Product)

- [ ] Definir stack tecnológico
- [ ] Configurar entorno de desarrollo
- [ ] Convertir datos Excel a JSON
- [ ] Implementar mapa básico
- [ ] Diseño responsive básico

### v1.1.0 - Funcionalidades Avanzadas

- [ ] Sistema de filtros
- [ ] Búsqueda por texto
- [ ] Modo oscuro
- [ ] PWA básica

### v2.0.0 - Funcionalidades Premium

- [ ] Sistema de ratings
- [ ] Comentarios de usuarios
- [ ] Rutas optimizadas
- [ ] Integración con redes sociales

## 🆘 Comandos de Emergencia

### Deshacer último commit (sin push)

```bash
git reset --soft HEAD~1
```

### Deshacer cambios en archivo específico

```bash
git checkout -- archivo.js
```

### Crear hotfix urgente

```bash
git checkout main
git pull origin main
git checkout -b hotfix/error-critico
# Hacer cambios...
git commit -m "hotfix: corrige error crítico en producción"
git push -u origin hotfix/error-critico
# Crear PR hacia main Y develop
```

### Sincronizar fork (si aplica)

```bash
git remote add upstream https://github.com/original/repo.git
git fetch upstream
git checkout main
git merge upstream/main
```

---

## 📞 Contacto

Si tienes dudas sobre el flujo de trabajo:

- Crea un issue con label `question`
- Contacta a [@andrescardonas7](https://github.com/andrescardonas7)

---

_Última actualización: Mayo 2025_
