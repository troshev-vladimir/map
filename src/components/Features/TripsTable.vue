<template>
  <UiTable :columns="cols" :rows="trips" @sort="sortOnServer"></UiTable>
</template>
<script lang="ts" setup>
import UiTable from '@/components/Ui/UiTable/UiTable.vue'
import { useTripStore } from '@/stores/trip'
import { storeToRefs } from 'pinia'
import type { TripModel } from '@/app/models/trip.model'
import { ref } from 'vue'

const { trips } = storeToRefs(useTripStore())
const cols = ref<string[]>(['amount', 'type', 'date', 'description'])

// Сортировка тоже на сервере должна быть
const sortOnServer = (value: Record<string, string>) => {
  const sortBy = value.sortBy as keyof TripModel
  const desc = Number(value.desc) ? Number(value.desc) : -1

  trips.value.sort((a: TripModel, b: TripModel) => {
    if (a[sortBy] < b[sortBy]) return -desc
    if (a[sortBy] > b[sortBy]) return desc
    return 0
  })
}
</script>
<style lang="scss" scoped></style>
