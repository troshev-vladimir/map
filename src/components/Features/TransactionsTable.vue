<template>
  <UiTable :columns="cols" :rows="transactions" @sort="sortOnServer"></UiTable>
</template>
<script lang="ts" setup>
import UiTable from '../Ui/UiTable/UiTable.vue'
import { useTransactionStore } from '@/stores/transaction'
import { storeToRefs } from 'pinia'
import type { Transaction } from '@/app/models/transaction.model'
import { ref } from 'vue'
import { onMounted } from 'vue'

const { transactions } = storeToRefs(useTransactionStore())
const cols = ref<string[]>([])
const sortOnServer = (value: Record<string, string>) => {
  const sortBy = value.sortBy as keyof Transaction
  const desc = Number(value.desc) ? Number(value.desc) : -1

  transactions.value.sort((a: Transaction, b: Transaction) => {
    if (a[sortBy] < b[sortBy]) return -desc
    if (a[sortBy] > b[sortBy]) return desc
    return 0
  })
}

const { fetchAllTransactions } = useTransactionStore()

onMounted(async () => {
  await fetchAllTransactions()
  cols.value = Object.keys(transactions?.value[0])
})
</script>
<style lang="scss" scoped></style>
