<script setup>
import {getdetailhot} from '@/apis/details.js'
import {onMounted,ref} from 'vue'
import {useRoute} from 'vue-router'

const hotlist=ref([])
const route=useRoute()
const props=defineProps({
    type:{
        type:Number,
        default:1
    }
})
onMounted(()=>{
    getdetailhot({
        id:route.params.id,
        type:props.type
    }).then(res=>{
        // console.log(res.result)
        hotlist.value=res.result
    })
})

</script>


<template>
  <div class="goods-hot">
    <h3>{{props.type===1?'24小时热销榜':'周热销榜'}}</h3>
    <!-- 商品区块 -->
    <RouterLink v-for="item in hotlist" :key="item.id" :to="`/details/${item.id}`" class="goods-item" >
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{item.name}}</p>
      <p class="desc ellipsis">{{item.desc}}</p>
      <p class="price">&yen;{{item.price}}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>