import "preline/preline";

declare const HSStaticMethods: {
  autoInit(collection?: string | string[]): void;
};

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hook("app:suspense:resolve", () => {
    HSStaticMethods.autoInit();
  });
});
