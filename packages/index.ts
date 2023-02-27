import type { App } from 'vue'
import slButton from './button'
import slIcon from './icon'
 
const components = [
  slButton,
  slIcon
]
const install = (app: App): void => {
  components.forEach(component => app.component(component.name, component))
}
const SlunceUI = {
  install
}

export {
  slButton,
  slIcon
}
export default SlunceUI