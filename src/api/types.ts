export interface Pagination {
  page: number
  perPage: number
}

export interface Responce<T> {
  data: T
  total: number
}
