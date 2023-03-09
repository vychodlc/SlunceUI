import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import SlunceUI from '../packages/index'
import Router from './router/index';
// import SlunceUI from '../dist/slunce-ui'
// import '../dist/style.css'

createApp(App).use(SlunceUI).use(Router).mount('#app')
