<template>
  <!-- <UiTable :columns="cols" :rows="trips" @sort="sortOnServer" @row-click="select"></UiTable> -->
  {{ isLoadding }}
  <UiList
    :items="trips"
    :item-height="80"
    @item-click="select"
    @load-more="fetchTrips"
    :loading="isLoadding"
    :complete="isComplete"
  >
    <template #default="{ items }">
      <div
        class="flex h-20 cursor-pointer justify-between border-2 border-gray-200 bg-gray-900 p-4 hover:bg-gray-700"
      >
        <div>
          <h3 class="text-lg font-semibold">{{ items.title }}</h3>
          <p class="text-sm text-gray-600">{{ items.description }}</p>
        </div>
        <div>
          <span class="text-sm text-gray-500">Start: {{ items.startDate }}</span>
          <span class="text-sm text-gray-500">End: {{ items.endDate }}</span>
        </div>
      </div>
    </template>
  </UiList>
</template>
<script lang="ts" setup>
import { useTripStore } from '@/stores/trip'
import { storeToRefs } from 'pinia'
import type { TripModel } from '@/app/models/trip.model'
// import UiTable from '@/components/Ui/UiTable/UiTable.vue'
// import { ref } from 'vue'
// import type { TableCol } from '@/components/Ui/UiTable/types'
import UiList from '../Ui/UiList/UiList.vue'
import { computed } from 'vue'

const { trips, isLoadding, total } = storeToRefs(useTripStore())
const { selectTrip, fetchAllTrips } = useTripStore()

const pagination = {
  page: 1,
  perPage: 20,
}

const isComplete = computed(() => {
  return trips.value.length >= total.value
})

const fetchTrips = async () => {
  console.log('asdasd')

  pagination.page += 1
  await fetchAllTrips(pagination)
}

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
