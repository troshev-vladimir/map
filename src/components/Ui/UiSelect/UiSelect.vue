<template>
  <div class="relative">
    <p class="label">
      <slot name="label">{{ label }}</slot>
    </p>
    <div
      class="flex flex-wrap items-center justify-between gap-2 rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-b-blue-900"
      @click="toggleDropdown"
    >
      <!-- Чипсы выбранных элементов -->
      <div class="badges flex items-center gap-1" v-if="isMultiSelect">
        <div
          v-for="selectedValue in selectedValuesComputed"
          :key="selectedValue"
          class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
        >
          {{ getLabelByValue(selectedValue) }}
          <button
            @click.stop="removeSelectedValue(selectedValue)"
            class="ml-2 text-blue-800 hover:text-blue-600 focus:outline-none"
          >
            &times;
          </button>
        </div>
      </div>

      <div v-else>{{ getLabelByValue(selectedValuesComputed as string) }}</div>

      <button
        @click.stop="toggleDropdown"
        class="p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <svg
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </div>

    <div
      v-if="isDropdownOpen"
      class="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-300 bg-white text-amber-950 shadow-lg dark:border-gray-700 dark:bg-gray-700 dark:text-amber-100"
    >
      <input
        v-if="isMultiSelect"
        v-model="searchQuery"
        placeholder="Поиск..."
        @click.stop
        class="flex-grow px-2 py-1 outline-none"
      />
      <div
        v-for="option in filteredOptions"
        :key="option.value"
        @click="handleOptionClick(option.value)"
        class="cursor-pointer px-4 py-2 hover:bg-blue-200 dark:bg-blue-700 dark:hover:bg-blue-600"
        :class="{ 'bg-blue-100 dark:bg-blue-900': isSelected(option.value) }"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Option {
  value: string | number
  label: string
}

const props = defineProps<{
  modelValue: string | number | (string | number)[]
  options: Option[]
  isMultiSelect?: boolean
  label: string
}>()

const emit = defineEmits(['update:modelValue'])

const isDropdownOpen = ref(false)
const searchQuery = ref('')
const selectedValuesComputed = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})

const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options
  return props.options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

const getLabelByValue = (value: string | number) => {
  const option = props.options.find((option) => option.value === value)
  return option ? option.label : ''
}

const removeSelectedValue = (value: string | number) => {
  if (props.isMultiSelect) {
    selectedValuesComputed.value = (selectedValuesComputed.value as (string | number)[]).filter(
      (val) => val !== value,
    )
  }
}

const isSelected = (value: string | number) => {
  if (props.isMultiSelect) {
    return (selectedValuesComputed.value as (string | number)[]).includes(value)
  }
  return selectedValuesComputed.value === value
}

const handleOptionClick = (value: string | number) => {
  if (props.isMultiSelect) {
    const selected = selectedValuesComputed.value as (string | number)[]
    if (selected.includes(value)) {
      selectedValuesComputed.value = selected.filter((val) => val !== value)
    } else {
      selectedValuesComputed.value = [...selected, value]
    }
  } else {
    selectedValuesComputed.value = value
    isDropdownOpen.value = false // Закрыть dropdown после выбора
  }
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>
