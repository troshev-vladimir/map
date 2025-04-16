export type IProps<T> = {
  items: T[]
}

export type IEmits<T> = {
  (e: 'item-click', value: T): void
}
