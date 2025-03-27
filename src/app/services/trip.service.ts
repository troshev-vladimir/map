import type { TripRepository } from '@/app/repositories/trip/repositoryInterface'

class TransactionService {
  constructor(readonly repository: TripRepository) {}

  getAll() {
    return this.repository.getAll()
  }
}

export default TransactionService
