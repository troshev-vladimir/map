<template>
  <h1 class="text-3xl font-bold underline">Point {{ route.params.id }}</h1>

  <PointTable />
</template>

<script setup lang="ts">
import { onBeforeRouteUpdate, onBeforeRouteLeave, useRoute } from 'vue-router'
import { usePointStore } from '@/stores/point'
import { onMounted } from 'vue'

import PointTable from '@/components/Features/PointTable'

const { fetchPoint } = usePointStore()
const route = useRoute()

onMounted(async () => {
  const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
  await fetchPoint(id)
})

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    console.log(to, from)
  }
})

onBeforeRouteLeave((to) => {
  const answer = window.confirm(
    'Do you really want to leave? you have unsaved changes!' + String(to.name),
  )
  // cancel the navigation and stay on the same page
  if (!answer) return false
})
</script>

<style lang="scss"></style>
