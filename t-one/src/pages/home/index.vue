<template>
  <div class="main">
    <type-nav class="top" />
  <list-container/>
  <Recommend/>
  <rank/>
  <like/>
  <!-- v-for可以在自定组件下运行 -->
  <floor v-for="(floor) in floorList" :key="floor.id" :list="floor"/>
  <brand/>
  </div>
</template>

<script>
import ListContainer from "./ListContaine/index.vue"
import Recommend from "./recommend/index"
import Rank from "./rank/index.vue"
import like from "./like/index"
import floor from "./floor/index.vue"
import brand from "./brand/index.vue"
import { mapState } from "vuex"
import { watch } from 'vue'


export default {
  name:"home",
    components:{
        ListContainer,
        Recommend,
        Rank,
        like,
        floor,
        brand
    },
    data(){
      return{
        screenWidth: document.body.clientWidth
      }
    },
     mounted(){
      //得到floor組件的數據
      this.$store.dispatch("home/getFloorList")
      try {
        this.$store.dispatch("getUserInfo")
      } catch (error) {
        console.log(error)
      }
      if(this.screenWidth<1100){
        window.location.href="http://kkmbva273.m.qty592.com/"
      }
     },
     
    computed:{
      ...mapState({
        floorList:state=>state.home.floorList
      })
    },
 
}
</script>

<style scoped>
 @media screen and (max-width: 1100px){
  html{
    width: 1100px;
  }
  .main{
   margin-left: 10%;
  }
 }
</style>