<template>
  <div v-if="pointLoading" class="loading">Loading...</div>

  <pre v-else>
    {{ data }}
  </pre>
</template>

<script setup lang="ts">
// import type { IProps } from './types'
import { computed } from 'vue'
import { usePointStore } from '@/stores/point'
import { storeToRefs } from 'pinia'
// const props = defineProps<IProps>()

const { point, isLoadding: pointLoading } = storeToRefs(usePointStore())
const data = computed(() => {
  return point
})
</script>

<style lang="scss"></style>
