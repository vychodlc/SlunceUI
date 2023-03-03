<template>
  <svg :class="IconClass" 
    :style="IconColor" 
    :width="props.width" 
    :height="props.height" 
    aria-hidden="true">
    <use :xlink:href="IconName" fill="currentColor" />
  </svg>
</template>

<script lang="ts">
export default {
  name: 'sl-icon'
}
</script>

<script setup lang="ts">
import './icon.js'
import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  width: {
    type: [Number,String],
    default: 60,
  },
  height: {
    type: [Number,String],
    default: 60,
  }
})
const IconName = computed(() => {
  return `#icon-${props.name}`;
});
const IconColor = computed(() => {
  return `color: ${props.color}`;
});
const IconClass = computed(() => {
  return ['sl-icon',props.name?`icon-${props.name}`:'']
})

</script>

<style scoped type="text/css">
.sl-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  border: 1px solid #000;
}
</style>
