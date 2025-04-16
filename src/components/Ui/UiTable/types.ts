export type TableCol<T> = {
  title: string
  key: keyof T
  sortable?: boolean
}

export type IProps<T> = {
  columns: TableCol<T>[]
  rows: T[]
}

export type IEmits<T> = {
  (e: 'sort', value: T): void
  (e: 'rowClick', value: T): void
}
