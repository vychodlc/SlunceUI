// GlobalComponents for Volar
import slButton from './button'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    slButton: typeof slButton;
  }
}
export {};