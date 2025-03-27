import type { TripModel } from '@/app/models/trip.model'
import type { AddTripDTO } from '@/app/repositories/trip/dto/addTripDTO'
import type { UpdateTripDTO } from '@/app/repositories/trip/dto/updateTripDTO'
import type { TripRepository } from '@/app/repositories/trip/repositoryInterface'

export class TripMockApi implements TripRepository {
  add(dto: AddTripDTO): Promise<TripModel> {
    throw new Error('Method not implemented.')
  }
  getAll(): Promise<TripModel[]> {
    throw new Error('Method not implemented.')
  }
  getById(id: string): Promise<TripModel> {
    throw new Error('Method not implemented.')
  }
  update(dto: UpdateTripDTO): Promise<TripModel> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<TripModel> {
    throw new Error('Method not implemented.')
  }
}
