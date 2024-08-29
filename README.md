# Chorizo

Chorizo is a ~~cute dog in Far Cry 6~~ vite-based react template.

## Features

- [React 19](https://react.dev/blog/2024/04/25/react-19) (Canary,
  with [React Compiler](https://react.dev/learn/react-compiler))
- [File based routing](https://tanstack.com/router/latest/docs/framework/react/guide/file-based-routing)
- [Components, hooks auto importing](https://unplugin.unjs.io/showcase/unplugin-auto-import.html)
- [State Management via Jotai](https://jotai.org/)
- [Atomic CSS via UnoCSS](https://unocss.dev/)
- TypeScript

## Pre-packed

### UI

- [UnoCSS](https://unocss.dev/) - Atomic CSS Engine
- [unplugin-icons](https://github.com/unplugin/unplugin-icons) - Access thousands of icons as components on-demand
  - `@iconify-json/mdi` is installed and used in `Welcome` component as a demo, you remove it once you removed the
    `Welcome` Component.
  - `@svgr/core` & `@svgr/plugin-jsx` are required by `unplugin-icons`.

### Code Style

- [Prettier](https://prettier.io/) - No semi, single quote.
- [ESLint](https://eslint.org/) - JS, TS, React recommendation rules + UnoCSS + Prettier

### Quality of Life

- [unplugin-auto-import](https://unplugin.unjs.io/showcase/unplugin-auto-import.html) - Support for components, hooks and icons auto importing.
- [clsx](https://github.com/lukeed/clsx) - Constructing className strings conditionally.
- [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression) - Use gzip or brotli to compress resources.
- [vite-plugin-env-parse](https://github.com/yue1123/vite-plugin-env-parse) - Parse env string values to correct values, automatically generate types for them.
- [lefthook](https://github.com/evilmartians/lefthook) - Git hooks manager
  - If you don't use `git`, you can remove this, along with the `postinstall` script in `package.json`, `lefthook.yml` in the root folder.
