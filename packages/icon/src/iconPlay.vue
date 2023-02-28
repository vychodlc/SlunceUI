<template>
  <svg :height="height" :width="width" :style="IconStyle" viewBox="0 0 100 100">
    <g id="play">
      <circle cx="50" cy="50" r="50"  fill="currentColor"/>
      <line x1="35" y1="30" x2="35" y2="70" stroke-width="5" stroke="white"></line>
      <line x1="65" y1="30" x2="65" y2="70" stroke-width="5" stroke="white"></line>
    </g>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'sl-icon-play'
}
</script>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  height: {
    type: Number,
    default: 18,
  },
  width: {
    type: Number,
    default: 18,
  },
  color: {
    type: String,
    default: '#444'
  }
})
const IconStyle = computed(() => {
  return `color: ${props.color}`
})
</script>

<style scoped>

</style>