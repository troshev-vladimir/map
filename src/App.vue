<template>
  <component :is="getLayoutName()">
    <RouterView />
  </component>
</template>
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useRoute } from 'vue-router'
import useState from '@/composables/globalState'
import { onMounted } from 'vue'

const route = useRoute()
const { setTheme, state } = useState()

onMounted(() => {
  console.log(state)

  setTheme(String(route.meta.theme))

  console.log(state)
})

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
