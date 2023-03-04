import request from './request';
import mockRequest from './mock'



//三级
export const reqCategroyList=()=>{
    return request({url:"/product/getBaseCategoryList",method:"get"})
}
//轮播图的接口
 export const reqGetBannerList=()=>{
   return mockRequest.get('/banner')
 }
 //floor的图片地址
 export const reqFloorList=()=>{
  return mockRequest.get("/floor")
 }
 //search post /api/list 搜索的商品信息

 export const reqGetSearch=(params)=>{
  return request({url:"/list",method:"post",data:params})
 }

 // 商品详情的数据
 export const reqGoodsInfo=(goodsId)=>{
  return request({url:`/item/${goodsId}`,method:"get"})
 }

 //商品添加到购物车
 export const reqAddOrupdataShopCar=(skuId,skuNum)=>{
  return request({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})
 }

 //购物车请求数据

 export const reqCarlist=()=>{
  return request({url:"/cart/cartList",method:"get"})
 }

 //删除购物车的商品

 export const reqDeleteCarById=(skuId)=>{
  return request({url:`/cart/deleteCart/${skuId}`,method:"delete"})
 }

 //改变购物车里商品是否选中

 export const reqUpdateCheckeById=(skuId,Checke)=>{
  return request({url:`/cart/checkCart/${skuId}/${Checke}`,method:"get"})
 }

 //验证码的接口
 
 export const reqGetCode=(phone)=>{
  return request({url:`/user/passport/sendCode/${phone}`,method:"get"})
 }

//注册用户的接口

export const reqUserRegister=(data)=>{
  return request({url:"/user/passport/register",data:data,method:"post"})
}

//登录用户的接口

export const reqUserLogin=(data)=>{
  return request({url:"/user/passport/login",data,method:"post"})
}

// 得到用戶信息 

export const reqUserInfo=()=>{
  return request({url:"/user/passport/auth/getUserInfo",method:"get"})
}

//退出登錄的接口

export const reqLogOut=()=>{
  return request({url:"/user/passport/logout",method:"get"})
}

//獲得用戶地址

export const reqAddressInfo=()=>{
  return request({url:"/user/userAddress/auth/findUserAddressList",method:"get"})
}

//獲得用戶商品清單

export const reqOrderInfo=()=>{
  return request({url:"/order/auth/trade",method:"get"})
}

//转递订单信息

export const reqsubmitOrder=(tradeNo,data)=>{
  return request({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:"POST"})
}

//获取支付信息

export const reqPayInfo=(orderId)=>{
  return request({url:`/payment/weixin/createNative/${orderId}`,method:"get"})
}

// 获取支付状态

export const reqPayStatus=(orderId)=>{
  return request({url:`/payment/weixin/queryPayStatus/${orderId}`,method:"get"})
}

//

export const reqOrderList=(page,limit)=>{
  return request({url:`/order/auth/${page}/${limit}`,method:"get"})
}
