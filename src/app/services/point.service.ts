import type { PointRepository } from '@/app/repositories/point/point.repository.interface'

class PointService {
  constructor(readonly repository: PointRepository) {}

  get(id: ID) {
    return this.repository.get(id)
  }
}

export default PointService
