import type { App } from 'vue'

import slButton from './basic/button'
import slIcon from './basic/icon'
import slLink from './basic/link'
import slCol from './basic/layout/col'
import slRow from './basic/layout/row'
import slColor from './basic/color'

import slMessage from './feedback/message'

import slInput from './form/input'
 
const components = [
  slButton,
  slIcon,
  slLink,
  slMessage,
  slCol,
  slRow,
  slColor,
  slInput
]
const install = (app: App): void => {
  components.forEach(component => app.component(component.name, component))

  app.config.globalProperties.$message = slMessage
}
const SlunceUI = {
  install
}

export {
  slButton,
  slIcon,
  slLink,
  slMessage,
  slCol,
  slRow,
  slColor,
  slInput
}
export default SlunceUI