<template>
  <span :class="itemClass"><slot></slot></span>
</template>

<script lang="ts">
export default {
  name: 'sl-link'
}
</script>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false
  },
  underline: {
    type: Boolean,
    default: true
  },
})
const itemClass = computed(() => {
  return [
    'sl-link',
    props.type?`sl-link-${props.type}`:'sl-link-default',
    props.disabled?`is-disabled`:'',
    props.underline?'':'no-underline',
  ]
})

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

.sl-link {
  font-size: 14px;
  margin: 2px;
  padding-bottom: 2px;
  cursor: pointer;
  &.sl-link-default {
    color: @color-default;
    &:hover {
      color: @color-primary;    
      border-bottom: 1px solid @color-primary;
    }
    &.is-disabled {
      color: lighten(@color-default, 20%);
      cursor: not-allowed;
      border: none;
    }
  }
  &.sl-link-primary {
    color: @color-primary;
    &:hover {
      color: @color-primary-hover;    
      border-bottom: 1px solid @color-primary;
    }
    &.is-disabled {
      color: lighten(@color-primary, 20%);
      cursor: not-allowed;
      border: none;
    }
  }
  &.sl-link-success {
    color: @color-success;
    &:hover {
      color: @color-success-hover;    
      border-bottom: 1px solid @color-success;
    }
    &.is-disabled {
      color: lighten(@color-success, 20%);
      cursor: not-allowed;
      border: none;
    }
  }
  &.sl-link-warning {
    color: @color-warning;
    &:hover {
      color: @color-warning-hover;    
      border-bottom: 1px solid @color-warning;
    }
    &.is-disabled {
      color: lighten(@color-warning, 20%);
      cursor: not-allowed;
      border: none;
    }
  }
  &.sl-link-danger {
    color: @color-danger;
    &:hover {
      color: @color-danger-hover;    
      border-bottom: 1px solid @color-danger;
    }
    &.is-disabled {
      color: lighten(@color-danger, 20%);
      cursor: not-allowed;
      border: none;
    }
  }
  &.sl-link-info {
    color: @color-info;
    &:hover {
      color: @color-info-hover;    
      border-bottom: 1px solid @color-info;
    }
    &.is-disabled {
      color: lighten(@color-info, 20%);
      cursor: not-allowed;
      border: none;
    }
  }
  &.no-underline {
    &:hover {
      border-bottom: none;
    }
  }
}
</style>
