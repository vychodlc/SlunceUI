import type { App } from 'vue'
import slButton from './button'
 
const components = [
  slButton
]
const install = (app: App): void => {
  components.forEach(component => app.component(component.name, component))
}
const SlunceUI = {
  install
}

export {
  slButton
}
export default SlunceUI