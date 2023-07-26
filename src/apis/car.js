import http from '@/utils/http'
export function addcarlist(skuId,count){
    return http({
        url:'/member/cart',
        method:"POST",
        data:{
            skuId,
            count
        }
    })
}
export function getcarlist(){
    return http({
        url:'/member/cart'
    })
}
export function delcarlist(ids){
    return http({
        url:'/member/cart',
        method:'DELETE',
        data:{
            ids
        }
    })
}
export function mergecarlist(data){//合并购物车
    return http({
        url:'/member/cart/merge',
        method:'POST',
        data
    })
}