import type { Transaction } from '@/app/models/transaction.model'
import type { AddTransactionDTO } from '@/api/transactions/repositories/dto/addTransactionDTO'
import type { UpdateTransactionDTO } from './repositories/dto/updateTransactionDTO'

export default interface Repository {
  add(transaction: AddTransactionDTO): Promise<Transaction>
  getAll(): Promise<Transaction[]>
  getById(id: ID): Promise<Transaction>
  update(transaction: UpdateTransactionDTO): Promise<Transaction>
  delete(id: ID): Promise<Transaction>
}
