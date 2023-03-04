//search组件的小仓库
import { reqGetSearch } from "@/api"
const state={
    SearchInfo:{} 
}
const mutations={
    GETSEARCHLIST(state,data){
        state.SearchInfo=data
    }
}
const actions={
    async getSearchList(context,params={}){
        let result=await reqGetSearch(params)
       // 
      if(result.code==200){
        context.commit("GETSEARCHLIST",result.data)
      }
    }
}
//类似于计算属性,拿到这个模块的state数据
const getters={
    goodsList(state){
        return state.SearchInfo.goodsList||[]
    },
    trademarkList(state){
        return state.SearchInfo.trademarkList||[]
    },
    attrsList(state){
        return state.SearchInfo.attrsList||[]
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}