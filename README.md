# Nuxt 3 Starter Kit with Preline-UI (Tailwind) and Prettier/ESlint

- Look at the [Preline documentation](https://preline.co/docs/index.html) to learn more.

## Preline-UI

This library offers hundreds of component examples crafted with [Tailwind](https://tailwindcss.com/), dark mode and other possibilities. Thanks to this repo Preline-UI is already integrated in your [Nuxt3](https://nuxt.com/docs/getting-started/introduction) project.

This repo depends on [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/). You can customize Tailwind in the `./assets/css/tailwind.config.js` file and access to the [Tailwind Viewer](https://tailwindcss.nuxtjs.org/tailwind/viewer)

> to quickly visualize your Tailwind configuration with easy copy-pasting.

## Formatter and Linter

### 1. Formatter (Prettier)

[Prettier](https://prettier.io/) is used to format the code and since we are using Tailwind, the [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) package is included so that Tailwind classes are automatically sorted. You can customize the formatter in the `.prettierrc` file.

### 2. Linter (ESlint)

Since we are in a Nuxt Project, the [@nuxtjs/eslint-module](https://github.com/nuxt-modules/eslint) package is included. This one is using [@nuxt/eslint-config](https://github.com/nuxt/eslint-config). You can customize the linter in the `.eslintrc` file.
