<script lang="ts" setup>
import { SEARCH_BOX_CONFIGURATION } from "./constants/development/searchBoxDev.const";
import { SEARCH_RESULTS_CONFIGURATION } from "./constants/development/searchResultsDev.const";
import "@getlupa/vue/dist/style.css";

const boxOptions = SEARCH_BOX_CONFIGURATION;

const resultOptions = SEARCH_RESULTS_CONFIGURATION;
</script>

<template>
  <div class="wrapper">
    <div>
      <LupaSearchBox :options="boxOptions" />
    </div>
    <div style="margin-top: 25px">
      <LupaSearchResults :options="resultOptions">
        <!-- Possible to use productCard template slot in search results -->

        <!-- <template #productCard="props">
          <div :style="props.style">
            <div style="margin-bottom: 25px">
              {{ props.product.name }}
            </div>
          </div>
        </template> -->
      </LupaSearchResults>
    </div>
  </div>
</template>
<style>
.wrapper {
  margin: 25px;
}
</style>
