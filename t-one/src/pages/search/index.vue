<template>
  <div>
    <typeNav />
    <div class="main">
      <div class="py-container">
        <!--bread 这个是面包屑-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="searchData.categoryName">{{ searchData.categoryName }}<i v-on:click="removeCategory">×</i></li>
            <li class="with-x" v-if="searchData.keyword">{{ searchData.keyword }}<i v-on:click="removekeyword">×</i></li>
            <li class="with-x" v-if="searchData.tradeMark">{{ searchData.tradeMark.split(":")[1] }}<i v-on:click="removeTradebrand">×</i></li>
            <li class="with-x" v-for="(attrValue,index) in searchData.props" :key="attrValue.split(':')[0]">{{ attrValue.split(":")[1] }}<i v-on:click="removeAttr(index)">×</i></li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector @tradeMarkinfo="tradeMarkinfo" @attrInfo="attrInfo"/>

        <!--details-->
        <div class="details clearfix">
          <!-- 分类栏 -->
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{active:isOne}" @click="changeOrder(1)">
                  <a href="#">综合  <span v-show="isOne"><span v-show="isUp">⬆</span><span v-show="isdDown">⬇</span></span> </a>
                </li>              
                <li :class="{active:isTwo}" @click="changeOrder(2)">
                  <a href="#">价格<span v-show="isTwo"><span v-show="isUp">⬆</span><span v-show="isdDown">⬇</span></span></a>
                </li>
              </ul>
            </div>
          </div>
          <!-- 商品 -->
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="(goods) in goodsList" :key="goods.id" >
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link   :to="{name:'detail',params:{skuid:goods.id}}"><img v-lazy="goods.defaultImg"/></router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ goods.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a   title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">{{ goods.title }}
                      6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s (A1699)</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a   target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
             
            </ul>
          </div>
          <!-- 分页 -->
          <pagination :pageNo="searchData.pageNo" :pageSize="searchData.pageSize" :total="total" :continues="5" @getPageNo="getPageNo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchSelector from './SearchSelector/SearchSelector'
  import { mapGetters, mapState } from 'vuex';
import { RouterLink } from 'vue-router';
import router from '@/router';
  export default {
    name: 'Search',
    components: {
    SearchSelector,
    RouterLink,
    router
},

    data(){
      return {
        searchData:{
          //一级分类的id
          category1id:"",
           //二级分类的id
          category2id:"",
           //三级分类的id
          category3id:"",
          //分类的名字
          categoryName:"",
          //搜索关键字
          keyword:"",
          //排序 1是综合 2是价格 asc是升序 desc是降序的
          order:"1:desc",
          //当前页数的
          pageNo:1,
          //每一页的展示数据的个数
          pageSize:10,
          //平台商品类别参数
          props:[],
          //平台商品品牌 
          tradeMark:""
        }
      }
    },
    beforeMount(){
      
    },
    mounted(){
      Object.assign(this.searchData,this.$route.query,this.$route.params)
      this.getdata()
    },
    computed:{
      //分模块,getters
      ...mapGetters({
        goodsList:"search/goodsList"
        
      }),
      //
       ...mapState({
         total:state=>state.search.SearchInfo.total
       }),
      isOne(){
        return this.searchData.order.indexOf('1')!=-1
      },
      isTwo(){
        return this.searchData.order.indexOf('2')!=-1
      },
      isdDown(){
        return this.searchData.order.indexOf("desc")!=-1
      },
      isUp(){
        return this.searchData.order.indexOf("asc")!=-1
      }
    },

    methods:{
      //向服务器请求数据
      getdata(){ 
        this.$store.dispatch("search/getSearchList",this.searchData) 
      },
      removeCategory(){
        //undefine不会带给服务器，会节省宽带
        this.searchData.categoryName=undefined
        this.searchData.category1id=undefined
        this.searchData.category2id=undefined
        this.searchData.category3id=undefined
        
        this.$router.replace({name:"search",params:this.$route.params})
        
      },
      //获得当前的页数
      getPageNo(pageNo){
        this.searchData.pageNo=pageNo
        this.getdata()
      },
      removekeyword(){
        this.searchData.keyword=undefined
        //route信息改变,watch自动会向服务器请求新数据。
        this.$router.replace({name:"search",query:this.$route.query})
        this.$bus.$emit("clear")
      },
      removeTradebrand(){
        this.searchData.tradeMark=undefined
        this.getdata()
      },
      //按照服务器的数据格式发送
      tradeMarkinfo(tradeMark){        
         this.searchData.tradeMark=`${tradeMark.tmId}:${tradeMark.tmName}`
         this.getdata()
      },
      //删除分类信息
      removeAttr(index){
        //删除选择的信息
        this.searchData.props.splice(index,1)
        this.getdata()
      },
      //接收组件的信息
      attrInfo(attr,attrValue){
        let  props=`${attr.attrId}:${attrValue}:${attr.attrName}`
        this.searchData.props.push(props)
        this.getdata()
      },

      changeOrder(index){
        if(index==1){
          if(this.isUp){
          this.searchData.order="1:desc"
        }
        else{
          this.searchData.order="1:asc"
        }
        }
        else{
          if(this.isUp){
          this.searchData.order="2:desc"
        }
        else{
          this.searchData.order="2:asc"
        }
        }
        this.getdata()
      },
   
     
    },
    watch:{
      $route(newvalue,oldvalue){
        this.searchData.category1id=""
        this.searchData.category2id=""
        this.searchData.category3id=""
        Object.assign(this.searchData,this.$route.query,this.$route.params)
        this.getdata()
       
      }
    }
  }
