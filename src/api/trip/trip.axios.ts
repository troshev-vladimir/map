import axios from '@/api/axios'
import type { TripModel } from '@/app/models/trip.model'
import type { AddTripDTO } from '@/app/repositories/trip/dto/addTripDTO'
import type { UpdateTripDTO } from '@/app/repositories/trip/dto/updateTripDTO'
import type { TripRepository } from '@/app/repositories/trip/repositoryInterface'
import type { Responce } from '../types'

export class TripApi implements TripRepository {
  private axiosInstance = axios

  add(dto: AddTripDTO): Promise<Responce<TripModel>> {
    return this.axiosInstance.post('/trips', dto).then((res) => res.data)
  }
  getAll(): Promise<Responce<TripModel[]>> {
    return this.axiosInstance.get('/trips').then((res) => res.data) || []
  }
  getById(id: string): Promise<Responce<TripModel>> {
    return this.axiosInstance.get(`/trips/${id}`).then((res) => res.data)
  }
  update(dto: UpdateTripDTO): Promise<Responce<TripModel>> {
    return this.axiosInstance.put(`/trips/${dto.id}`, dto).then((res) => res.data)
  }
  delete(id: string): Promise<Responce<TripModel>> {
    return this.axiosInstance.delete(`/trips/${id}`).then((res) => res.data)
  }
}
