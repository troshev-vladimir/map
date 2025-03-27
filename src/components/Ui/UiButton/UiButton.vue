<template>
  <button :class="classes" type="button">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IProps } from './types'

const props = withDefaults(defineProps<IProps>(), {
  variant: 'primary',
  label: '',
})

const classes = computed(() => {
  const classesArray: string[] = []

  classesArray.push('btn-' + props.variant)

  return classesArray.join(' ')
})
</script>

<style lang="scss" scoped></style>
