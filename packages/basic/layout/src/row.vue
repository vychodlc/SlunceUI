<template>
  <div class="sl-row-default"><slot></slot></div>
</template>

<script lang="ts">
export default{
  name:"sl-row"
}
</script>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.sl-row-default{
  width: 100%;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
}
</style>