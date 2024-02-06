<script setup lang="ts">
import { cocktailsList } from './data'
import { useCocktailStore } from '@/stores/cocktail'

const store = useCocktailStore()
</script>

<template>
  <section class="main-page">
    <aside class="main-page__sidebar">
      <RouterLink
        v-for="item in cocktailsList"
        :key="item"
        :to="item"
        class="main-page__link"
        active-class="main-page__link--active"
        @click="store.fetchCocktail(item)"
      >
        {{ item }}
      </RouterLink>
    </aside>

    <main class="main-page__content">
      <RouterView />
    </main>
  </section>
</template>

<style scoped lang="scss">
.main-page {
  padding: 50px 0;

  display: flex;
  height: 100%;
  &__sidebar {
    padding: 30px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    border: 1px solid var(--vt-c-text-dark-2);
    border-right: none;
  }
  &__content {
    flex-grow: 1;
    overflow-y: auto;
    border: 1px solid var(--vt-c-text-dark-2);
  }

  &__link {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    &--active {
      opacity: 1;
    }
  }
}

a {
}
</style>
