<template>
  <div>
    <p class="label">
      <slot name="label">{{ label }}</slot>
    </p>
    <VueDatePicker v-model="localValue" v-bind="$attrs" format="MM/dd/yyyy" />
  </div>
</template>

<script setup lang="ts" generic="T extends string | string[]">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { computed } from 'vue'

const props = defineProps<{
  modelValue: T
  label: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: T]
}>()

const localValue = computed({
  get() {
    return props.modelValue
  },

  set(value: T) {
    emit('update:modelValue', value)
  },
})
</script>

<style scoped>
/* Дополнительные стили, если необходимо */
</style>
