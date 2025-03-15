import axios from '@/api/axios'
import type Repository from '../repositoryInterface'
import type { Transaction } from '@/app/models/transaction.model'
import type { AddTransactionDTO } from '@/api/transactions/repositories/dto/addTransactionDTO'

export class TransactionRepository implements Repository {
  add(dto: AddTransactionDTO): Promise<Transaction> {
    return axios.post('/transactions', dto)
  }
  getAll(): Promise<Transaction[]> {
    return axios.get('/transactions')
  }
  getById(id: string): Promise<Transaction> {
    return axios.get(`/transactions/${id}`)
  }
  update(transaction: Transaction): Promise<Transaction> {
    return axios.put(`/transactions/${transaction.id}`, transaction)
  }
  delete(id: string): Promise<Transaction> {
    return axios.delete(`/transactions/${id}`)
  }
}
