<template>
  <div class="sl-input" :class="isClass" :style="isStyle">
    <input 
    :type="type" 
    :placeholder="placeholder"
    :disabled="disabled"
    @focus="focus"
    @blur="blur"
    @change="change"
    @input="inputChange"
    >
    <span v-show="iconShow"><sl-icon name="close" width="15" height="15"></sl-icon></span>
  </div>
</template>

<script lang="ts">
export default{
  name:"sl-input"
}
</script>

<script setup lang="ts">
import slIcon from '../../../basic/icon/src/icon.vue'
import { computed, ref } from 'vue';

const emit = defineEmits([
  'update:modelValue', 'clear', 'focus', 'blur', 'input', 'change'
])
const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ""
  },
  focusColor: {
    type: String,
    default: '#13227a'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  }
})
let focusStyle = {
  'width': '100%',
  'float': 'auto',
  'border-radius': '4px',
  'border-color':'#dcdfe6f6',
}
let iconShow = ref(false)
let isStyle = ref({})
const focus = (e: any) =>{
  focusStyle['border-color'] = "#0e80eb"
  isStyle.value['border-color'] = props.focusColor
  emit('focus', e)
}
const blur = (e: any) => {
  isStyle.value = {
    'width': '100%',
    'float': 'auto',
    'border-radius': '4px',
  }
  emit('blur', e)
}
const inputChange = (e: any) => {
  emit('update:modelValue', e.target.value)
  emit('input',e.target.value)
}
const change = (e: any) => {
  emit('change', e)
}
const isClass = computed(() => {
  return [
    props.disabled?'sl-input-disabled':'',
    props.clearable?'sl-input-clearable':'',
  ]
})
</script>

<style lang="less" scoped>
.sl-input {
  width:100%;
  height:35px;
  border: 1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius:4px;
  transition: all .2s ease;
  position: relative;
  box-sizing: border-box;
  input{
    width:100%;
    font-size:14px;
    outline:none;
    border:0;
    margin:0;
    padding:10px 10px 10px 10px;
    box-sizing: border-box;
    color:#606266;
    &::placeholder {
      color: #c6c8cc;
      font-size: 14px;
    }
  }
}
.sl-input-disabled {
  cursor: not-allowed;
  & input {
    cursor: not-allowed;
    background-color: #f5f7fa;
  }
}
</style>