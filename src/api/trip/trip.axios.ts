import axios from '@/api/axios'
import type { TripModel } from '@/app/models/trip.model'
import type { AddTripDTO } from '@/app/repositories/trip/dto/addTripDTO'
import type { UpdateTripDTO } from '@/app/repositories/trip/dto/updateTripDTO'
import type { TripRepository } from '@/app/repositories/trip/repositoryInterface'

export class TripApi implements TripRepository {
  add(dto: AddTripDTO): Promise<TripModel> {
    return axios.post('/transactions', dto)
  }
  getAll(): Promise<TripModel[]> {
    return axios.get('/transactions')
  }
  getById(id: string): Promise<TripModel> {
    return axios.get(`/transactions/${id}`)
  }
  update(dto: UpdateTripDTO): Promise<TripModel> {
    return axios.put(`/transactions/${dto.id}`, dto)
  }
  delete(id: string): Promise<TripModel> {
    return axios.delete(`/transactions/${id}`)
  }
}
