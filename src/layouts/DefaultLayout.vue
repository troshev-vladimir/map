<template>
  <div
    id="default-layout"
    class="default-layout"
    data-layout="default"
    data-page="default"
  >
    <header>
      <h1>Default Layout</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; 2023 Your Company</p>
    </footer>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }

  main {
    flex: 1;
    padding: 1rem;
  }

  footer {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    text-align: center;
  }
}
</style>
