import { useIntersectionObserver } from '@vueuse/core'
export const imglazy={//把懒加载封装成插件
    install(app){//一旦app注册后就会执行下列代码
        app.directive('imglazy',{//图片懒加载全局自定义指令
            mounted(el,binding){
                const {stop}=useIntersectionObserver(//vueuse库中判断目标元素是否出现在视口
                    el,
                    ([{ isIntersecting }]) => {
                        // console.log(isIntersecting)
                        if(isIntersecting){
                            el.src=binding.value
                            stop()
                        }
                    }
                  )
            }
        })
    }
}