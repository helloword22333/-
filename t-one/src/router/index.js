//导入
import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./router"
import store from "../store/index"
//使用插件
Vue.use(VueRouter)
//配置
//重写push和replace
let originPush=VueRouter.prototype.push;
let orignreplace=VueRouter.prototype.replace;
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve && reject){
        orignreplace.call(this,location,resolve,reject)
    }
    else{
        orignreplace.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)
    }
    else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
let router= new VueRouter({
    routes,
    scrollBehavior(to,from,savePosition){
        return {y:0}
    }
})
router.beforeEach(async(to,from,next)=>{
    let token=store.state.user.token
    let name=store.state.user.userInfo.name
   if(token){
    if(to.path=="/login"||to.path=="/register"){
        next("/home")
    }
    else{
        if(name){
            next()
        }
        else{
            try {
                //獲取用戶信息的
              await  store.dispatch("getUserInfo")
              next()
            } catch (error) {
                //token過期
               await store.dispatch("userLogOut")
               next('/login')
            }
        }
    }
   }
   //没有登录不能去交易和交易记录，支付成功
   else{
    let topath =to.path  
    if(topath.indexOf("/trade")!=-1||topath.indexOf("/pay")!=-1||topath.indexOf("/center")!=-1){
        next("/login?redirect="+topath)
    }
    else{
        next()
    }
   }
  
})

export default router