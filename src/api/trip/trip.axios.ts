import axios from '@/api/axios'
import type { TripModel } from '@/app/models/trip.model'
import type { AddTripDTO } from '@/app/repositories/trip/dto/addTripDTO'
import type { UpdateTripDTO } from '@/app/repositories/trip/dto/updateTripDTO'
import type { TripRepository } from '@/app/repositories/trip/repositoryInterface'

export class TripApi implements TripRepository {
  private axiosInstance = axios

  add(dto: AddTripDTO): Promise<TripModel> {
    return this.axiosInstance.post('/trips', dto)
  }
  getAll(): Promise<TripModel[]> {
    return this.axiosInstance.get('/trips') || []
  }
  getById(id: string): Promise<TripModel> {
    return this.axiosInstance.get(`/trips/${id}`)
  }
  update(dto: UpdateTripDTO): Promise<TripModel> {
    return this.axiosInstance.put(`/trips/${dto.id}`, dto)
  }
  delete(id: string): Promise<TripModel> {
    return this.axiosInstance.delete(`/trips/${id}`)
  }
}
