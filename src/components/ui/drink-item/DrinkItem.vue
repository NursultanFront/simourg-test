<script setup lang="ts">
import type { Cocktail } from '@/api/cocktail-rest/types'
import { computed } from 'vue'

interface IProps {
  data: Cocktail
}

const props = defineProps<IProps>()

const ingredients = computed(() => {
  const result: string[] = []
  for (let i = 1; i <= 15; i++) {
    const key = `strIngredient${i}` as keyof Cocktail
    const value = props.data[key]
    if (value) {
      result.push(value)
    }
  }
  return result.filter((item) => item)
})

const measures = computed(() => {
  const result: string[] = []
  for (let i = 1; i <= 15; i++) {
    const key = `strMeasure${i}` as keyof Cocktail
    const value = props.data[key]
    if (value) {
      result.push(value.trim())
    }
  }
  return result
})
</script>

<template>
  <article class="drink-item">
    <div class="drink-item__content content-box">
      <div class="content-box__title">
        {{ props.data.strCategory }} {{ props.data.strAlcoholic }} {{ props.data.strGlass }}
      </div>
      <div class="content-box__subtitle">List of ingridients</div>
      <div class="content-box__wrapper">
        <ul>
          <li v-for="(item, index) in ingredients" :key="index">{{ item }}</li>
        </ul>
        <ul>
          <li v-for="(item, index) in measures" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="drink-item__image">
      <img :src="props.data.strDrinkThumb" alt="" />
    </div>
  </article>
</template>

<style scoped></style>
