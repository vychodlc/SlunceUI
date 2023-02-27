<template>
<svg class="icon" aria-hidden="true">
  <use :xlink:href="IconName"></use>
</svg>
</template>

<script lang="ts">
export default {
  name: 'sl-icon'
}
</script>

<script setup lang="ts">
import '../../assets/js/iconfont.js'

import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "",
  }
})
const IconName = computed(() => {
  return `#icon-${props.name}`;
});

</script>

<style type="text/css">
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

<style scoped lang="less">
</style>