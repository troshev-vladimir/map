<template>
  <main>
  </main>
</template>

<script setup lang="ts">
  import { useTransactionStore } from '@/stores/transaction'
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'

  const { transactions } = storeToRefs(useTransactionStore)
  const { fetchAllTransactions } = useTransactionStore()

  onMounted(() => {
    fetchAllTransactions()
      .then(() => {
        console.log(transactions)
      })
  })


</script>


