import http from '@/utils/http'
export function getcheckaddress(){
    return http({
        url:'/member/order/pre'
    })
}
export function creatorder(data){
    return http({
        url:'/member/order',
        method:'POST',
        data
    })
}