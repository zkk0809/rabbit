import http from '@/utils/http'
export function getlikelist(limit){
    return http({
        url:'/goods/relevant',
        params:{
            limit
        }
    })
}