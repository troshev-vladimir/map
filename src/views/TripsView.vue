<template>
  <h1 class="text-3xl font-bold underline">Trips</h1>
  <TripsFilter class="my-5" v-model="filters" />
  <div class="flex gap-5">
    <div class="h-200 w-1/2">
      <h2 class="text-2xl font-bold">Map</h2>
      <MapItem />
    </div>
    <div class="w-1/2">
      <h2 class="text-2xl font-bold">List</h2>
      <TripsTable />
    </div>
  </div>
</template>
<script setup lang="ts">
import TripsTable from '@/components/Features/TripsTable.vue'
import TripsFilter, { type IFilters } from '@/components/Features/TripsFilter.vue'
import MapItem from '@/components/Features/MapItem.vue'
import { reactive, onMounted } from 'vue'
import { useTripStore } from '@/stores/trip'
import useState from '@/composables/state'
import { toReactive } from '@vueuse/core'

const { setTheme } = useState()
const { state } = toReactive(useState())

onMounted(() => {
  console.log(state)
  setTheme(String('asdasd'))
  console.log(state)
})

const filters = reactive<IFilters>({
  dateFrom: '',
  dateTo: '',
  type: 'income',
})

const { fetchAllTrips } = useTripStore()

onMounted(async () => {
  await fetchAllTrips()
})
</script>
