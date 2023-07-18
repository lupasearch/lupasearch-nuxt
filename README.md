# LupaSearch Client - Nuxt

## Features

Nuxt module wrapper for LupaSearch client.

For full configuration options see [Main repository](https://github.com/lupasearch/lupasearch-client)

## Quick Setup

1. Add `LupaSearch` dependency to your project

```bash
# Using pnpm
pnpm add -D @getlupa/nuxt @getlupa/vue

# Using yarn
yarn add --dev @getlupa/nuxt @getlupa/vue

# Using npm
npm install --save-dev @getlupa/nuxt @getlupa/vue
```

2. Add `"@getlupa/nuxt"` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@getlupa/nuxt"],
});
```

That's it! You can now use LupaSearch Nuxt module in your Nuxt app ✨

## Basic usage

See main repo for full configuration examples.

```html
<script lang="ts" setup>
  import "@getlupa/vue/dist/style.css";

  const boxOptions = SEARCH_BOX_CONFIGURATION;

  const resultOptions = SEARCH_RESULTS_CONFIGURATION;
</script>

<template>
  <div>
    <div>
      <LupaSearchBox :options="boxOptions" />
    </div>
    <div style="margin-top: 25px">
      <LupaSearchResults :options="resultOptions"> </LupaSearchResults>
    </div>
  </div>
</template>
<style>
  .wrapper {
    margin: 25px;
  }
</style>
```

## Using Slots

```html
<script lang="ts" setup>
  import "@getlupa/vue/dist/style.css";

  const boxOptions = SEARCH_BOX_CONFIGURATION;
  const resultOptions = SEARCH_RESULTS_CONFIGURATION;
</script>

<template>
  <div>
    <div>
      <LupaSearchBox :options="boxOptions" />
    </div>
    <div style="margin-top: 25px">
      <LupaSearchResults :options="resultOptions">
        <template #productCard="props">
          <div :style="props.style">
            <div style="margin-bottom: 25px">{{ props.product.name }}</div>
          </div>
        </template>
      </LupaSearchResults>
    </div>
  </div>
</template>
```

## SSR

To enable full SSR support (where initial content is rendered on a server) there are some additional steps.

1. Use `getInitialSearchResults` helper from `@getlupa/vue` to load initial search results when page is loaded. Make sure to use blocking transaction, like `useAsyncData` if you want the content to be rendered in the server.

2. Pass the data to `initial-data` property of `LupaSearchResults` component.

3. Set the url path and base url as ssr parameters:

```js
const currentResultOptions = {
  ...resultOptions,
  // ... Other search result options
  ssr: {
    baseUrl: "http://localhost:3000",
    url: route.fullPath,
  },
};
```

Example setup:

```vue
<script lang="ts" setup>
import { SEARCH_BOX_CONFIGURATION } from "../constants/development/searchBoxDev.const";
import { SEARCH_RESULTS_CONFIGURATION } from "../constants/development/searchResultsDev.const";
import { useAsyncData, useRoute } from "nuxt/app";
import { getInitialSearchResults } from "@getlupa/vue";

import "@getlupa/vue/dist/style.css";

const route = useRoute();

const boxOptions = SEARCH_BOX_CONFIGURATION;

const resultOptions = SEARCH_RESULTS_CONFIGURATION;

const currentResultOptions = {
  ...resultOptions,
  ssr: {
    baseUrl: "http://localhost:3000",
    url: route.fullPath,
  },
};

const { data } = await useAsyncData(
  async () => await getInitialSearchResults(currentResultOptions)
);
</script>

<template>
  <div class="wrapper">
    <div>
      <LupaSearchBox :options="boxOptions" />
    </div>
    <div>
      <LupaSearchResults :options="currentResultOptions" :initial-data="data" />
    </div>
  </div>
</template>
<style>
.wrapper {
  margin: 25px;
}
</style>
```

## Product grid with SSR

Search results content rendered on server-side does not support `grid` option that usually allows to set product grid column size programatically.

Instead, product column grid must be styled using your own css on LupaSearch classes.

Css example for a simple, responsive grid:

```css
.lupa-products {
  display: flex;
  flex-wrap: wrap;
}

.lupa-products > .lupa-search-result-product-card {
  box-sizing: border-box;
  width: calc(100% / 2); /* For small screens: 2 columns */
}

@media only screen and (min-width: 600px) {
  .lupa-products > .lupa-search-result-product-card {
    width: calc(100% / 3); /* For mid screens: 3 columns */
  }
}

@media only screen and (min-width: 1350px) {
  .lupa-products > .lupa-search-result-product-card {
    width: calc(100% / 5); /* For large screens: 5 columns */
  }
}
```

## Full Example

See `/playground` app to see full example with sample configuration using LupaSearch demo project.

You can run the playground using `yarn dev`.

Once the playground is running, navigate to `/search` for simplified integration example and `/ssr` for example with full SSR support.

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Release new version
npm run release
```
