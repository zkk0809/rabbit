import http from '@/utils/http'
export function getcategory(id) {
    return http({
        url: '/category',
        params: {
            id
        }
    })
}
export const getsubcategory = (id) => {//二级面包屑导航
    return http({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}
export const getsubcategorylist = (data) => {//二级页面商品api
    return http({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }

