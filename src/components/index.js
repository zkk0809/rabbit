import XtxSku from './XtxSku/index.vue'
import ImgView from './ImgView/index.vue'
export const components={//全局定义组件
    install(app){
        app.component('XtxSku',XtxSku)
        app.component('ImgView',ImgView)
    }
}