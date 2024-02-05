<script setup lang="ts">
import DrinkItem from '@/components/ui/drink-item/DrinkItem.vue'
import { useCocktailStore } from '@/stores/cocktail'

const store = useCocktailStore()
</script>

<template>
  <div>
    <DrinkItem v-for="(item, index) in store.cocktails" :key="index" :data="item" />
  </div>
</template>
