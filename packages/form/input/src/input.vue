<template>
  <div class="sl-input" :class="isClass" :style="isStyle">
    <span v-show="iconPos=='left'"><sl-icon :name="iconName" width="20" height="20"></sl-icon></span>
    <input 
    :type="inputType" 
    :placeholder="placeholder"
    :disabled="disabled"
    :value="modelValue"
    :style="inputStyle"
    @focus="focus"
    @blur="blur"
    @change="change"
    @input="inputChange"
    >
    <span v-show="modelValue!=''&&showPassword" @click="changePwdShow"><sl-icon name="eyeopen" width="20" height="20"></sl-icon></span>
    <span v-show="iconShow&&modelValue!=''&&clearable" @click="clear"><sl-icon name="close" width="20" height="20"></sl-icon></span>
    <span v-show="iconPos=='right'"><sl-icon :name="iconName" width="20" height="20"></sl-icon></span>
    <span v-if="maxLength!=''" class="limitNum">{{ (modelValue?modelValue.toString().length:0)+'/'+maxLength }}</span>
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
  modelValue: [String,Number],
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
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'normal',
  },
  withBtn: {
    type: String,
    default: '',
  },
  iconPos: {
    type: String,
    default: '',
  },
  iconName: {
    type: String,
    default: '',
  },
  wordLimit: {
    type: Boolean,
    default: false,
  },
  maxLength: {
    type: String,
    default: '',
  }
})

let inputType = ref(props.type)
let focusStyle = {
  'width': '100%',
  'float': 'auto',
  'border-radius': '4px',
  'border-color':'#dcdfe6f6',
}
let iconShow = ref(false)
let isStyle = ref({})
let inputStyle = ref({})
inputStyle.value = {
  'width': 'calc(100% - 30px)',
  'padding-left': `${
    props.iconPos=='left'?'0':
      props.size=='normal'?'10px':
        props.size=='small'?'8px':
          props.size=='mini'?'6px':''
  }`,
  'padding-right': `${
    props.iconPos=='right'?'0':
      props.size=='normal'?'10px':
        props.size=='small'?'8px':
          props.size=='mini'?'6px':''
  }`
}

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
  let value = e.target.value
  let length = parseInt(props.maxLength)
  
  if(props.maxLength!='') {
    if(value.length >= length) {
      e.target.value = value.slice(0, length)
    }
  }
  emit('update:modelValue', e.target.value)
  emit('input',e.target.value)
  if(value!='' && props.clearable) {
    iconShow.value = true
  } else {
    iconShow.value = false
  }
}
const change = (e: any) => {
  emit('change', e)
}
const clear = (e: any) =>{
  emit('update:modelValue', "")
  emit('clear')
}
const isClass = computed(() => {
  return [
    props.disabled?'sl-input-disabled':'',
    props.clearable?'sl-input-clearable':'',
    props.size?`sl-input-${props.size}`:'sl-input-normal',
  ]
})
const changePwdShow = () => {
  inputType.value = inputType.value=='password'?'text':'password'
}
</script>

<style lang="less" scoped>
.sl-input {
  width: 100%;
  border: 1px solid #dcdfe6f6;
  &:hover {  
    border: 1px solid lighten(#dcdfe6, -10%);
  }
  overflow: hidden;
  border-radius:4px;
  transition: all .2s ease;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-items: center;
  padding: 0;
  input{
    outline: none;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    color: #606266;
    &::placeholder {
      color: #c6c8cc;
      font-size: 14px;
    }
  }
  &-normal {
    height: 35px;
    input {
      // padding: 0 10px;
      font-size: 14px;
      &::placeholder {
        font-size: 14px;
      }
    }
  }
  &-small {
    height: 30px;
    input {
      // padding: 0 8px;
      font-size: 13px;
      &::placeholder {
        font-size: 13px;
      }
    }
  }
  &-mini {
    height: 25px;
    input {
      // padding: 0 6px;
      font-size: 12px;
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 1px solid #000;
    width: 35px;
    svg {
      // border: 1px solid #000;
    }
  }
}
.sl-input-disabled {
  cursor: not-allowed;
    background-color: #f5f7fa;
  & input {
    cursor: not-allowed;
    background-color: #f5f7fa;
    color: #dcdfe6;
  }
  &:hover {  
    border: 1px solid #dcdfe6f6;
  }
}
.limitNum {
  font-size: 12px;
  color: #dcdfe6;
}
</style>