<template>
  <button class="slButton" :class="btnClass" :style="styles">
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
  text: Boolean,
  bg: Boolean,
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
const changeColor = ((color:string, num:number) => {
  let colorArr = [
    parseInt('0x' + color.slice(1, 3)),
    parseInt('0x' + color.slice(3, 5)),
    parseInt('0x' + color.slice(5, 7))
  ]
   let sColorChange:Array<number> = [];
   for(var i=0;i<colorArr.length;i++){
   		let val = colorArr[i]+num;
	    if(val<0){
	       val = 0;
	    }
	    if(val>255){
	    	val=255;
	    }
   		sColorChange.push(val)
   }
   
  var r = sColorChange[0]
  var g = sColorChange[1]
  var b = sColorChange[2]

  var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
})
const btnDefaultStyle = {
  '--custom-color': props.color,
  '--custom-color-hover': changeColor(props.color, 40),
  '--custom-color-active': changeColor(props.color, -40),
  '--custom-color-disabled': changeColor(props.color, 80)
};
const btnClass = computed(() => {
  return [
    props.size == "medium"
      ? "sl-button-medium"
      : props.size == "small"
      ? "sl-button-small"
      : props.size == "mini"
      ? "sl-button-mini"
      : "sl-button sl-button-normal",
    props.type ? `sl-button-${props.type}` : "",
    props.disabled ? 'is-disabled' : '',
    props.plain ? 'is-plain' : '',
    props.round ? 'is-round' : '',
    props.text ? 'is-text' : '',
    props.bg ? 'is-bg' : '',
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
@color-custom-hover: var(--custom-color-hover);;
@color-custom-active: var(--custom-color-active);;
@color-custom-disabled: var(--custom-color-disabled);;

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
  color: @color-default;
  &.is-round {
    border-radius: 16px;
  }
  &:hover {
    background-color: lighten(@color-default, 30%);
    color: @color-default;
  }
  &:active {
    background-color: lighten(@color-default, 30%);
    color: @color-default;
    border-color: @color-default;
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
  &.is-text {
    color: @color-default;
    background-color: #fff;
    border: none;
    &:hover {
      color: @color-default;
      background-color: #f5f7fa;
    }
    &:active {
      color: @color-default;
      background-color: #f0f2f5;
    }
    &.is-bg {
      background-color: #f5f7fa;
      &:hover {        
        background-color: #f5f7fa;
      }
      &:active {        
        background-color: #f0f2f5;
      }
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
  &.is-disabled.is-text {
    border: none;
    color: @color-default-disabled;
    cursor: not-allowed;
  }
}
.sl-button-normal {
  height: 32px;
  padding: 8px 15px;
  font-size: 14px;
  &.is-round {
  border-radius: 16px;
  }
}
.sl-button-medium {
  height: 28px;
  padding: 7px 13px;
  font-size: 13px;
  &.is-round {
    border-radius: 14px;
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
      color:darken(@@color-color, 10%);
      border: 1px solid darken(@@color-color, 10%);
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
    &.is-text {
      background-color: #fff;
      color:darken(@@color-color, 10%);
      border: none;
      &:hover { 
        background-color: #f5f7fa;
        color:darken(@@color-color, 10%);
      }
      &:active {
        color: @color-color;
        background-color: #f0f2f5;
      }
      &.is-bg {
        background-color: #f5f7fa;
        &:hover {        
          background-color: #f5f7fa;
        }
        &:active {        
          background-color: #f0f2f5;
        }
      }
    }
    &.is-text.is-disabled {
      border: none;
      color: @@color-disabled;
      cursor: not-allowed;
      &:hover {
        background-color: #fff;
      }
      &:active {
        background-color: #fff;
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
    background-color: @color-custom-hover;
  }
  &:active {
    background-color: @color-custom-active;
  }
  &.is-disabled {
    background-color: @color-custom-disabled;
    cursor: not-allowed;
    &:hover { 
      background-color: @color-custom-disabled;
    }
    &:active {
      background-color: @color-custom-disabled;
    }
  }
  &.is-plain {
    background-color: #fff;
    color: var(--custom-color);
    border-color: var(--custom-color);
    &:hover {
      background-color: var(--custom-color);
      color: #fff;
    }
    &:active {
      background-color: @color-custom-active;
      color: #fff;
    }
    &.is-disabled {
      background-color: #fff;
      color: var(--custom-color-disabled);
      border-color: var(--custom-color-disabled);
    }
  }
}
</style>