import axios from '@/api/axios'
import type PointModel from '@/app/models/point.model'
import type { AddPointDTO } from '@/app/repositories/point/dto/addPointDTO'
import type { UpdatePointDTO } from '@/app/repositories/point/dto/updatePointDTO'
import type { PointRepository } from '@/app/repositories/point/point.repository.interface'

export class PointApi implements PointRepository {
  getAll(): Promise<PointModel[]> {
    throw new Error('Method not implemented.')
  }
  update(dto: UpdatePointDTO): Promise<PointModel> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<PointModel> {
    throw new Error('Method not implemented.')
  }
  get(id: string): Promise<PointModel> {
    throw new Error('Method not implemented.')
  }
  create(dto: AddPointDTO): Promise<PointModel> {
    throw new Error('Method not implemented.')
  }
  add(dto: AddPointDTO): Promise<PointModel> {
    return axios.post('/point', dto)
  }
}
