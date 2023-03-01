import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// import 'virtual:svg-icons-register'

import SlunceUI from '../packages/index'
// import SlunceUI from '../dist/slunce-ui'
// import '../dist/style.css'

createApp(App).use(SlunceUI).mount('#app')
