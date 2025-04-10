import type PointModel from '@/app/models/point.model'
import type { AddPointDTO } from '@/app/repositories/point/dto/addPointDTO'
import type { UpdatePointDTO } from '@/app/repositories/point/dto/updatePointDTO'

export abstract class PointRepository {
  public abstract getAll(): Promise<PointModel[]>
  public abstract get(id: ID): Promise<PointModel>
  public abstract create(dto: AddPointDTO): Promise<PointModel>
  public abstract update(dto: UpdatePointDTO): Promise<PointModel>
  public abstract delete(id: ID): Promise<PointModel>
}
