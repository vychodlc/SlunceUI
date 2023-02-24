import type { App } from 'vue'
import asButton from './button.vue'
 
// 使用install方法，在app.use挂载
asButton.install = (app: App) => {
  app.component(asButton.name, asButton)
}
 
export default asButton