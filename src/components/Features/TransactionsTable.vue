<template>
  <UiTable :columns="cols" :rows="transactions" @sort="sortOnServer"></UiTable>
</template>
<script lang="ts" setup>
import UiTable from '@/components/Ui/UiTable/UiTable.vue'
import { useTransactionStore } from '@/stores/trip'
import { storeToRefs } from 'pinia'
import type { Transaction } from '@/app/models/trip.model'
import { ref } from 'vue'

const { transactions } = storeToRefs(useTransactionStore())
const cols = ref<string[]>(['amount', 'type', 'date', 'description'])

// Сортировка тоже на сервере должна быть
const sortOnServer = (value: Record<string, string>) => {
  const sortBy = value.sortBy as keyof Transaction
  const desc = Number(value.desc) ? Number(value.desc) : -1

  transactions.value.sort((a: Transaction, b: Transaction) => {
    if (a[sortBy] < b[sortBy]) return -desc
    if (a[sortBy] > b[sortBy]) return desc
    return 0
  })
}
</script>
<style lang="scss" scoped></style>
