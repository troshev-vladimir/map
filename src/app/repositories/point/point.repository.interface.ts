import type PointModel from '@/app/models/point.model'
import type { AddPointDTO } from '@/app/repositories/point/dto/addPointDTO'
import type { UpdatePointDTO } from '@/app/repositories/point/dto/updatePointDTO'

export interface PointRepository {
  getAll(): Promise<PointModel[]>
  get(id: ID): Promise<PointModel>
  create(dto: AddPointDTO): Promise<PointModel>
  update(dto: UpdatePointDTO): Promise<PointModel>
  delete(id: ID): Promise<PointModel>
}
