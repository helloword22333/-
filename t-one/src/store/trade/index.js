import { reqAddressInfo,reqOrderInfo } from "@/api"

const state={
    address:[],
    orderInfo:{}
}

const actions={
    async getUserAddress({commit}){
        let result= await reqAddressInfo()
        if(result.code==200){
             commit("GETUSERADDRESS",result.data)
             
             return "ok"
        }
        else{
            return Promise.reject(new Error("faile"))
        }
    },
    //獲取商品清單的數據
    async getOrderInfo({commit}){
        let result =await reqOrderInfo()
        if(result.code==200){
            commit("GETORDERINFO",result.data)
            return "ok"
        }
        else{
            return Promise.reject(new Error("faile"))
        }
    }

}

const mutations={
    GETUSERADDRESS(state,datas){
        state.address=datas
    },
    GETORDERINFO(state,data){
        state.orderInfo=data
    }
}

const getters={}

export default{
    actions,
    state,
    mutations,
    getters
}