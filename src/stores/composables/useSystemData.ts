import { ref } from 'vue'

export default function useSystemData() {
  const isActual = ref(false)
  const isLoadding = ref(false)

  return { isActual, isLoadding }
}
