<script setup lang="ts">
import { ref } from 'vue'
import { cocktailsList } from './data'
import { useCocktailStore } from '@/stores/cocktail'
import UiButton from '@/components/ui/button/UiButton.vue'

const store = useCocktailStore()
const isShowMenu = ref(false)

const handleMenuButton = () => {
  isShowMenu.value = !isShowMenu.value
}

const handleLinkClick = (value: string) => {
  store.fetchCocktail(value)
  isShowMenu.value = false
}
</script>

<template>
  <section class="main-page">
    <UiButton class="main-page__mobile-btn" @click="handleMenuButton">{{
      !isShowMenu ? 'Show menu' : 'Hide Menu'
    }}</UiButton>
    <div class="main-page__wrapper">
      <aside class="main-page__sidebar" :class="{ ['main-page__sidebar--active']: isShowMenu }">
        <RouterLink
          v-for="item in cocktailsList"
          :key="item"
          :to="item"
          class="main-page__link"
          active-class="main-page__link--active"
          @click="handleLinkClick(item)"
        >
          {{ item }}
        </RouterLink>
      </aside>

      <main class="main-page__content" :class="{ ['main-page__content--active']: isShowMenu }">
        <RouterView />
      </main>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main-page {
  margin: 50px 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &__wrapper {
    overflow: hidden;
    position: relative;

    display: flex;

    width: 100%;
    height: 100%;
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-end;
    }
  }

  &__sidebar {
    padding: 30px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    border: 1px solid var(--vt-c-text-dark-2);
    border-right: none;

    @media (max-width: 576px) {
      position: absolute;
      transform: translateX(-100%);
      z-index: 1;
      background: var(--color-background);
      top: 0;
      left: 0;
      bottom: 0;
      border: 1px solid var(--vt-c-text-dark-2);
    }

    &--active {
      @media (max-width: 576px) {
        transform: translateX(0%);
      }
    }
  }
  &__content {
    padding: 20px;
    flex-grow: 1;
    overflow-y: auto;
    border: 1px solid var(--vt-c-text-dark-2);

    @media (max-width: 576px) {
      width: 100%;
    }

    &--active {
      filter: blur(5px);
    }
  }

  &__mobile-btn {
    display: none;
    margin-bottom: 10px;

    @media (max-width: 576px) {
      display: block;
      margin-bottom: 10px;
    }
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
</style>
