<script setup lang="ts">
import DrinkItem from '@/components/drink-item/DrinkItem.vue'
import { useCocktailStore } from '@/stores/cocktail'

const store = useCocktailStore()
</script>

<template>
  <DrinkItem v-for="(item, index) in store.cocktails" :key="index" :data="item" />
</template>
