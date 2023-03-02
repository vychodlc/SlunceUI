// GlobalComponents for Volar
import slButton from './basic/button'
import slIcon from './basic/icon'
import slLink from './basic/link'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    slButton: typeof slButton;
    slIcon: typeof slIcon;
    slLink: typeof slLink;
  }
}
export {};