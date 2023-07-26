

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import './styles/common.scss'
import {imglazy} from '@/directives/index'
import {components} from '@/components/index.js'
const app = createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(imglazy)//全局注册指令插件
app.use(components)//全局注册组件插件
app.mount('#app')
