import { ref, onMounted } from "vue";
import { getbannerlist } from "@/apis/home.js";
export function useBanner(){
    const bannerlist = ref([]);
    onMounted(() => {
        getbannerlist({
          distributionSite: "2",
        }).then((res) => {
          // console.log(res.result);
          bannerlist.value = res.result;
        });
      });
      return{
        bannerlist
      }
}