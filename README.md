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

## Full Example

See `/playground` app to see full example with sample configuration using LupaSearch demo project.

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
