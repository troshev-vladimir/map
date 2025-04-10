import type PointModel from '@/app/models/point.model'
import type { AddPointDTO } from '@/app/repositories/point/dto/addPointDTO'
import type { UpdatePointDTO } from '@/app/repositories/point/dto/updatePointDTO'
import type { PointRepository } from '@/app/repositories/point/point.repository.interface'

export class PointMockApi implements PointRepository {
  getAll(): Promise<PointModel[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {
            id: 1,
            tripId: 1,
            coordinates: [1, 2],
            name: 'Саграда Фамилия',
            description: 'Невероятный собор!',
            photos: ['photo1.jpg', 'photo2.jpg'],
            visitedAt: '2024-05-12',
          },
          {
            id: 2,
            tripId: 3,
            coordinates: [1, 2],
            name: 'Саграда Фамилия2',
            description: 'Невероятный собор!2',
            photos: ['photo1.jpg', 'photo2.jpg'],
            visitedAt: '2024-05-12',
          },
        ])
      }, 2000)
    })
  }
  update(dto: UpdatePointDTO): Promise<PointModel> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<PointModel> {
    throw new Error('Method not implemented.')
  }
  get(id: string): Promise<PointModel> {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          id: id,
          tripId: 1,
          coordinates: [1, 2],
          name: 'Саграда Фамилия',
          description: 'Невероятный собор!',
          photos: ['photo1.jpg', 'photo2.jpg'],
          visitedAt: '2024-05-12',
        })
      }, 2000)
    })
  }
  create(dto: AddPointDTO): Promise<PointModel> {
    return new Promise((res) => {
      res({ ...dto, id: 2 })
    })
  }
  add(dto: AddPointDTO): Promise<PointModel> {
    throw new Error('Method not implemented.')
  }
}
