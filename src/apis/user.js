import http from '@/utils/http'
export function dologin(account,password){
    return http({
        url:'/login',
        method:'POST',
        data:{
            account,
            password
        }
    })
}