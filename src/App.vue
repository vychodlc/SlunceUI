<script setup lang="ts">
import slMessage from '../packages/feedback/message/index'
const openMsg1 = () => {
  slMessage({
    text: '默认消息提示',
    timeout: 100
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
<template>
  <sl-color></sl-color>
  <sl-row>
    <sl-col :span="12"><div class="col-box-2 col-box">12</div></sl-col>
    <sl-col :span="12"><div class="col-box-1 col-box">12</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
    <sl-col :span="8"><div class="col-box-2 col-box">8</div></sl-col>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="6"><div class="col-box-2 col-box">6</div></sl-col>
    <sl-col :span="6"><div class="col-box-1 col-box">6</div></sl-col>
    <sl-col :span="6"><div class="col-box-2 col-box">6</div></sl-col>
    <sl-col :span="6"><div class="col-box-1 col-box">6</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="4"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="2"><div class="col-box-2 col-box">2</div></sl-col>
    <sl-col :span="4"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="6"><div class="col-box-2 col-box">6</div></sl-col>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
  </sl-row>
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

  <sl-row>
    <sl-col :span="10"><div class="col-box-2 col-box">10</div></sl-col>
    <sl-col :span="12" :offset="2"
      ><div class="col-box-1 col-box">12</div></sl-col
    >
  </sl-row>
  <sl-row>
    <sl-col :span="8"><div class="col-box-1 col-box">8</div></sl-col>
    <sl-col :span="8" :offset="8"><div class="col-box-1 col-box">8</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="2"><div class="col-box-2 col-box">2</div></sl-col>
    <sl-col :span="6" :offset="4"><div class="col-box-1 col-box">6</div></sl-col>
    <sl-col :span="6" :offset="6"><div class="col-box-2 col-box">6</div></sl-col>
  </sl-row>
  <sl-row>
    <sl-col :span="4"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="2" :offset="4"><div class="col-box-2 col-box">2</div></sl-col>
    <sl-col :span="4" :offset="2"><div class="col-box-1 col-box">4</div></sl-col>
    <sl-col :span="6" :offset="2"><div class="col-box-2 col-box">6</div></sl-col>
  </sl-row>
  
  <sl-button type="success" @click="openMsg2" disabled>Success</sl-button>
  <p>link</p>
  <sl-link href="https://element-plus.org">default</sl-link>
  <sl-link type="primary">primary</sl-link>
  <sl-link type="success">success</sl-link>
  <sl-link type="warning">warning</sl-link>
  <sl-link type="danger">danger</sl-link>
  <sl-link type="info">info</sl-link>
  <p>link + disabled</p>
  <sl-link disabled href="https://element-plus.org">default</sl-link>
  <sl-link disabled type="primary">primary</sl-link>
  <sl-link disabled type="success">success</sl-link>
  <sl-link disabled type="warning">warning</sl-link>
  <sl-link disabled type="danger">danger</sl-link>
  <sl-link disabled type="info">info</sl-link>
  <br/>
  <sl-link :underline="false">Without Underline</sl-link>
  <sl-link >With Underline</sl-link>
  <p>icon</p>
  <sl-icon name="play" color="#9de7d1" width="50" height="50"></sl-icon>
  <sl-icon name="plus" color="#9de7d1" width="50" height="50"></sl-icon>
  <sl-icon name="minus" color="#9de7d1" width="50" height="50"></sl-icon>
  <sl-icon name="search" color="#9de7d1" width="80" height="80"></sl-icon>
  <p>size</p>
  <sl-button>这是一个按钮</sl-button>
  <sl-button size="medium">钮</sl-button>
  <sl-button size="small">这是一个按钮</sl-button>
  <sl-button size="mini">这是一个按钮</sl-button>
  <br/>
  <br/>
  <p>type</p>
  <sl-button>default</sl-button>
  <sl-button type="primary">Primary</sl-button>
  <sl-button type="success">Success</sl-button>
  <sl-button type="info">Info</sl-button>
  <sl-button type="warning">Warning</sl-button>
  <sl-button type="danger">Danger</sl-button>
  <br/>
  <br/>
  <p>plain</p>
  <sl-button plain>default</sl-button>
  <sl-button type="primary" plain>Primary</sl-button>
  <sl-button type="success" plain>Success</sl-button>
  <sl-button type="info" plain>Info</sl-button>
  <sl-button type="warning" plain>Warning</sl-button>
  <sl-button type="danger" plain>Danger</sl-button>
  <br/>
  <br/>
  <p>type + disabled</p>
  <sl-button disabled>default</sl-button>
  <sl-button type="primary" disabled>Primary</sl-button>
  <sl-button type="success" disabled>Success</sl-button>
  <sl-button type="info" disabled>Info</sl-button>
  <sl-button type="warning" disabled>Warning</sl-button>
  <sl-button type="danger" disabled>Danger</sl-button>
  <br/>
  <br/>
  <p>plain + disabled</p>
  <sl-button plain disabled>default</sl-button>
  <sl-button type="primary" plain disabled>Primary</sl-button>
  <sl-button type="success" plain disabled>Success</sl-button>
  <sl-button type="info" plain disabled>Info</sl-button>
  <sl-button type="warning" plain disabled>Warning</sl-button>
  <sl-button type="danger" plain disabled>Danger</sl-button>
  <br/>
  <br/>
  <p>size + round</p>
  <sl-button round>default</sl-button>
  <sl-button size="medium" type="primary" round>Medium</sl-button>
  <sl-button size="small" type="primary" round>Small</sl-button>
  <sl-button size="mini" type="primary" round>Mini</sl-button>
  <br/>
  <br/>
  <p>text</p>
  <sl-button text>Default</sl-button>
  <sl-button type="primary" text>Primary</sl-button>
  <sl-button type="success" text>Success</sl-button>
  <sl-button type="info" text>Info</sl-button>
  <sl-button type="warning" text>Warning</sl-button>
  <sl-button type="danger" text>Danger</sl-button>
  <br/>
  <br/>
  <p>text + background</p>
  <sl-button text bg>Default</sl-button>
  <sl-button type="primary" text bg>Primary</sl-button>
  <sl-button type="success" text bg>Success</sl-button>
  <sl-button type="info" text bg>Info</sl-button>
  <sl-button type="warning" text bg>Warning</sl-button>
  <sl-button type="danger" text bg>Danger</sl-button>
  <br/>
  <br/>
  <p>text + disabled</p>
  <sl-button text disabled>Default</sl-button>
  <sl-button type="primary" text disabled>Primary</sl-button>
  <sl-button type="success" text disabled>Success</sl-button>
  <sl-button type="info" text disabled>Info</sl-button>
  <sl-button type="warning" text disabled>Warning</sl-button>
  <sl-button type="danger" text disabled>Danger</sl-button>
  <br/>
  <br/>
  <p>color</p>
  <sl-button type="custom" color="#626aef">Default</sl-button>
  <sl-button type="custom" color="#626aef" plain>Plain</sl-button>
  <sl-button type="custom" color="#626aef" disabled>Disabled</sl-button>
  <sl-button type="custom" color="#626aef" plain disabled>Plain Disabled</sl-button>
  <br/>
  <br/>
  <p>round</p>
  <sl-button round>默认按钮</sl-button>
  <sl-button round type="primary">主要按钮</sl-button>
  <sl-button round type="success">成功按钮</sl-button>
  <sl-button round type="info">信息按钮</sl-button>
  <sl-button round type="warning">警告按钮</sl-button>
  <sl-button round type="danger">危险按钮</sl-button>
</template>

<style scoped>
.col-box {
  height: 34px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 34px;
}
.col-box-1 {
  background-color: #9eaaaf;
  color: #333;
}
.col-box-2 {
  background-color: #505050;
  color: #fff;
}
</style>
