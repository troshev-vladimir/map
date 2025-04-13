import PointModel from './point.model'

export class TripModel {
  constructor(
    readonly id: ID,
    readonly description: string,
    readonly title: string,
    readonly startDate: Date | string,
    readonly endDate: Date | string,
    readonly isCompleted: boolean,
    readonly points: PointModel[],
  ) {}
}
