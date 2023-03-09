<template>
  <div>
    <p>message</p>
    <sl-button @click="openMsg1">Info</sl-button>
    <sl-button type="success" @click="openMsg2">Success</sl-button>
    <sl-button type="warning" @click="openMsg3">Warning</sl-button>
    <sl-button type="danger" @click="openMsg4">Danger</sl-button>
    <sl-button type="info" @click="openMsg5">Info</sl-button>
    <p>message + canclose</p>
    <sl-button plain @click="openMsgClose('success')">Success</sl-button>
    <sl-button plain @click="openMsgClose('info')">Info</sl-button>
    <sl-button plain @click="openMsgClose('warning')">Warning</sl-button>
    <sl-button plain @click="openMsgClose('danger')">Danger</sl-button>
  </div>
</template>

<script setup lang="ts">
import slMessage from '../../../packages/feedback/message/index'
const openMsg1 = () => {
  slMessage({
    text: '默认消息提示',
    timeout: 1000
  })
}
const openMsg2 = () => {
  slMessage({
    text: 'success',
    type: 'success',
    timeout: 4000
  })
}
const openMsg3 = () => {
  slMessage({
    text: 'warning',
    type: 'warning'
  })
}
const openMsg4 = () => {
  slMessage({
    text: 'danger',
    type: 'danger'
  })
}
const openMsg5 = () => {
  slMessage({
    text: 'info',
    type: 'info'
  })
}
const openMsgClose = (text='info') => {
  slMessage({
    text: `${text}-可关闭的消息`,
    type: text,
    close: true,
  })
}
</script>

<style lang="less" scoped>

</style>