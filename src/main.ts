import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import lcUI from '../packages/index'

createApp(App).use(lcUI).mount('#app')
