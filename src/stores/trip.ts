import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { TripModel } from '@/app/models/trip.model'
import TripService from '@/app/services/trip.service'
import { TripApi } from '@/api/trip/trip.axios'

const tripService = new TripService(new TripApi())

export const useTransactionStore = defineStore('transaction', () => {
  const transactions = ref<TripModel[]>([])

  function fetchAllTrips() {
    return tripService.getAll().then((data) => {
      transactions.value = data
    })
  }

  return { fetchAllTrips, transactions }
})
