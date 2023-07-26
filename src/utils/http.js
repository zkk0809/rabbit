import axios from "axios"
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import {usestorepinia} from '@/stores/user.js'
import router from '@/router'
const http = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})
// axios请求拦截器
http.interceptors.request.use(config => {
    const userstore=usestorepinia()
    const token=userstore.userstate.token
    if(token){
        config.headers.Authorization= `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
    // console.log(e.response.data.message)
    //统一错误显示
    ElMessage({
        type:'warning',
        message:e.response.data.message
    })
    //token失效处理
    const userstore=usestorepinia()
    if(e.response.status===401){
        userstore.clearstate()
        router.push('/login')
    }
    return Promise.reject(e)
})
export default http