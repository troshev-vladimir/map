import api from '@/api/bootstrap'

class TransactionService {
  constructor() {}

  getAll() {
    return api.transaction.getAll()
  }
}

export default new TransactionService()
