import type { App } from 'vue'
import slButton from './basic/button'
import slIcon from './basic/icon'
import slLink from './basic/link'
import slMessage from './feedback/message'
 
const components = [
  slButton,
  slIcon,
  slLink,
  slMessage
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
  slMessage
}
export default SlunceUI