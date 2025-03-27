import type { TripModel } from '@/app/models/trip.model'
import type { AddTripDTO } from '@/app/repositories/trip/dto/addTripDTO'
import type { UpdateTripDTO } from './dto/updateTripDTO'

export interface TripRepository {
  add(dto: AddTripDTO): Promise<TripModel>
  getAll(): Promise<TripModel[]>
  getById(id: ID): Promise<TripModel>
  update(dto: UpdateTripDTO): Promise<TripModel>
  delete(id: ID): Promise<TripModel>
}
