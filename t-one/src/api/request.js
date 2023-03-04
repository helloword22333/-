import axios from "axios"
import nProgress from "nprogress"
//引入store
import store from "@/store"
import "nprogress/nprogress.css"
const request=axios.create({
    //设置路径后默认追加的路径
    baseURL:"/api",
    timeout:5000
})
//请求拦截器,发请求前可以做一些事情
request.interceptors.request.use((config)=>{
    //config中有header
    //进度条开始
    if(store.state.detail.uuid_token){
        config.headers.userTempId=store.state.detail.uuid_token
    }
    if(store.state.user.token){
        config.headers.token=store.state.user.token
    }
    nProgress.start()
    return config
})

//响应的拦截器
request.interceptors.response.use((res)=>{
  //成功的回调
  //进度条结束
  nProgress.done()
  return res.data
},(err)=>{
    return Promise.reject(new Error("faile"))
})
export default request