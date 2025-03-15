import type Repository from '../repositoryInterface'
import type { Transaction } from '@/app/models/transaction.model'
import type { AddTransactionDTO } from '@/api/transactions/repositories/dto/addTransactionDTO'
import axios from '@/api/axios'

axios.defaults.baseURL = `http://localhost:3000/api`

export class TransactionRepository implements Repository {
  add(dto: AddTransactionDTO): Promise<Transaction> {
    throw new Error('Method not implemented.')
  }
  async getAll(): Promise<Transaction[]> {
    return (await axios.get('/transactions')).data
  }
  getById(id: string): Promise<Transaction> {
    throw new Error('Method not implemented.')
  }
  update(transaction: Transaction): Promise<Transaction> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<Transaction> {
    throw new Error('Method not implemented.')
  }
}
