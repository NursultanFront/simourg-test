<script setup lang="ts">
import { cocktailsList } from './data'
</script>

<template>
  <section class="main-page">
    <aside class="main-page__sidebar">
      <RouterLink v-for="item in cocktailsList" :key="item" :to="item">{{ item }}</RouterLink>
    </aside>

    <div class="main-page__content">
      <RouterView />
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-page {
  &__sidebar {
  }
  &__content {
  }
}
</style>
