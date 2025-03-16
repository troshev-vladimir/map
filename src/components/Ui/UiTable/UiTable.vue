<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
      <thead class="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th
            @click="sortBy(col)"
            scope="col"
            class="relative px-6 py-3"
            v-for="(col, i) in columns"
            :key="i"
            :class="{ 'bg-sky-50': isSorted(col) }"
          >
            {{ col }}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute bottom-2 inline-flex size-6"
              v-if="isSorted(col)"
              :class="{ 'rotate-z-180': currentSort.desc }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
          v-for="(row, idx) in filteredRows()"
          :key="idx"
        >
          <td class="px-6 py-4" v-for="(rowItem, index) in row" :key="index">
            {{ rowItem }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import type { IEmits, IProps } from './types'
import useSort from './composables/useSort'

const props = withDefaults(defineProps<IProps>(), {
  columns: () => ['id', 'type'],
  rows: () => [
    {
      id: '2',
      type: 'id',
    },
  ],
})

const emit = defineEmits<IEmits>()

const { currentSort, isSorted, sortBy } = useSort(emit)

const filteredRows = () => {
  return props.rows.map((row) => {
    return props.columns.map((col) => {
      return row[col]
    })
  })
}
</script>
