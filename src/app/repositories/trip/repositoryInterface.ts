import type { TripModel } from '@/app/models/trip.model'
import type { AddTripDTO } from '@/app/repositories/trip/dto/addTripDTO'
import type { UpdateTripDTO } from './dto/updateTripDTO'
import type { Pagination } from '@/api/types'

export abstract class TripRepository {
  public abstract add(dto: AddTripDTO): Promise<TripModel>
  public abstract getAll(pagination: Pagination): Promise<TripModel[]>
  public abstract getById(id: ID): Promise<TripModel>
  public abstract update(dto: UpdateTripDTO): Promise<TripModel>
  public abstract delete(id: ID): Promise<TripModel>
}
