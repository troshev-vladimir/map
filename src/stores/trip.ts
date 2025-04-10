import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { TripModel } from '@/app/models/trip.model'
import TripService from '@/app/services/trip.service'
import { TripApi } from '@/api/trip/trip.axios'
import useSystemData from './composables/useSystemData'

const tripService = new TripService(new TripApi())

export const useTripStore = defineStore('transaction', () => {
  const trips = ref<TripModel[]>([])

  const { isActual, isLoadding } = useSystemData()

  function fetchAllTrips() {
    isLoadding.value = true
    if (isActual.value) {
      return new Promise((resolve) => {
        resolve(trips.value)
        isLoadding.value = false
      })
    }

    return tripService.getAll().then((data) => {
      trips.value = data
      isActual.value = true
      isLoadding.value = false
    })
  }

  return { fetchAllTrips, trips, isLoadding }
})
