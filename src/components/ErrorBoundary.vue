<template>
  <slot :name="slotName" v-bind="slotProps"></slot>
</template>

<script setup lang="ts">
import { computed, ref, onErrorCaptured } from 'vue'

const error = ref()

onErrorCaptured((err) => {
  error.value = err

  // return false to prevent error from bubbling further
  // (this is optional, if you have a top level error reporter catching errors
  // you probably don't want to do this.
  // Alternatively you could report your errors in the boundary and prevent bubble
  return false
})

function clearError() {
  error.value = null
}

const slotProps = computed(() => {
  if (!error.value) return {}
  return { error, clearError }
})

const slotName = computed(() => (error.value ? 'error' : 'default'))
</script>
