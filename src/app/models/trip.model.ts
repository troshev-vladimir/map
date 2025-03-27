import PointModel from './point.model'

export class TripModel {
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
