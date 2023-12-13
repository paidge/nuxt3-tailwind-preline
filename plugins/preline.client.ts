import "preline/preline";

declare const HSStaticMethods: {
  autoInit(collection?: string | string[]): void;
};

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook("page:finish", () => {
    HSStaticMethods.autoInit();
  });
});
