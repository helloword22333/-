import Mock from "mockjs"
//webpack默认对外暴露的资源图片，JSON数据
import banner from "./banner.json"
import floor from "./floor"

Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})
