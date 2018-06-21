<template>
  <div>
    {{$route.path}}
    <h2 @click="click">关于</h2>
    <router-link :to="{path:'/about/a',params: { id: 123 }}" tag="button">关于我们</router-link>
    <router-link to="/about/b" tag="button">关于他们</router-link>
    <router-link to="/about/c" tag="button">关于你们</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  
  export default {
      name:"About",
      methods:{
        click(){
          console.log(this.$router)
        }
      }
  }
</script>
