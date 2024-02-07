<script setup lang="ts">
import DrinkItem from '@/components/drink-item/DrinkItem.vue'
import { useCocktailStore } from '@/stores/cocktail'
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = useCocktailStore()
const route = useRoute()
const router = useRouter()

const routeName = computed(() => route.params.code as string)

onMounted(() => {
  store
    .fetchCocktail(routeName.value)
    .then(() => {
      if (!store.cocktails[routeName.value]) {
        router.push('/not-found')
      }
    })
    .catch((error) => {
      console.error('Ошибка при загрузке данных:', error)
    })
})
</script>

<template>
  <DrinkItem v-for="(item, index) in store.cocktails[routeName]" :key="index" :data="item" />
</template>
