import type { App } from 'vue'
import slIcon from './src/icon.vue'
 
// 使用install方法，在app.use挂载
slIcon.install = (app: App) => {
  app.component(slIcon.name, slIcon)
}

export default slIcon