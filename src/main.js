

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './styles/common.scss'
import {imglazy} from '@/directives/index'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(imglazy)//注册插件
app.mount('#app')
