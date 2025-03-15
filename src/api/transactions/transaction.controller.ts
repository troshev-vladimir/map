import type { Update } from 'vite/types/hmrPayload.js'
import type { AddTransactionDTO } from './repositories/dto/addTransactionDTO'
import type Repository from './repositoryInterface'
import type { UpdateTransactionDTO } from './repositories/dto/updateTransactionDTO'

export class RepositoryController {
  constructor(readonly repository: Repository) {}

  async add(dto: AddTransactionDTO) {
    return this.repository.add(dto)
  }

  async getAll() {
    return this.repository.getAll()
  }

  async getById(id: ID) {
    return this.repository.getById(id)
  }

  async update(dto: UpdateTransactionDTO) {
    return this.repository.update(dto)
  }

  async delete(id: ID) {
    return this.repository.delete(id)
  }
}
