<script setup>
import { getcategory } from "@/apis/category.js";
import { getbannerlist } from "@/apis/home.js";
import { onUpdated, ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
const category = ref({});
const bannerlist = ref([]);
const route = useRoute();
onMounted(() => {
  getcategory(route.params.id).then((res) => {
    console.log(res.result);
    category.value = res.result;
  });
  getbannerlist({
    distributionSite: "2",
  }).then((res) => {
    // console.log(res.result);
    bannerlist.value = res.result;
  });
});

/* onUpdated(() => { 会一直执行updated？？
  getcategory(route.params.id).then((res) => {
    console.log(res.result);
    category.value = res.result;
  });
}); */
// watch(route, () => {
//   getcategory(route.params.id).then((res) => {
//     // console.log(res.result)
//     category.value = res.result;
//   });
// });
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ category.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- banner -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerlist" :key="item.id">
            <img :src="item.imgUrl" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 分类 -->
      <div class="sub-list"><!-- 一 -->
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in category.children" :key="i.id">
            <RouterLink to="/">
              <img v-imglazy="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div
        class="ref-goods"
        v-for="item in category.children"
        :key="item.id"
      ><!-- 二 -->
        <div class="head"><!-- 上 -->
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body"><!-- 下-->
          <GoodsItem v-for="good in item.goods" :good="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
  .home-banner {
    width: 1240px;
    height: 500px;
    margin: 0 auto;
    z-index: 98;

    img {
      width: 100%;
      height: 500px;
    }
  }
}
</style>