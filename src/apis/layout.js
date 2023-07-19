import http from "@/utils/http";
export function getcategory(){
    return http({
        url:'/home/category/head'
    })
}