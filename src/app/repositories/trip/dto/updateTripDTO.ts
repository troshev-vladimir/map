import type PointModel from '@/app/models/point.model'

export class UpdateTripDTO {
  constructor(
    readonly id: ID,
    readonly description: string,
    readonly title: string,
    readonly startDate: Date,
    readonly endDate: Date,
    readonly isCompleted: boolean,
    readonly points: PointModel[],
  ) {}
}
