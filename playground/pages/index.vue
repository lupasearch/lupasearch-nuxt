<script lang="ts" setup></script>

<template>
  <div class="wrapper">
    <div>
      <NuxtLink :to="'/search'">Test search</NuxtLink>
    </div>
    <div style="margin-top: 15px">
      <NuxtLink :to="'/ssr'">Test ssr search</NuxtLink>
    </div>
  </div>
</template>
