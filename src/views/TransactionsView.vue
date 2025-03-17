<template>
  <h1 class="text-3xl font-bold underline">Transactons</h1>
  <TransactionsFilter class="my-5" v-model="filters" />
  <TransactionsTable />
</template>
<script setup lang="ts">
import TransactionsTable from '@/components/Features/TransactionsTable.vue'
import TransactionsFilter, { type IFilters } from '@/components/Features/TransactionsFilter.vue'
import { reactive, onMounted } from 'vue'
import { useTransactionStore } from '@/stores/transaction'

const filters = reactive<IFilters>({
  dateFrom: '',
  dateTo: '',
  type: 'income',
})

const { fetchAllTransactions } = useTransactionStore()

onMounted(async () => {
  await fetchAllTransactions()
})
</script>
