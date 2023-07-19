<script setup>
import HomePanel from '@/views/Home/components/HomePanel.vue'
import {gethotlist} from '@/apis/home.js'
import {onMounted,ref} from 'vue'
const hotlist=ref([])
onMounted(()=>{
    gethotlist().then(res=>{
        // console.log(res.result)
        hotlist.value=res.result
    })
})
</script>

<template>
  <home-panel title="人气推荐" subtitle="人气爆款 不容错过">
    <ul class="goods-list">
    <li v-for="item in hotlist" :key="item.id">
      <RouterLink to="/">
        <img v-imglazy='item.picture' alt="" />
        <p class="name">{{ item.title }}</p>
        <p class="desc">{{ item.alt }}</p>
      </RouterLink>
    </li>
  </ul>
  </home-panel>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>