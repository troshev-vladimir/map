<template>
  <div id="map"></div>

  {{ selectedTrip?.title }}
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import MapService from '@/app/services/map.service'
import { useTripStore } from '@/stores/trip'
import { storeToRefs } from 'pinia'

const tripStore = useTripStore()
const { selectedTrip } = storeToRefs(tripStore)

let map: MapService | null = null

watch(
  () => selectedTrip.value,
  (newVal) => {
    if (newVal) {
      map?.showTrip(newVal.points)
    }
  },
)

onMounted(() => {
  map = new MapService()
})
</script>

<style lang="scss">
#map {
  height: 600px;
  width: 100%;
}

img.selected {
  background-color: red;
}
</style>
