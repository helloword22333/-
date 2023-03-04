
import { reqGoodsInfo,reqAddOrupdataShopCar } from "@/api"
import {getUUID} from "@/utils/uuid_token"
const state={
    goodsInfo:{},
    uuid_token:getUUID()
}
const mutations={
    GETGOODSINFO(state,info){
        state.goodsInfo=info
    }
}
const actions={
   async getGoodsInfo({commit},info){
        let result= await reqGoodsInfo(info)
        if(result.code==200){
            commit("GETGOODSINFO",result.data)
        }
    },
    //这里是存数据到服务器，不需要改变state 
   async addOrUpdataShopCart({commit},{skuId,skuNum}){
         setTimeout(async () => {
            let  result=await reqAddOrupdataShopCar(skuId,skuNum)
            if(result.code==200){
                return "ok"
            }
            else{
                return  Promise.reject(new Error("faile"))
            }
            
            }, 10);
    
    }
}
const getters={
    categoryView(state){
        return state.goodsInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodsInfo.skuInfo||{}
    },
    skuAttrValueList(state){
        return state.goodsInfo.spuSaleAttrList||[]
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}
