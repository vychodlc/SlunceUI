<template>
  <div class="sl-color">
    <div class="sl-color-main">
      <div class="sl-color-name"></div>
      <div class="sl-color-value"></div>
    </div>
    <div class="sl-color-items">
      <div class="sl-color-item"></div>
      <div class="sl-color-item"></div>
      <div class="sl-color-item"></div>
      <div class="sl-color-item"></div>
      <div class="sl-color-item"></div>
      <div class="sl-color-item"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default{
  name:"sl-color"
}
</script>
<script setup lang="ts">
const mainColor = '#409EFF'
</script>

<style lang="less" scoped>
.sl-color {
  width: 30vw;
  height: 20vw;
  border: 1px solid #000;
  .sl-color-main {
    width: 100%;
    height: 70%;
    background-color: v-bind(mainColor);
    .sl-color-name {
      color: v-bind(mainColor);
    }
  }
  .sl-color-items {
    width: 100%;
    height: 30%;
    background-color: v-bind(mainColor);
    display: flex;
    .sl-color-item {
      flex: 1;
      border: 1px solid red;
    }
  }
}
</style>