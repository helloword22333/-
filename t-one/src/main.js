import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import typenav from "./components/typenav/indexA"
import store from './store/index';
import carousel from "./components/carousel"
import  pagination  from './components/pagination/index';

import "./mock/mockserve"
//引入swiper样式
import "swiper/css/swiper.css"
//注册全局的组件，其他组件不用引入
import * as API from "@/api/index"
//統一引入，API包含所有函數是，對象

//element按需
import { MessageBox } from 'element-ui';
//引入二维码生成器

//引入图片懒加载插件 vue2必须下载1.3.3版本
import VueLazyload from 'vue-lazyload'

import  lazyimg from "@/assets/lazyload.gif"
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert;
Vue.component("TypeNav",typenav)
Vue.component("carousel",carousel)
Vue.component("pagination",pagination)
Vue.config.productionTip = false
Vue.use(VueLazyload,{
  loading:lazyimg
})
new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  },
  router
}).$mount('#app')

