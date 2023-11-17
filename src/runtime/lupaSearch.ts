import { LupaSearch } from "@getlupa/vue";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  LupaSearch.install(nuxtApp.vueApp)
});
