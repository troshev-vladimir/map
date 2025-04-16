import type { TripRepository } from '@/app/repositories/trip/repositoryInterface'
import type { TripModel } from '../models/trip.model'
import type { Pagination } from '@/api/types'

class TransactionService {
  constructor(readonly repository: TripRepository) {}

  getAll(pagination: Pagination) {
    return this.repository.getAll(pagination)
  }

  selectTrip(id: ID, trips: TripModel[]) {
    return trips.find((trip) => trip.id === id)
  }
}

export default TransactionService
