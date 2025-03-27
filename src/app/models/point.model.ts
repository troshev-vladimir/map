export default class PointModel {
  constructor(
    public id: ID,
    public tripId: ID,
    public coordinates: [number, number],
    public name: string,
    public description: string,
    public photos: string[],
    public visitedAt: Date | string,
  ) {}
}
