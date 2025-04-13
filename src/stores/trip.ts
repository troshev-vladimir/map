import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { TripModel } from '@/app/models/trip.model'
import TripService from '@/app/services/trip.service'
import { TripMockApi } from '@/api/trip/trip.mock'
import useSystemData from './composables/useSystemData'

const tripService = new TripService(new TripMockApi())

export const useTripStore = defineStore('trips', () => {
  const trips = ref<TripModel[]>([])
  const selectedTrip = ref<TripModel | null>(null)

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

  function selectTrip(id: ID) {
    const trip = tripService.selectTrip(id, trips.value)

    if (trip) {
      selectedTrip.value = trip
    } else {
      selectedTrip.value = null
    }
  }

  return { fetchAllTrips, selectTrip, selectedTrip, trips, isLoadding }
})
