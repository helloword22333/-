import { reqCarlist ,reqDeleteCarById, reqUpdateCheckeById} from "@/api"
let state={
    carList:[]
}
let mutations={
    GETCARLIST(state,carList){
        state.carList=carList
    }
}
let getters={
    carList(state){
        return state.carList[0]||{}
    },
    
}
let actions={
   async getCarList({commit}){
    let result= await reqCarlist();
    if(result.code==200){
        commit("GETCARLIST",result.data)
    }
    },
   async deletCarListBySkuId({commit},skuId){
        let result=await reqDeleteCarById(skuId)
        if(result.code==200){
            return "ok"
        }
        else{
            return Promise.reject(new Error("faile"))
        }
    },
    //修改购物车的商品选中
    async updateCheckedById({commit},{skuId,isChecked}){
        let result=await reqUpdateCheckeById(skuId,isChecked)
        if(result.code==200){
            return "ok"
        }
        else{
            return Promise.reject(new Error("faile"))
        }
    },
    deleteAllCheckedCar(context){
        let promisAll=[]
        //获取购物车中全部的商品，context包括getters,state,commit
        context.getters.carList.cartInfoList.forEach(item=>{
            if(item.isChecked==1){
                let p=context.dispatch("deletCarListBySkuId",item.skuId)
                promisAll.push(p)
            }
        })
        return Promise.all(promisAll)
    },
    updateAllCarChecked({dispatch,state},isChecked){
        let promiseAll=[],p
       state.carList[0].cartInfoList.forEach(item=>{
            p=dispatch("updateCheckedById",{skuId:item.skuId,isChecked})
            promiseAll.push(p)
       })
       return Promise.all(promiseAll)
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}