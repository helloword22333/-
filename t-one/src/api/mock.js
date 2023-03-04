import axios from "axios"
import nProgress from "nprogress"
import "nprogress/nprogress.css"
const mockRequest=axios.create({
    //设置路径后默认追加的路径
    baseURL:"/mock",
    timeout:5000
})
//请求拦截器,发请求前可以做一些事情
mockRequest.interceptors.request.use((config)=>{
    //config中有header
    //进度条开始
    nProgress.start()
    return config
})

//响应的拦截器
mockRequest.interceptors.response.use((res)=>{
  //成功的回调
  //进度条结束
  nProgress.done()
  return res.data
},(err)=>{
    return Promise.reject(new Error("faile"))
})
export default mockRequest