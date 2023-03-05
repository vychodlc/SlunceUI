<template>
  <div class="sl-col-default"><slot></slot></div>
</template>

<script lang="ts">
export default{
  name:"sl-col"
}
</script>

<script setup lang="ts">
import {ref} from 'vue'
const props = defineProps({
  span:{
    type:Number,
    default:24
  },
  offset: {
    type: Number,
    default: 0,
  }
})
const width = ref(props.span<=24?props.span%1==0?(100/24)*props.span+'%':'':'')
const offset = ref(props.offset<=24?props.offset%1==0?(100/24)*props.offset+'%':'':'')
</script>

<style lang="less" scoped>
.sl-col-default{
  width: v-bind(width);
  float: left;
  margin-left: v-bind(offset);
}
</style>