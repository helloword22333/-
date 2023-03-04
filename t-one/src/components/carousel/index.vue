<template>
  <div class="swiper-container" ref="LIST">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item) in list" :key="item.id">
            <img :src="item.imgUrl">
        </div>
        
    </div>
  
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
</template>

<script>
 import Swiper from "swiper"
export default {
    name:'carousel',
    props:["list"],
    watch:{
        list:{
            immediate:true,
            handler(newvalue,oldvalue){
                // nextTick  在下次dom更新，循环之后
                this.$nextTick(()=>{
                    var swiper = new Swiper('.swiper-container', {
                    autoplay:true,      
                    pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                      },
                    navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
           },
          });
              
                })
            }
        }
    }
}
</script>

<style>

</style>