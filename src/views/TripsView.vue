<template>
  <h1 class="text-3xl font-bold underline">Trips</h1>
  <TripsFilter class="my-5" v-model="filters" />
  <TripsTable />
</template>
<script setup lang="ts">
import TripsTable from '@/components/Features/TripsTable.vue'
import TripsFilter, { type IFilters } from '@/components/Features/TripsFilter.vue'
import { reactive, onMounted } from 'vue'
import { useTripStore } from '@/stores/trip'

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
