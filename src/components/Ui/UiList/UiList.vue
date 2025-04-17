<template>
  {{ items.length }}

  <div v-bind="containerProps" class="h-200 overflow-auto rounded">
    <div v-bind="wrapperProps">
      <div
        v-for="{ index, data } in list"
        :key="index"
        @click="emit('item-click', data)"
        ref="item"
      >
        <slot :items="data">{{ data }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="Item extends Record<string, unknown>">
import { toRefs } from 'vue'
import type { IEmits, IProps } from './types'
import { useVirtualList, useInfiniteScroll } from '@vueuse/core'

const props = withDefaults(defineProps<IProps<Item>>(), {
  items: () => [],
  itemHeight: 80,
})

const emit = defineEmits<IEmits<Item>>()

const { items } = toRefs(props)

const { list, containerProps, wrapperProps } = useVirtualList(items, {
  itemHeight: props.itemHeight,
  overscan: 10,
})

useInfiniteScroll(
  containerProps.ref,
  () => {
    emit('load-more')
  },
  {
    distance: 10,
    canLoadMore: () => {
      return !props.loading && !props.complete
    },
  },
)
</script>

<style lang="scss"></style>
