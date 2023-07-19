import http from '@/utils/http'
export function getlist(){
    return http({
        url: 'home/category/head'
    })
}