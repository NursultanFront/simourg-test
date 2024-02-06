<script setup lang="ts">
import type { Cocktail } from '@/api/cocktail-rest/types'
import { useGetData } from '@/composable/useGetData'
import LazyImage from '@/components/ui/lazy-image/LazyImage.vue'
import { toRef } from 'vue'

interface IProps {
  data: Cocktail
}

const props = defineProps<IProps>()

const cocktailData = toRef(props.data)

const ingredients = useGetData('strIngredient', cocktailData)

const measures = useGetData('strMeasure', cocktailData)
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
      <LazyImage :image-src="props.data.strDrinkThumb" />
    </div>
  </article>
</template>

<style scoped lang="scss">
.drink-item {
  padding: 20px 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  & + & {
    margin-top: 20px;

    border-top: 1px solid hsla(160, 100%, 37%, 1);
  }
}

.content-box {
  display: flex;
  flex-direction: column;

  &__title {
    margin-bottom: 20px;
    color: hsla(160, 100%, 37%, 1);
  }

  &__subtitle {
    margin-bottom: 10px;
    color: hsla(160, 100%, 37%, 1);
  }

  &__wrapper {
    display: flex;
    gap: 10px;

    color: hsla(160, 100%, 37%, 1);
  }
}
</style>
