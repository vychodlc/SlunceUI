// GlobalComponents for Volar
import slButton from './button'
import slIcon from './icon'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    slButton: typeof slButton;
    slIcon: typeof slIcon;
  }
}
export {};