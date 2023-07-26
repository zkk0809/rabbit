import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import {usestorepinia} from '@/stores/user.js'
import {addcarlist,getcarlist,delcarlist} from '@/apis/car'
export const usecarstore=defineStore('carstore',()=>{
    const userstore=usestorepinia()
    const islogin=computed(()=>userstore.userstate.token)
    const carstate=ref([])
    const caraction=async (data)=>{
        
        // console.log(islogin.value)
        if(islogin.value){//判断登陆与否，是就使用接口加入购物车。使用接口获取购物车列表
            await addcarlist(data.skuId,data.count)//通过接口把选中的商品添加到接口中的购物车
            const res=await getcarlist()//获取接口中的购物车列表
            carstate.value=res.result//对本地购物车列表进行覆盖
        }else{
            const item=carstate.value.find(item=>item.skuId===data.skuId)//有同样规格的skuid就在数量上增加，没有就增加商品到购物车
            if(item){
                item.count+=data.count
            }else{
                carstate.value.push(data)
            }
            // console.log(carstate.value)``
        }
        
    }
    
    const delcar=async (id)=>{
        if(islogin.value){//判断登陆与否
            console.log('111')
            await delcarlist([id])
            const res=await getcarlist()//获取接口中的购物车列表
            carstate.value=res.result//对本地购物车列表进行覆盖
        }else{
            carstate.value=carstate.value.filter(item=>item.skuId!==id)
        }
        
    }
    const allcount=computed(()=>{
        return carstate.value.reduce((a,c)=>a+c.count,0)
    })
    const allprice=computed(()=>{
        return carstate.value.reduce((a,c)=>a+c.count*c.price,0)
    })
    const checkcount=computed(()=>carstate.value.filter(item=>item.selected).reduce((a,c)=>a+c.count,0))
    const checkprice=computed(()=>carstate.value.filter(item=>item.selected).reduce((a,c)=>a+c.count*c.price,0))
    const singlecheck=(skuid,selected)=>{
        const item=carstate.value.find(item=>item.skuId===skuid)
        item.selected=selected
    }
    const isall=computed(()=>{
        return carstate.value.every(item=>item.selected===true)
    })
    const allcheck=(selected)=>{
        carstate.value.forEach(item=>item.selected=selected)
    }
    const clearcarstate=()=>{
        carstate.value=[]
    }
    
    return{
        caraction,
        carstate,
        delcar,
        allcount,
        allprice,
        singlecheck,
        isall,
        allcheck,
        checkcount,
        checkprice,
        clearcarstate
    }
},
{
    persist: true
}
)