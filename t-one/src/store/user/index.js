import {reqGetCode,reqUserLogin,reqUserRegister,reqUserInfo, reqLogOut} from "@/api/index"
import { setToken } from "@/utils/token"
const state={
    code:'',
    token:localStorage.getItem("TOKEN")||"",
    userInfo:""
}
const actions={
    //验证码
   async getCode({commit},phone){
      let result=await reqGetCode(phone)
      if(result.code==200){
        commit("GETCODE",result.data)
        return "ok"
      }
      else{
        return Promise.reject(new Error("faile"))
      }
    },
    //注册
    async userRegister({commit},data){
        let result=await reqUserRegister(data)
        if(result.code==200){
            return "ok"
        }
        else{
            return Promise.reject(new Error("faile"))
        }
    },
    //登录
    async userLogin({commit},data){
        //token为用户唯一识别id，后台通过token来展示用户数据
        let result=await reqUserLogin(data)
        if(result.code==200){
            //持久化存儲
            setToken(result.data.token)
            commit("USERLOGIN",result.data.token)
            return "ok"
        }
        else{
            return Promise.reject(new Error("faile"))
        }
    },
    //獲得用戶信息
    async getUserInfo({commit}){
       let result= await reqUserInfo()
       if(result.code==200){
       commit("GETUSERINFO",result.data)
        return "ok"
       }
       else{
        return Promise.reject(new Error("沒有登錄"))
       }
    },
    //退出登錄
    async userLogOut({commit}){
        let result= await reqLogOut()
        if(result.code==200){
            commit("CLEAR1")
            return "ok"
        }
        else{
            return new Promise.reject(new Error("退出失敗"))
        }
    }
}
const mutations={
    GETCODE(state,code){
        state.code=code
    },
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSERINFO(state,data){
        state.userInfo=data
    },
    CLEAR1(state){
        state.token=""
        state.userInfo=''
        localStorage.removeItem("TOKEN")
    }
}
const getters={}
export default {
    state,
    actions,
    getters,
    mutations
}