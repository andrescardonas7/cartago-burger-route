# 📜 Cursor Rules - Cartago Burger Route

Estas reglas están inspiradas en la taxonomía y convenciones listadas en [cursor.directory/rules](https://cursor.directory/rules). Se definen para que el IDE Cursor clasifique, sugiera y autocomplete de forma óptima el código y los recursos del proyecto.

## 🔖 Tech Tags (stack principal)

| Categoría (Cursor) | Tag a usar                                       |
| ------------------ | ------------------------------------------------ |
| Core Framework     | `React`                                          |
| Build Tool         | `Vite`                                           |
| Type System        | `TypeScript`                                     |
| Styling            | `TailwindCSS`                                    |
| Animation          | `Framer Motion`                                  |
| State Management   | `Zustand`                                        |
| Graphics / Canvas  | `SVG`                                            |
| Tooling            | `Testing`, `Best Practices`, `Responsive Design` |

> Referencia: la página `cursor.directory/rules` lista estos tags como populares (`React12`, `Vite4`, `TailwindCSS5`, `TypeScript22`, `Zustand2`, `SVG` aparece en la categoría `Web Development`).

## 📁 Convenciones de Carpetas

```
src/
  components/    # Componentes React reutilizables
  hooks/         # Custom hooks (useScrollPath, useBurgerData)
  store/         # Zustand store(s)
  assets/        # SVG, iconos, imágenes optimizadas
  data/          # burgers.json (27 locales)
  styles/        # Archivos CSS/Tailwind layers adicionales
  pages/         # (Opcional) secciones mayores si crece el proyecto
```

## 📝 Reglas de Código y Documentación

1. **TypeScript First**  
   Toda lógica debe escribirse en `.tsx`/`.ts`.  
   `any` está prohibido salvo en tipados externos.

2. **Component Naming**  
   PascalCase para componentes (`BurgerCard`, `PathCanvas`).

3. **State Isolation**  
   Un único store Zustand `useBurgerStore.ts` con slices claros (uiSlice, dataSlice).

4. **SVG Management**  
   Rutas ilustradas en `assets/svg/route.svg` y se importan como ReactComponent usando vite-plugin-svgr.

5. **Framer Motion**  
   Animaciones declarativas; evita `setTimeout` imperativo.

6. **Tailwind Layers**  
   Utiliza `@layer components` para botones genéricos; no defines clases sueltas en JSX.

7. **Accessibility**  
   Respeta `prefers-reduced-motion`; `aria-label` en botones; contraste AA.

8. **Testing**  
   Usa `vitest` + `@testing-library/react` para unit tests; snapshot tests para SVG.

## 🚀 CI Checks

- `pnpm type-check` → `tsc --noEmit`
- `pnpm lint` → `eslint src/**/*.{ts,tsx}`
- `pnpm test` → `vitest run`
- `pnpm build` → `vite build`

## 📚 Documentación

- Mantén actualizado `README.md` y `WORKFLOW.md` con cada cambio sustancial.
- Cualquier regla nueva debe añadirse aquí para mantener sincronía con los tags de `cursor.directory`.

---

_Última actualización: Mayo 2025_
