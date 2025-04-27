export interface UiColtrol {
  value: unknown
  label: string
  placeholder?: string
  type?: string
  options?: UiColtrol[]
  isRequired?: boolean
  isDisabled?: boolean
}
