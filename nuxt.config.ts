// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/eslint-module"],
  // https://tailwindcss.nuxtjs.org/getting-started/options
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/assets/css/tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true
  }
});
