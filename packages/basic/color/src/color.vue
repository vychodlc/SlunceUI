<template>
  <div class="sl-color">
    <div class="sl-color-main" :style="mainStyle" @click="copyToClipBoard(0)">
      <div class="sl-color-name">{{ props.text }}</div>
      <div class="sl-color-value">{{ props.color }}</div>
    </div>
    <div class="sl-color-items" v-if="otherColor">
      <div class="sl-color-item" @click="copyToClipBoard(1)"></div>
      <div class="sl-color-item" @click="copyToClipBoard(2)"></div>
      <div class="sl-color-item" @click="copyToClipBoard(3)"></div>
      <div class="sl-color-item" @click="copyToClipBoard(4)"></div>
      <div class="sl-color-item" @click="copyToClipBoard(5)"></div>
      <div class="sl-color-item" @click="copyToClipBoard(6)"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default{
  name:"sl-color"
}
</script>
<script setup lang="ts">
import {computed} from 'vue'
import {changeColor} from '../../../utils/changeColor'
import slMessage from '../../../feedback/message/index'
const props = defineProps({
  color: {
    type: String,
    default: ''
  },
  text: String,
  otherColor: {
    type: Boolean,
    default: false
  }
})

const mainColor = props.color

const mainStyle = computed(() => {
  return `
    width: 100%;
    height: ${props.otherColor?'70%':'100%'};
  `
})

const mainColor1 = changeColor(mainColor, -50)
const mainColor2 = changeColor(mainColor, -20)
const mainColor3 = changeColor(mainColor, 10)
const mainColor4 = changeColor(mainColor, 40)
const mainColor5 = changeColor(mainColor, 70)
const mainColor6 = changeColor(mainColor, 100)

const copyToClipBoard = (index: number) => {
  let clipColor = changeColor(mainColor, index==0?0:(30*index-50))
  const clipList = ['','-dark-2','-dark-1','-light-1','-light-2','-light-3','-light-4']
  const clipText = `--sl-color-${
    props.text?.toLocaleLowerCase().replace(' ','-')
  }${clipList[index]}: ${clipColor}`
  navigator.clipboard.writeText(clipText).then(() => {
    slMessage({
      type: 'success',
      text: `Copy Success ~ ${clipText}`
    })
  }, () => {
    slMessage({
      type: 'Danger',
      text: 'Copy Failed !'
    })
  });
}
</script>

<style lang="less" scoped>
.sl-color {
  width: 30vw;
  height: 20vw;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .sl-color-main {
    background-color: v-bind(mainColor);
    padding-left: 10%;
    padding-top: 10%;
    .sl-color-name {
      color: #ffffff;
    }
    .sl-color-value {
      color: #ffffff;
    }
  }
  .sl-color-items {
    width: 100%;
    height: 30%;
    background-color: transparent;
    display: flex;
    .sl-color-item {
      flex: 1;
      &:hover {
        border: 2px solid #fff;
      }
      &:active {
        border: none;
      }
    }
    .sl-color-item:nth-child(1) { background-color: v-bind(mainColor1) }
    .sl-color-item:nth-child(2) { background-color: v-bind(mainColor2) }
    .sl-color-item:nth-child(3) { background-color: v-bind(mainColor3) }
    .sl-color-item:nth-child(4) { background-color: v-bind(mainColor4) }
    .sl-color-item:nth-child(5) { background-color: v-bind(mainColor5) }
    .sl-color-item:nth-child(6) { background-color: v-bind(mainColor6) }
  }
}
</style>