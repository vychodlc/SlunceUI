<template>
  <button :class="isClass" :style="styles">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  name: 'asButton'
}
</script>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: Boolean,
  round: Boolean,
  size: {
    type: String,
    default: "default",
  },
  customColor: {
    type: String,
    default: "",
  },
  leftIcon: String,
  rightIcon: String,
  localing: Boolean,
});
const btnDefaultStyle = {
  background: props.customColor,
  border: props.customColor,
  color: "#fff",
};
const isClass = computed(() => {
  return [
    props.size == "default"
      ? "sl-button"
      : props.size == "medium"
      ? "sl-button-medium"
      : props.size == "small"
      ? "sl-button-small"
      : props.size == "mini"
      ? "sl-button-mini"
      : "sl-button",
    props.type ? (props.disabled ? "" : `sl-button-${props.type}`) : "",
    props.disabled ? `sl-button-${props.type}-disabled` : "",
    {
      "sl-button-round": props.round,
    },
  ];
});
const styles = computed(() => {
  return [
    props.customColor == ""
      ? {}
      : props.type == "default"
      ? {}
      : btnDefaultStyle,
  ];
});
</script>

<style scoped lang="less">
@color-primary: #409eff;
@color-success: #67c23a;
@color-info: #909399;
@color-warning: #e6a23c;
@color-danger: #f56c6c;

button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 8px 15px;
  line-height: 1;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  user-select: none;
  transition: all 0.15s ease;
  border: 1px solid transparent;
  color: #fff;

  margin-left: 15px;
}
.sl-button-default {
  border: 1px solid #dcdfe6;
  color: #000;
}
.sl-button-medium {
  height: 28px;
  padding: 7px 13px;
  font-size: 13px;
}
.sl-button-small {
  height: 24px;
  padding: 5px 11px;
  font-size: 12px;
}
.sl-button-mini {
  height: 20px;
  padding: 4px 9px;
  font-size: 11px;
}
.sl-button-primary {
  background-color: @color-primary;
}
.sl-button-success {
  background-color: @color-success;
}
.sl-button-info {
  background-color: @color-info;
}
.sl-button-warning {
  background-color: @color-warning;
}
.sl-button-danger {
  background-color: @color-danger;
}
</style>