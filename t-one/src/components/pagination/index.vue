<template>
     <div class="pagination" >
    <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)" >上一页</button>
    <button v-if="start>1" @click="$emit('getPageNo',1)" :class="{active:1==pageNo}">1</button>
    <button v-if="start>2" @click="$emit('getPageNo',2)" :class="{active:2==pageNo}">2</button>
    <button v-if="(start-1)>2">···</button>
    <button v-for="(page,index) in end" v-show="page>=start" :key="index" @click="$emit('getPageNo',index+1)" :class="{active:(index+1)==pageNo}">{{ page }}</button>
    <button v-if="end+1<totalPages">···</button>
    <button v-if="end<totalPages" @click="$emit('getPageNo',totalPages)" :class="{active:totalPages==pageNo}"> {{ totalPages }}</button>
    <button :disabled="pageNo==end" @click="$emit('getPageNo',pageNo+1)"> 下一页</button>
    <button style="margin-left: 30px">总共{{total}}条数据</button>
  </div>

</template>

<script>
//  pageNo 当前的页数 当前第几个
//pageSize 一页展示多少数据
//  totalPages 总共有多少页
//continues 连续分页的连续页码
export default {
    name:"pagination",
    methods:{
      
    },
    computed:{
        totalPages(){
            return Math.ceil(this.total/this.pageSize)
        },
        locationPage(){
            let start=1,end=1
            if(this.continues>this.totalPages){
                start=1
                end=this.totalPages
            }
            else{
                if (this.pageNo+parseInt(this.continues/2)>this.totalPages) {
                    start=this.totalPages-this.continues+1
                    end=this.totalPages
                }
                else if(this.pageNo-parseInt(this.continues/2)>=1){
                    start=this.pageNo-parseInt(this.continues/2)
                    end=this.pageNo+parseInt(this.continues/2)
                }
                else if (this.pageNo-parseInt(this.continues/2)<1) {
                    start=1
                    end=this.continues
                }
                else if( this.pageNo+parseInt(this.continues/2)<=this.totalPages){
                    end=this.pageNo+parseInt(this.continues/2)
                }
                
            }
            return {start,end}
        },
        start(){
            return this.locationPage.start
        },
        end(){
            return this.locationPage.end
        }
    },
    props:["pageNo","pageSize","total","continues"]
}
</script>

<style lang="less">
.pagination {
    text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }

</style>