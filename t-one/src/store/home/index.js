import { reqCategroyList,reqGetBannerList ,reqFloorList} from "@/api"
const state={
    categoryList:[],
    //轮播图的数据
    bannerList:[],
    floorList:[]
}
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    }
}
const actions={
categoryList:async ({commit})=>{
        let  originresult=await reqCategroyList()
        let result=[]
        result=originresult.data.splice(0,15)
        if(originresult.code==200){
            commit("CATEGORYLIST",result)
        }
    },
    async getBannerList({commit}){
        let result=await reqGetBannerList()
        commit("GETBANNERLIST",result.data)
    },
    async getFloorList({commit}){
        let resulte=await reqFloorList()
        commit("GETFLOORLIST",resulte.data)
    }
}
const getters={}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}