<script setup>
import {getsubcategory,getsubcategorylist} from '@/apis/category.js'
import {onMounted,ref} from 'vue'
import {useRoute} from 'vue-router'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
const subcategorylist=ref({})
const goodlist=ref([])
const isdisabled=ref(false)
const route=useRoute()
const data=ref({
    categoryId: route.params.id ,
    page: 2,
    pageSize: 20,
    sortField: 'publishTime'/*   'orderNum' | 'evaluateNum */
})

onMounted(()=>{
    getsubcategory(route.params.id).then(res=>{//导航
        // console.log(res.result)
        subcategorylist.value=res.result
    })
    getsubcategorylist(data.value).then(res=>{//商品
        // console.log(res.result)
        goodlist.value=res.result.items
    })
})
const tabchange=()=>{//筛选功能，结合elementplus功能
  // console.log('change',data.value.sortField)
  getsubcategorylist(data.value).then(res=>{//商品
        // console.log(res.result)
        goodlist.value=res.result.items
    })
}
const load=()=>{
  data.value.page++
  getsubcategorylist(data.value).then(res=>{//商品
        // console.log(res.result)
        goodlist.value=[...goodlist.value,...res.result.items]
        if(res.result.items.length===0){
          isdisabled.value=true
        }
    })
  
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${subcategorylist.parentId}` }">{{subcategorylist.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{subcategorylist.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="data.sortField" @tab-change='tabchange'><!-- 双向绑定的值就是tab的name -->
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled='isdisabled'><!-- 当请求数据为空时，禁用滚动加载指令 -->
         <!-- 商品列表-->
         <goods-item v-for="item in goodlist" :key="item.id" :good=item></goods-item>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>