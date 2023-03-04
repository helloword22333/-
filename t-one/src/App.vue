<template>
  <div id="app">
    <header-a/>
    <router-view/>
    <footer-a v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>

import headerA from "./components/header/index.vue"
import footerA from "./components/footer/index.vue"
export default {
  name: 'App',
  data(){
    return {
      keyword:""
    }
  },
  mounted(){
    //app组件只会执行一次
    this.$store.dispatch("home/categoryList")
  },
  components: {
    headerA,
    footerA
  }
}
</script>

<style>

</style>
