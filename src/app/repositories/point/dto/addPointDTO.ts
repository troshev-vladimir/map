export class AddPointDTO {
  constructor(
    public tripId: ID,
    public coordinates: [number, number],
    public name: string,
    public description: string,
    public photos: string[],
    public visitedAt: Date | string,
  ) {}
}
