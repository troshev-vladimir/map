<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
    <UiSelect label="Тип" v-model="localValue.type" :options="type" :isMultiSelect="false" />
    <UiDatePicker label="Диапазон дат" range v-model="date" />
  </div>
</template>
<script setup lang="ts">
import UiSelect from '@/components/Ui/UiSelect'
import UiDatePicker from '@/components/Ui/UiDatePicker'
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export interface IFilters {
  type: string
  dateFrom: string
  dateTo: string
}

const props = defineProps<{
  modelValue: IFilters
}>()

const emit = defineEmits<{
  'update:modelValue': [value: IFilters]
}>()

const router = useRouter()
const route = useRoute()

const localValue = computed({
  get() {
    return props.modelValue
  },

  set(value: IFilters) {
    emit('update:modelValue', value)
  },
})

const date = computed({
  get() {
    return [localValue.value.dateFrom, localValue.value.dateTo]
  },

  set(value: [string, string]) {
    localValue.value.dateFrom = value[0]
    localValue.value.dateTo = value[1]
  },
})

const saveInQuery = (value: Record<string, string>) => {
  const filteredValue = Object.fromEntries(Object.entries(value).filter((el) => el[1]))
  router.replace({
    name: route.name,
    query: {
      ...route.query,
      ...filteredValue,
    },
  })
}

const parseFromQuery = () => {
  const query = route.query as Partial<IFilters>
  localValue.value.type = query.type || ''
  date.value = [query.dateFrom || '', query.dateTo || '']
}

watch(
  () => localValue.value,
  (value) => {
    saveInQuery(Object.fromEntries(Object.entries(value)))
  },
  { deep: true, immediate: true },
)

// Эти типы в идеале должны приходить с бека
const type = [
  { value: 'expense', label: 'Приход' },
  { value: 'income', label: 'Расход' },
]

onMounted(() => {
  parseFromQuery()
})
</script>
<style lang="scss" scoped></style>
