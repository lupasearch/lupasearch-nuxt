export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
        },
      ],
    },
  },
  modules: ["../src/module"],
  devtools: { enabled: true },
});
