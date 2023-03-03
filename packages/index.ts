import type { App } from 'vue'
import slButton from './basic/button'
import slIcon from './basic/icon'
import slLink from './basic/link'
import slMessage from './feedback/message'
import slCol from './basic/layout/col'
import slRow from './basic/layout/row'
import slColor from './basic/color'
 
const components = [
  slButton,
  slIcon,
  slLink,
  slMessage,
  slCol,
  slRow,
  slColor
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
  slColor
}
export default SlunceUI