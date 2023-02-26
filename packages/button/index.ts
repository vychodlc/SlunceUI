import type { App } from 'vue'
import slButton from './src/button.vue'
 
// 使用install方法，在app.use挂载
slButton.install = (app: App) => {
  app.component(slButton.name, slButton)
}

export default slButton