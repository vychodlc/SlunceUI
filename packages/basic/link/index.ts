import type { App } from 'vue'
import slLink from './src/link.vue'

// 使用install方法，在app.use挂载
slLink.install = (app: App) => {
  app.component(slLink.name, slLink)
}

export default slLink