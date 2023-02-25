import type { App } from 'vue'
import asButton from './src/button.vue'
 
// 使用install方法，在app.use挂载
asButton.install = (app: App) => {
  app.component(asButton.name, asButton)
}
 
export default asButton

export type { ButtonInstance } from './src/instance'