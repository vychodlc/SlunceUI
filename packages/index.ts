import type { App } from 'vue'
import asButton from './button'
 
const components = [
  asButton
]
 
const install = (app: App): void => {
  components.forEach(component => app.component(component.name, component))
}
 
const lcui = {
  install
}
 
export {
  asButton
}
 
export default lcui