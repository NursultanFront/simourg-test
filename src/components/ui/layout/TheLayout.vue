<script setup lang="ts"></script>

<template>
  <section class="main-page">
    <aside class="main-page__sidebar"></aside>

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
