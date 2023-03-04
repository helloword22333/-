<template>
   <div class="type-nav">
            <div class="container" @mouseenter="enterShow" @mouseleave="leaveShow">
                <h2 class="all">全部商品分类</h2>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                <transition name="sort" >
                    <div class="sort" v-show="show">
                    <div class="all-sort-list2" @click="tosearch">
                        <div class="item " v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{cu1:currentIndex==index}">
                            <h3 @mouseenter="changeIndex(index)" @mouseleave="leaveIndex">
                                <a :data-categoryname="c1.categoryName" :data-category1id="c1.categoryId">{{ c1.categoryName }}</a>
                            </h3>
                            <div class="item-list clearfix" >
                                <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId" >
                                    <dl class="fore">
                                        <dt>
                                            <a :data-categoryname="c2.categoryName" :data-category2id="c2.categoryId">{{ c2.categoryName }}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                <a :data-categoryname="c3.categoryName" :data-category3id="c3.categoryId" >{{ c3.categoryName }}</a>
                                            </em>
                                           
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                </transition>
            </div>
        </div>
</template>

<script>
import { mapState } from 'vuex'
//导入节流的插件
import {throttle} from "lodash"
export default {
    name:"typeNav",
    data(){
        return {
            currentIndex:-1,
            show:true
        }
    },
    methods:{
        // changeIndex:throttle(function(){
            
        // })
        tosearch(event){
           let ele=event.target

           let location={name:'search'}
        
           let {categoryname,category1id,category2id,category3id}=ele.dataset
          
          if(categoryname){
            let query={categoryName:categoryname}
            if(category1id){
                query.category1id=category1id
              
            }
            else if(category2id){
                query.category2id=category2id
              
            }
            else{
                query.category3id=category3id
                
            }
            location.query=query
            if(this.$route.params){
                location.params=this.$route.params
            }
            this.$router.push(location)
           }
           
            //dataset可以获取触发事件节点的自定义属性,现在必须在前面加data-，才可以被这个方法调用
        },
        changeIndex:throttle(function(index){
            this.currentIndex=index
        },101),
        leaveIndex(){
            this.currentIndex=-1
        },
        //鼠标移入的时候，让商品分类列表显示
        enterShow(){
            if(this.$route.path!="/home"){
                this.show=true
            }
          
        },
        leaveShow(){
           if(this.$route.path!="/home"){
            this.show=false
           }
        }
    },
    mounted(){
       
        if(this.$route.path!="/home"){
            this.show=false
        }
    },
    computed:{
        ...mapState({
             categoryList: (state)=>{
                 return state.home.categoryList
            }
        })
    }
}
</script>

<style scoped lang="less">
.type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            cursor: pointer;
            position: relative;
            
            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &:hover {
                            .item-list {
                                display: block;
                            }
                        }
                    }
                    .cu1{
                        background-color: lightskyblue;
                    }
                    .item :hover{
                        
                        color: rgb(228, 227, 227);
                        text-decoration: none;
                    }
                }
            }
            //过渡动画的，
            //刚刚进入的
            .sort-enter{
                height: 0;

            }
            //进入的结束状态
            .sort-enter-to{
                height: 461px;
            }
            .sort-enter-active{
                transition: all 0.2s linear ;
            }
        }
    }
    @media screen and (max-width: 1100px){
        .type-nav{
            margin-left: 2.1%;
        }
    }
</style>