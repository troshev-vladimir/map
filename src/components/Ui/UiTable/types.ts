export interface IProps {
  columns: Array<string>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: Record<string, any>[]
}

export interface IEmits {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e: 'sort', value: Record<string, any>): void
}
