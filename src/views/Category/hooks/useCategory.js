import {ref,  onMounted } from "vue";
import { getcategory } from "@/apis/category.js";
import { useRoute } from "vue-router";
import {onBeforeRouteUpdate} from 'vue-router'
export function useCategory() {
    const category = ref({});
    const route = useRoute();
    onMounted(() => {
        getcategory(route.params.id).then((res) => {
            // console.log(res.result);
            category.value = res.result;
        });
    });
    onBeforeRouteUpdate((to) => {//监听路由的改变，解决路由缓存的同时提升性能
        // console.log(to.params.id)
        getcategory(to.params.id).then((res) => {
            // console.log(res.result);
            category.value = res.result;
        });
    })
    return{
        category
    }
}
