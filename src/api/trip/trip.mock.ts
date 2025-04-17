import type { TripModel } from '@/app/models/trip.model'
import type { AddTripDTO } from '@/app/repositories/trip/dto/addTripDTO'
import type { UpdateTripDTO } from '@/app/repositories/trip/dto/updateTripDTO'
import type { TripRepository } from '@/app/repositories/trip/repositoryInterface'
import type { Pagination, Responce } from '../types'

export class TripMockApi implements TripRepository {
  add(dto: AddTripDTO): Promise<Responce<TripModel>> {
    throw new Error('Method not implemented.')
  }
  getAll(pagination: Pagination): Promise<Responce<TripModel[]>> {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          data: [...(getMockData(50) as unknown as TripModel[])].slice(
            (pagination.page - 1) * pagination.perPage,
            pagination.page * pagination.perPage,
          ),
          total: 50,
        })
      }, 1000)
    })
  }
  getById(id: string): Promise<Responce<TripModel>> {
    throw new Error('Method not implemented.')
  }
  update(dto: UpdateTripDTO): Promise<Responce<TripModel>> {
    throw new Error('Method not implemented.')
  }
  delete(id: string): Promise<Responce<TripModel>> {
    throw new Error('Method not implemented.')
  }
}

function* getMockData(amount: number): Generator<TripModel> {
  for (let i = 0; i < amount; i++) {
    if (i % 2 === 0) {
      yield {
        id: i + 1,
        description: 'Какой-то текст2',
        title: 'Поездка в asdad',
        startDate: '2024-05-12',
        endDate: '2024-05-12',
        isCompleted: false,
        points: [
          {
            id: 1,
            tripId: 1,
            coordinates: [58.58 + Math.random(), 49.54 + Math.random()],
            name: 'Точка 1',
            description: 'Птица на черном фоне',
            photos: [
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.pngtree.com%2Ffreebackground%2Fpicture-of-a-blue-bird-on-a-black-background_3124189.html&psig=AOvVaw3q4v74UrqVfMv8wkGshgN9&ust=1744617366766000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDY9qPE1IwDFQAAAAAdAAAAABAE',
              'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fbackground%2F20230605%2Fpngtree-blue-bird-that-has-a-black-background-image_2874158.jpg&tbnid=pAaaJguGIxAXtM&vet=10CAIQxiAoAGoXChMIgNj2o8TUjAMVAAAAAB0AAAAAEAY..i&imgrefurl=https%3A%2F%2Fru.pngtree.com%2Ffreebackground%2Fpicture-of-a-blue-bird-on-a-black-background_3124189.html&docid=hlloGa2abSov8M&w=640&h=359&itg=1&q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0&ved=0CAIQxiAoAGoXChMIgNj2o8TUjAMVAAAAAB0AAAAAEAY',
            ],
            visitedAt: '2024-05-12',
          },
          {
            id: 2,
            tripId: 1,
            coordinates: [58.61, 49.61],
            name: 'Точка 2',
            description: 'Какое-то описание',
            photos: [],
            visitedAt: '2024-05-12',
          },
        ],
      }
    } else {
      yield {
        id: i + 1,
        description: 'Какой-то текст',
        title: 'Поездка в Кировоград',
        startDate: '2024-05-12',
        endDate: '2024-05-12',
        isCompleted: true,
        points: [
          {
            id: 1,
            tripId: 2,
            coordinates: [58.58 + Math.random(), 49.54 + Math.random()],
            name: 'Точка 1',
            description: '  Какое-то описание',
            photos: [
              'https://i.pinimg.com/236x/a9/7c/c8/a97cc8055115fddd43b6b4a526458772.jpg',
              'photo2.jpg',
            ],
            visitedAt: '2024-05-12',
          },
          {
            id: 2,
            tripId: 2,
            coordinates: [58.59, 49.54],
            name: 'что-то',
            description: 'Какое-то описание',
            photos: [
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPbiTXxoqvSb04rX8hLQ2FvdaGbuGdyNWQ9bqIclvFJzb0B7R4wJ53TiRhN2ea86k5JQ&usqp=CAU',
            ],
            visitedAt: '2024-05-12',
          },
        ],
      }
    }
  }
}
