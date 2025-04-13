import type { TripRepository } from '@/app/repositories/trip/repositoryInterface'
import type { TripModel } from '../models/trip.model'

class TransactionService {
  constructor(readonly repository: TripRepository) {}

  getAll() {
    return this.repository.getAll()
  }

  selectTrip(id: ID, trips: TripModel[]) {
    return trips.find((trip) => trip.id === id)
  }
}

export default TransactionService
