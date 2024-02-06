<script setup lang="ts">
import DrinkItem from '@/components/drink-item/DrinkItem.vue'
import { useCocktailStore } from '@/stores/cocktail'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const store = useCocktailStore()

const route = useRoute()

onMounted(() => {
  const cocktailName = route.params.cocktail_code as string
  store.fetchCocktail(cocktailName)
})
</script>

<template>
  <DrinkItem v-for="(item, index) in store.cocktails" :key="index" :data="item" />
</template>