</script>

<style lang="less" >
  .main {
    margin: 10px 0;

    .py-container {
      width: 1200px;
      margin: 0 auto;

      .bread {
        margin-bottom: 5px;
        overflow: hidden;

        .sui-breadcrumb {
          padding: 3px 15px;
          margin: 0;
          font-weight: 400;
          border-radius: 3px;
          float: left;

          li {
            display: inline-block;
            line-height: 18px;

            a {
              color: #666;
              text-decoration: none;

              &:hover {
                color: #4cb9fc;
              }
            }
          }
        }

        .sui-tag {
          margin-top: -5px;
          list-style: none;
          font-size: 0;
          line-height: 0;
          padding: 5px 0 0;
          margin-bottom: 18px;
          float: left;

          .with-x {
            font-size: 12px;
            margin: 0 5px 5px 0;
            display: inline-block;
            overflow: hidden;
            color: #000;
            background: #f7f7f7;
            padding: 0 7px;
            height: 20px;
            line-height: 20px;
            border: 1px solid #dedede;
            white-space: nowrap;
            transition: color 400ms;
            cursor: pointer;

            i {
              margin-left: 10px;
              cursor: pointer;
              font: 400 14px tahoma;
              display: inline-block;
              height: 100%;
              vertical-align: middle;
            }

            &:hover {
              color: #28a3ef;
            }
          }
        }
      }

      .details {
        margin-bottom: 5px;

        .sui-navbar {
          overflow: visible;
          margin-bottom: 0;

          .filter {
            min-height: 40px;
            padding-right: 20px;
            background: #fbfbfb;
            border: 1px solid #e2e2e2;
            padding-left: 0;
            border-radius: 0;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

            .sui-nav {
              position: relative;
              left: 0;
              display: block;
              float: left;
              margin: 0 10px 0 0;

              li {
                float: left;
                line-height: 18px;

                a {
                  display: block;
                  cursor: pointer;
                  padding: 11px 15px;
                  color: #777;
                  text-decoration: none;
                }

                &.active {
                  a {
                    background: #e1251b;
                    color: #fff;
                  }
                }
              }
            }
          }
        }

        .goods-list {
          margin: 20px 0;

          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              height: 100%;
              width: 20%;
              margin-top: 10px;
              line-height: 28px;

              .list-wrap {
                .p-img {
                  padding-left: 15px;
                  width: 215px;
                  height: 255px;

                  a {
                    color: #666;

                    img {
                      max-width: 100%;
                      height: auto;
                      vertical-align: middle;
                    }
                  }
                }

                .price {
                  padding-left: 15px;
                  font-size: 18px;
                  color: #c81623;

                  strong {
                    font-weight: 700;

                    i {
                      margin-left: -5px;
                    }
                  }
                }

                .attr {
                  padding-left: 15px;
                  width: 85%;
                  overflow: hidden;
                  margin-bottom: 8px;
                  min-height: 38px;
                  cursor: pointer;
                  line-height: 1.8;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;

                  a {
                    color: #333;
                    text-decoration: none;
                  }
                }

                .commit {
                  padding-left: 15px;
                  height: 22px;
                  font-size: 13px;
                  color: #a7a7a7;

                  span {
                    font-weight: 700;
                    color: #646fb0;
                  }
                }

                .operate {
                  padding: 12px 15px;

                  .sui-btn {
                    display: inline-block;
                    padding: 2px 14px;
                    box-sizing: border-box;
                    margin-bottom: 0;
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                    border-radius: 0;
                    background-color: transparent;
                    margin-right: 15px;
                  }

                  .btn-bordered {
                    min-width: 85px;
                    background-color: transparent;
                    border: 1px solid #8c8c8c;
                    color: #8c8c8c;

                    &:hover {
                      border: 1px solid #666;
                      color: #fff !important;
                      background-color: #666;
                      text-decoration: none;
                    }
                  }

                  .btn-danger {
                    border: 1px solid #e1251b;
                    color: #e1251b;

                    &:hover {
                      border: 1px solid #e1251b;
                      background-color: #e1251b;
                      color: white !important;
                      text-decoration: none;
                    }
                  }
                }
              }
            }
          }
        }

        .page {
          width: 733px;
          height: 66px;
          overflow: hidden;
          float: right;

          .sui-pagination {
            margin: 0 auto;
           
            ul {
              margin-left: 0;
              margin-bottom: 0;
              vertical-align: middle;
              width: 490px;
              float: left;

              li {
                line-height: 18px;
                display: inline-block;

                a {
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  border: 1px solid #e0e9ee;
                  margin-left: -1px;
                  font-size: 14px;
                  padding: 9px 18px;
                  color: #333;
                }

                &.active {
                  a {
                    background-color: #fff;
                    color: #e1251b;
                    border-color: #fff;
                    cursor: default;
                  }
                }

                &.prev {
                  a {
                    background-color: #fafafa;
                  }
                }

                &.disabled {
                  a {
                    color: #999;
                    cursor: default;
                  }
                }

                &.dotted {
                  span {
                    margin-left: -1px;
                    position: relative;
                    float: left;
                    line-height: 18px;
                    text-decoration: none;
                    background-color: #fff;
                    font-size: 14px;
                    border: 0;
                    padding: 9px 18px;
                    color: #333;
                  }
                }

                &.next {
                  a {
                    background-color: #fafafa;
                  }
                }
              }
            }

            div {
              color: #333;
              font-size: 14px;
              float: right;
              width: 241px;
            }
          }
        }
      }
    }
  }
</style>