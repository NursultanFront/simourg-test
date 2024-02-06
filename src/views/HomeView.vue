<script setup lang="ts">
import DrinkItem from '@/components/drink-item/DrinkItem.vue'
import { useCocktailStore } from '@/stores/cocktail'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const store = useCocktailStore()

const route = useRoute()

const routeName = computed(() => route.params.cocktail_code as string)

onMounted(() => {
  store.fetchCocktail(routeName.value)
})
</script>

<template>
  <DrinkItem v-for="(item, index) in store.cocktails[routeName]" :key="index" :data="item" />
</template>
