import Vue from "vue"
import Vuex from "vuex"

import search from "./search/index"
import home from "./home/index"
import detail from "./detail/index"
import shopCar from "./shopCar/index"
import trade from "./trade/index"
import user  from "./user/index"
Vue.use(Vuex)

export default new Vuex.Store({
   modules:{
    search,
    home,
    detail,
    shopCar,
    user,
    trade
   }
})
