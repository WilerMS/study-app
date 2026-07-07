# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Despliegue en Railway

La app es una SPA de Vite: se compila a estáticos (`dist/`) y se sirven con `serve`
usando fallback de historial para que funcione el enrutado de React Router.

Config ya incluida en el repo:
- `railway.toml` — builder Nixpacks, `buildCommand` y `startCommand`, healthcheck en `/`.
- `package.json` → script `start`: `serve -s dist -l tcp://0.0.0.0:$PORT` (Railway inyecta `PORT`).
- `.nvmrc` + `engines.node >=22` — fija Node 22.

Pasos en Railway:
1. **New Project → Deploy from GitHub repo** y elige este repositorio (rama a desplegar).
   - Alternativa sin GitHub: `npm i -g @railway/cli`, `railway login`, `railway init`, `railway up`.
2. Railway detecta Nixpacks + pnpm automáticamente: instala con lockfile, ejecuta `pnpm run build` y arranca con `pnpm run start`. No hacen falta variables de entorno.
3. En **Settings → Networking → Generate Domain** para obtener la URL pública.

Probar el flujo de producción en local:

```bash
pnpm run build
PORT=3000 pnpm run start   # http://localhost:3000
```
