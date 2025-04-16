<template>
  <div v-bind="containerProps" class="h-200 overflow-auto rounded">
    <div v-bind="wrapperProps">
      <div v-for="{ index, data } in list" :key="index" @click="emit('item-click', data)">
        {{ data }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="Item extends Record<string, unknown>">
import { toRefs } from 'vue'
import type { IEmits, IProps } from './types'
import { useVirtualList } from '@vueuse/core'
const props = withDefaults(defineProps<IProps<Item>>(), {
  items: () => [],
})

const emit = defineEmits<IEmits<Item>>()

const { items } = toRefs(props)

const { list, containerProps, wrapperProps } = useVirtualList(items, {
  itemHeight: 20,
  overscan: 10,
})
</script>

<style lang="scss"></style>
