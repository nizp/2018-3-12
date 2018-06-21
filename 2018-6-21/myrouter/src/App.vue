<template>
  <div id="app">
    <router-link to="/" tag="button">去首页</router-link>
    <router-link :to="{path:'/about',params:{id:321}}" tag="button">去关于</router-link>
    <router-link to="/Bar/1" tag="button">去Bar</router-link>
     <router-link to="/Bar/2" tag="button">去Bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  /*
    //name:'Bar'
      加了<router-view>路由的组件才能显示
    
    1.import Router from 'vue-router'
    2.import Vue from 'vue'
    3.Vue.use(Router)
    4.const routes = [
        {
          path:'/',
          component:App,
          name:'App'
        }
      ]
  
    5.new Router({routes,mode:'history'})
      mode:'history'启用H5  history


  */
</script>
<style>
.router-link-exact-active{
  background:yellow
}
</style>

