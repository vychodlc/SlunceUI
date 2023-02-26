<template>
  <button class="slButton" :class="isClass" :style="styles">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  name: 'sl-button'
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
  plain: Boolean,
  size: {
    type: String,
    default: "default",
  },
  color: {
    type: String,
    default: "#000",
  },
  leftIcon: String,
  rightIcon: String,
  localing: Boolean,
});
const btnDefaultStyle = {
  '--custom-color': props.color,
};
const isClass = computed(() => {
  return [
    props.size == "medium"
      ? "sl-button-medium"
      : props.size == "small"
      ? "sl-button-small"
      : props.size == "mini"
      ? "sl-button-mini"
      : "sl-button",
    props.type ? `sl-button-${props.type}` : "",
    props.disabled ? 'is-disabled' : '',
    props.plain ? 'is-plain' : '',
    props.round ? 'is-round' : "",
  ];
});
const styles = computed(() => {
  return [
    props.color == "" ? 
      {}
    : props.type == "default" ? 
      {}
    : btnDefaultStyle,
  ];
});
</script>

<style scoped lang="less">

@color-default: #606266;
@color-primary: #409eff;
@color-success: #67c23a;
@color-info: #909399;
@color-warning: #e6a23c;
@color-danger: #f56c6c;

@color-default-hover: lighten(@color-default, 10%);
@color-primary-hover: lighten(@color-primary, 10%);
@color-success-hover: lighten(@color-success, 10%);
@color-info-hover: lighten(@color-info, 10%);
@color-warning-hover: lighten(@color-warning, 10%);
@color-danger-hover: lighten(@color-danger, 10%);

@color-default-active: darken(@color-default, 10%);
@color-primary-active: darken(@color-primary, 10%);
@color-success-active: darken(@color-success, 10%);
@color-info-active: darken(@color-info, 10%);
@color-warning-active: darken(@color-warning, 10%);
@color-danger-active: darken(@color-danger, 10%);

@color-default-disabled: lighten(@color-default, 20%);
@color-primary-disabled: lighten(@color-primary, 20%);
@color-success-disabled: lighten(@color-success, 20%);
@color-info-disabled: lighten(@color-info, 20%);
@color-warning-disabled: lighten(@color-warning, 20%);
@color-danger-disabled: lighten(@color-danger, 20%);

@color-custom: var(--custom-color);
// @color-custom-hover: var(--custom-color, lighten(#ff0000,10%));
// @color-custom-active: var(--custom-color, darken(#ff0000,10%));
// @color-custom-disabled: var(--custom-color, lighten(#ff0000,20%));
@color-custom-hover: var(--custom-color);;
@color-custom-active: var(--custom-color);;
@color-custom-disabled: var(--custom-color);;

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
  // color: @color-default;
  color: @color-custom;
  &.is-round {
    border-radius: 16px;
  }
  &:hover {
    background-color: lighten(@color-primary, 30%);
    color: @color-primary;
  }
  &:active {
    background-color: lighten(@color-primary, 30%);
    color: @color-primary;
    border-color: @color-primary;
  }
  &.is-plain {
    background-color: #fff;
    &:hover {
      color: @color-primary;
      border-color: @color-primary;
    }
    &:active {
      color: @color-primary;
      border-color: @color-primary;
    }
  }
  &.is-disabled {
    border: 1px solid #dcdfe6;
    color: @color-default-disabled;
    cursor: not-allowed;
    &:hover { 
      border: 1px solid #dcdfe6;
      color: @color-default-disabled;
      background-color: #fff;
    }
    &:active {
      border: 1px solid #dcdfe6;
      color: @color-default-disabled;
      background-color: #fff;
    }
  }
  &.is-disabled.is-plain {
    border: 1px solid #dcdfe6;
    color: @color-default-disabled;
    cursor: not-allowed;
  }
}
.sl-button-medium {
  height: 28px;
  padding: 7px 13px;
  font-size: 13px;
  &.is-round {
    border-radius: 16px;
  }
}
.sl-button-small {
  height: 24px;
  padding: 5px 11px;
  font-size: 12px;
  &.is-round {
    border-radius: 12px;
  }
}
.sl-button-mini {
  height: 20px;
  padding: 4px 9px;
  font-size: 10px;
  &.is-round {
    border-radius: 10px;
  }
}
.generateBtn(@name) {
  .sl-button-@{name} {
    @color-color: "color-@{name}";
    @color-hover: "color-@{name}-hover";
    @color-active: "color-@{name}-active";
    @color-disabled: "color-@{name}-disabled";
    background-color: @@color-color;
    &:hover {
      background-color: @@color-hover;
    }
    &:active {
      background-color: @@color-active;
    }
    
    &.is-disabled {
      background-color: @@color-disabled;
      cursor: not-allowed;
      &:hover { 
        background-color: @@color-disabled;
      }
      &:active {
        background-color: @@color-disabled;
      }
    }
    &.is-plain {
      background-color: lighten(@@color-color, 25%);
      color: @@color-color;
      border: 1px solid @@color-color;
      &:hover { 
        background-color: @@color-color;
        color: #fff;
      }
      &:active {
        background-color: darken(@@color-color, 10%);
      }
      &.is-disabled {
        background-color: lighten(@@color-color, 27%);
        color: lighten(@@color-color, 18%);
        border: 1px solid lighten(@@color-color, 18%);
      }
    }
  }
}
.generateBtn(primary);
.generateBtn(success);
.generateBtn(info);
.generateBtn(warning);
.generateBtn(danger);

.sl-button-custom {
  background-color: var(--custom-color);
  &:hover {
  }
  &:active {
  }
  &.is-disabled {
    cursor: not-allowed;
    &:hover { 
    }
    &:active {
    }
  }
  &.is-plain {
    background-color: #fff;
    color: var(--custom-color);
    border-color: var(--custom-color);
    &:hover {
    }
    &:active {
    }
    &.is-disabled {
    }
  }
}
</style>