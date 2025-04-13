import { onMounted, reactive, watch } from 'vue'
import type { IEmits } from '../types'
import { useRoute, useRouter } from 'vue-router'

export default function useSort<Row>(emit: IEmits<Row>) {
  const currentSort = reactive({
    sortBy: '',
    desc: false,
  })

  const router = useRouter()
  const route = useRoute()

  const isSorted = (column: unknown) => {
    return String(column) === currentSort.sortBy
  }

  const sortBy = (value: unknown) => {
    currentSort.sortBy = String(value)
    currentSort.desc = !currentSort.desc
    emit('sort', currentSort as Row)
  }

  const saveInQuery = () => {
    router.replace({
      name: route.name,
      query: {
        ...route.query,
        ...Object.fromEntries(
          Object.entries(currentSort).map(([key, value]) => {
            return [key, typeof value === 'boolean' ? String(value) : value]
          }),
        ),
      },
    })
  }

  watch(
    () => currentSort,
    () => {
      saveInQuery()
    },
    { deep: true, immediate: true },
  )

  const parseFromQuery = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = route.query as Record<string, any>
    currentSort.sortBy = query.sortBy || ''
    currentSort.desc = query.desc === 'true' || false
  }

  onMounted(() => {
    parseFromQuery()
  })

  return {
    currentSort,
    isSorted,
    sortBy,
  }
}
