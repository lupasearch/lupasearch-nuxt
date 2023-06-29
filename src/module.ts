import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponent,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface LupaSearchOptions {}

export default defineNuxtModule<LupaSearchOptions>({
  meta: {
    name: "LupaSearch",
    configKey: "lupaSearch",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/lupaSearch"));

    addComponent({
      name: "LupaSearchBox",
      export: "SearchBox",
      filePath: "@getlupa/vue",
    });

    addComponent({
      name: "LupaSearchResults",
      export: "SearchResults",
      filePath: "@getlupa/vue",
    });

    addComponent({
      name: "LupaRecommender",
      export: "Recommender",
      filePath: "@getlupa/vue",
    });
  },
});
