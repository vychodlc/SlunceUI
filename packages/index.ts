import type { App } from 'vue'
import slButton from './basic/button'
import slIcon from './basic/icon'
import slLink from './basic/link'
 
const components = [
  slButton,
  slIcon,
  slLink
]
const install = (app: App): void => {
  components.forEach(component => app.component(component.name, component))
}
const SlunceUI = {
  install
}

export {
  slButton,
  slIcon,
  slLink
}
export default SlunceUI