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
  async setup() {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/lupaSearch"));

    const path = "@getlupa/vue";

    addComponent({
      name: "LupaSearchBox",
      export: "SearchBox",
      filePath: path,
    });

    addComponent({
      name: "LupaSearchResults",
      export: "SearchResults",
      filePath: path,
    });

    addComponent({
      name: "LupaRecommender",
      export: "Recommender",
      filePath: path,
    });
  },
});
