<script setup lang="ts">
</script>
<template>
  <p>icon</p>
  <sl-icon name="close"></sl-icon>
  <sl-icon name="upload"></sl-icon>
  <sl-icon name="delete"></sl-icon>
  <sl-icon name="add"></sl-icon>
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
  <p>color</p>
  <sl-button type="custom" color="#626aef">Default</sl-button>
  <sl-button type="custom" color="#626aef" plain>Plain</sl-button>
  <sl-button type="custom" color="#626aef" disabled>Disabled</sl-button>
  <sl-button type="custom" color="#626aef" plain disabled>Plain Disabled</sl-button>
  <br/>
  <br/>

  <sl-button round>默认按钮</sl-button>
  <sl-button round type="primary">主要按钮</sl-button>
  <sl-button round type="success">成功按钮</sl-button>
  <sl-button round type="info">信息按钮</sl-button>
  <sl-button round type="warning">警告按钮</sl-button>
  <sl-button round type="danger">危险按钮</sl-button>
</template>

<style scoped>
</style>
