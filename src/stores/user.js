import {defineStore} from 'pinia'
import { ref } from 'vue'
import {dologin} from '@/apis/user.js'
import {usecarstore} from './car.js'
import {getcarlist,mergecarlist} from '@/apis/car'
export const usestorepinia=defineStore('user',()=>{
    const carstore=usecarstore()
    const userstate=ref({})
    const useraction= async (account,password)=>{
        const res= await dologin(account,password)
        userstate.value=res.result
        await mergecarlist(carstore.carstate.map(item=>{//合并购物车，后端会把传入的本地商品参数添加到后端购物车中
            return {
                skuId:item.skuId,
                selected:item.selected,
                count:item.count
            }
        }))
        const res1=await getcarlist()//获取接口中的购物车列表
        carstore.carstate=res1.result//对本地购物车列表进行覆盖
        
    }
    /* const useraction=  (account,password)=>{不可取，useraction就不是异步函数了
          dologin(account,password).then(res=>{
            userstate.value=res.result
            console.log(userstate.value)
          })
    } */
    const clearstate=()=>{
        userstate.value={}
        carstore.clearcarstate()//退出时清空购物车
    }
    return{
        useraction,
        userstate,
        clearstate
    }
},
{
    persist: true
}
)