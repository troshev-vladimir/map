import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Transaction } from '@/app/models/transaction.model'
import transactionService from '@/app/services/transaction.service'

export const useTransactionStore = defineStore('transaction', () => {
  const transactions = ref<Transaction[]>([])

  function fetchAllTransactions() {
    return transactionService.getAll().then((data) => {
      transactions.value = data
    })
  }

  return { fetchAllTransactions, transactions }
})
