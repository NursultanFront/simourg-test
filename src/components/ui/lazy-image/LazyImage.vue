<template>
  <img
    v-lazy="{
      src: props.imageSrc,
      loading: LoadingIcon,
      error: ErrorIcon,
      delay: 500
    }"
    :alt="props.altText"
  />
</template>

<script setup lang="ts">
import LoadingIcon from '@/assets/ZKZg.gif'
import ErrorIcon from '@/assets/Error.png'
interface IProps {
  imageSrc: string
  altText?: string
}

const props = withDefaults(defineProps<IProps>(), {
  altText: 'Картинка'
})
</script>
