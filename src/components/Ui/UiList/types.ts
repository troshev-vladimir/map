export type IProps<T> = {
  items: T[]
  loading?: boolean
  itemHeight: number
  complete: boolean
}

export type IEmits<T> = {
  (e: 'item-click', value: T): void
  (e: 'load-more'): void
}
