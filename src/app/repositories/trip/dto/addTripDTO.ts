import type PointModel from '@/app/models/point.model'

export abstract class AddTripDTO {
  constructor(
    readonly description: string,
    readonly title: string,
    readonly startDate: Date,
    readonly endDate: Date,
    readonly isCompleted: boolean,
    readonly points: PointModel[],
  ) {}
}
