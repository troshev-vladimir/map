import type { TripModel } from '@/app/models/trip.model'
import type { AddTripDTO } from '@/app/repositories/trip/dto/addTripDTO'
import type { UpdateTripDTO } from './dto/updateTripDTO'
import type { Pagination, Responce } from '@/api/types'

export abstract class TripRepository {
  public abstract add(dto: AddTripDTO): Promise<Responce<TripModel>>
  public abstract getAll(pagination: Pagination): Promise<Responce<TripModel[]>>
  public abstract getById(id: ID): Promise<Responce<TripModel>>
  public abstract update(dto: UpdateTripDTO): Promise<Responce<TripModel>>
  public abstract delete(id: ID): Promise<Responce<TripModel>>
}
