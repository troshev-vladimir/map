<template>
  <!-- <UiTable :columns="cols" :rows="trips" @sort="sortOnServer" @row-click="select"></UiTable> -->

  <UiList :items="trips" @item-click="select"></UiList>
</template>
<script lang="ts" setup>
// import UiTable from '@/components/Ui/UiTable/UiTable.vue'
import { useTripStore } from '@/stores/trip'
import { storeToRefs } from 'pinia'
import type { TripModel } from '@/app/models/trip.model'
// import { ref } from 'vue'
// import type { TableCol } from '@/components/Ui/UiTable/types'
import UiList from '../Ui/UiList/UiList.vue'

const { trips } = storeToRefs(useTripStore())
const { selectTrip } = useTripStore()

// const cols = ref<TableCol<TripModel>[]>([
//   {
//     title: 'ID',
//     key: 'id',
//   },
//   {
//     title: 'Title',
//     key: 'title',
//   },
//   {
//     title: 'Description',
//     key: 'description',
//   },
//   {
//     title: 'Completed',
//     key: 'isCompleted',
//   },
//   {
//     title: 'Start Date',
//     key: 'startDate',
//   },
//   {
//     title: 'End Date',
//     key: 'endDate',
//   },
// ])

// Сортировка тоже на сервере должна быть
// const sortOnServer = (value: Record<string, unknown>) => {
//   const sortBy = value.sortBy as keyof TripModel
//   const desc = Number(value.desc) ? Number(value.desc) : -1

//   trips.value.sort((a: TripModel, b: TripModel) => {
//     if (a[sortBy] < b[sortBy]) return -desc
//     if (a[sortBy] > b[sortBy]) return desc
//     return 0
//   })
// }

const select = (el: unknown) => {
  const trip = el as TripModel
  selectTrip(trip.id)
}
</script>
<style lang="scss" scoped></style>
