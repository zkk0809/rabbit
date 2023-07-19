import http from '@/utils/http'
export function getcategory(id){
    return http({
        url:'/category',
        params:{
            id
        }
    })
}