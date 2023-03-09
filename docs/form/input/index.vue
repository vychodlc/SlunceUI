<template>
  <div>
    <sl-input type="text" placeholder="请输入你的名字..." v-model="input_val1"></sl-input>
    <sl-input type="text" placeholder="请输入你的名字..." v-model="input_val1" disabled></sl-input>
    <sl-input type="text" placeholder="请输入你的名字..." v-model="input_val1" clearable></sl-input>
    <sl-input type="text" placeholder="请输入你的名字..." v-model="input_val1" focusColor="red"></sl-input>
    <sl-input type="password" placeholder="请输入你的名字..." v-model="input_val1" showPassword></sl-input>
    <sl-input type="text" placeholder="请输入你的名字..." v-model="input_val1" size="small"></sl-input>
    <sl-input type="text" placeholder="请输入你的名字..." v-model="input_val1" size="mini"></sl-input>
    <sl-input type="text" placeholder="请输入你的名字..." v-model="input_val1" iconPos="left" iconName="search"></sl-input>
    <sl-input type="text" placeholder="请输入你的名字..." v-model="input_val1" iconPos="right" iconName="play"></sl-input>
    <sl-input type="text" placeholder="请输入你的名字..." v-model="input_val2" maxLength="5"></sl-input>
    <p>{{ input_val1 }}</p>
    <p>{{ input_val2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let input_val1 = ref('123')
let input_val2 = ref('223')
</script>

<style scoped lang="less">

</style>