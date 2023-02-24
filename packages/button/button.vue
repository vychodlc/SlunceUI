<script lang="ts">
export default {
  name: 'asButton'
}
</script>
<script setup lang="ts">
</script>
<template>
  <button><slot></slot></button>
</template>
<style scoped>
button {
  border: 1px solid #0d0;
}
</style>