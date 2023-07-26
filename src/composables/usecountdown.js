import { ref,computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'
export const usecountdown=()=>{
    const time=ref(0)
    let timer=null
    const formattime=computed(()=>dayjs.unix(time.value).format('mm分ss秒'))
    const start=(date)=>{
        time.value=date
        timer=setInterval(()=>{
            time.value--
            if(time.value==0){
                clearInterval(timer)
            }
        },1000)
        
    }
    onUnmounted(()=>{
        timer&&clearInterval(timer)//组件销毁就销毁定时器，防止内存溢出
    })
    return {
        formattime,
        start
    }
}