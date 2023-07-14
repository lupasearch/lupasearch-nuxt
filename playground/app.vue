<script lang="ts" setup></script>

<template>
  <div class="wrapper">
    <NuxtPage />
  </div>
</template>
<style>
.wrapper {
  margin: 25px;
}

/* Grid styles must be defined with css when using server side rendering */
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
</style>
