import http from '@/utils/http'
export function getorderinfo(id){
    return http({
        url:`/member/order/${id}`
    })
}