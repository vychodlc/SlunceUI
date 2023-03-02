<template>
  <Transition name="slice-fade">
    <div class="sl-message" :class="itemClass" v-show="isShow">
      <template v-if="isText">
        <!-- <i :class="[style[type].icon]"></i> -->
        <span class="text">{{ text }}</span>
      </template>
      <template v-else>
        <slot />
      </template>
    </div>
  </Transition>
</template>

<script lang="ts">
  export default {
    name: 'sl-message'
  }
</script>

<script setup lang="ts">
import {computed, ref, onMounted} from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: "info",
  },
  text: {
    type: [String, Object],
    default: ''
  }
})
const isText = computed(() => {
  return typeof props.text === 'string'
})
const itemClass = computed(() => {
  return props.type?`sl-message-${props.type}`:'sl-message-info'
})
const isShow = ref(false)
onMounted(() => {
  isShow.value = true
})
</script>

<style scoped lang="less">
@color-default: #606266;
@color-primary: #409eff;
@color-success: #67c23a;
@color-info: #909399;
@color-warning: #e6a23c;
@color-danger: #f56c6c;
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
div.slide-fade-enter-from,
div.slide-fade-leave-to {
  transform: translate3d(-50%, -75px, 0);
}
.sl-message {
  font-size: 14px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  top: 25px;
  transform: translateX(-50%);
  height: auto;
  display: flex;
  align-items: center;
  min-height: 45px;
  padding: 5px 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  &.sl-message-info {
    color: @color-info;
    background-color: lighten(@color-info, 40%);
    border: 1px solid lighten(@color-info, 20%);
  }
  &.sl-message-success {
    color: @color-success;
    background-color: lighten(@color-success, 40%);
    border: 1px solid lighten(@color-success, 20%);
  }
  &.sl-message-danger {
    color: @color-danger;
    background-color: lighten(@color-danger, 40%);
    border: 1px solid lighten(@color-danger, 20%);
  }
  &.sl-message-warning {
    color: @color-warning;
    background-color: lighten(@color-warning, 40%);
    border: 1px solid lighten(@color-warning, 20%);
  }
}
</style>