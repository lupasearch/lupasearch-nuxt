<script lang="ts" setup>
import { useAsyncData, useRoute } from "nuxt/app";
import { getInitialSearchResults } from "@getlupa/vue";
import { SEARCH_BOX_CONFIGURATION } from "../constants/development/searchBoxDev.const";
import { SEARCH_RESULTS_CONFIGURATION } from "../constants/development/searchResultsDev.const";

import "@getlupa/vue/dist/style.css";

const boxOptions = SEARCH_BOX_CONFIGURATION;

const resultOptions = SEARCH_RESULTS_CONFIGURATION;

const currentResultOptions = {
  ...resultOptions,
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
    <div style="margin-top: 25px">
      <LupaSearchResults :options="currentResultOptions" :initial-data="data">
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
