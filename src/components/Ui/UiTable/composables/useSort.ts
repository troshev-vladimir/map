import {
  ref,
  onMounted,
  onUnmounted,
  reactive,
  type ComponentTypeEmits,
  type EmitsOptions,
} from 'vue'
import type { IEmits } from '../types'

export default function useSort(emit: IEmits) {
  const currentSort = reactive({
    sortBy: '',
    desc: false,
  })

  const isSorted = (column: string) => {
    return column === currentSort.sortBy
  }

  const sortBy = (value: string) => {
    currentSort.sortBy = value
    currentSort.desc = !currentSort.desc
    emit('sort', currentSort)
  }

  return {
    currentSort,
    isSorted,
    sortBy,
  }
}
