<template>
  <button :type="props.type" class="button" :class="`button_${props.size}`" :disabled="disabled">
    <slot />
  </button>
</template>
<script setup lang="ts">
type Size = 'large' | 'medium' | 'small' | 'extra_small' | 'borderless'

interface IProps {
  type?: HTMLButtonElement['type']
  size?: Size
  disabled?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'button',
  size: 'medium'
})
</script>
<style lang="scss">
.button {
  border: 0;
  padding: 13.5px 32px;
  transition-property: background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  font-size: 18px;
  border-radius: 4px;
  color: hsla(160, 100%, 37%, 1);
  border: 1px solid var(--vt-c-text-dark-2);
}

.button_medium {
  font-size: 16px;
  padding: 10.5px 24px;
}

.button_small {
  font-size: 14px;
  padding: 8px 16px;
}

.button_extra-small {
  font-size: 14px;
  padding: 4px 8px;
}

.button_borderless {
  padding: 0;
  font-weight: 700;
}
</style>
