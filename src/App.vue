<template>
  <component :is="getLayoutName()">
    <RouterView />
  </component>
</template>
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const getLayoutName = () => {
  switch (route.meta.layout) {
    case 'empty':
      return 'div'

    case 'default':
      return DefaultLayout

    default:
      return DefaultLayout
  }
}
</script>
<style scoped></style>
