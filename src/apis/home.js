import http from '@/utils/http.js'
export function getbannerlist(params={}){
    const {distributionSite='1'}=params//默认值
    return http({
        url:'/home/banner',
        params:{
            distributionSite
        }
    })
}
export function getnewlist(){
    return http({
        url:'/home/new'
    })
}
export function gethotlist(){
    return http({
        url:'/home/hot'
    })
}
export function getproductlist(){
    return http({
        url:'/home/goods'
    })
}