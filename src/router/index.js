import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Details from '@/views/Details/index.vue'
import CarList from '@/views/Carlist/index.vue'
import CheckOut from '@/views/CheckOut/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import OrderInfo from '@/views/Member/components/OrderInfo.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    component:Layout,
    children:[
      {
        path:'',
        component:Home
      },
      {
        path:'category/:id',
        component:Category
      },
      {
        path:'category/sub/:id',
        component:SubCategory
      },
      {
        path:'details/:id',
        component:Details
      },
      {
        path:'/carlist',
        component:CarList
      },
      {
        path:'/checkout',
        component:CheckOut
      },
      {
        path:'/pay',
        component:Pay
      },
      {
        path:'/paycallback',
        component:PayBack
      },
      {
        path:'/member',
        component:Member,
        // redirect:'/member/user',
        children:[
          {
            path:'user',
            component:UserInfo
          },
          {
            path:'order',
            component:OrderInfo
          },
          {
            path:'/member',//重定向
            // component:OrderInfo,
            redirect:'/member/user',
          },
        ]
      },
    ]
   },
   {
    path:'/login',
    component:Login
   }
  ],
  scrollBehavior(){//路由滚动行为，路由切换会滚动到顶部
    return {
      top:0
    }
  }
})

export default router
