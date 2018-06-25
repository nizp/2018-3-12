<template>
  <div class="hello">
      <input type="text" v-model="$store.state.name"/>
      <button 
        @click="fn"
      >登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods:{
    fn(){
      this.$store.commit('setName');
      this.$router.push({path:'/index'});
    }
  }
}
</script>


