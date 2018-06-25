<template>
  <div id="app">
    <button @click="add">点击</button>
    <p>{{num}}</p>
  </div>
</template>

<script>
/*
  store可以用computed去监听


*/
import { mapMutations } from 'vuex'
export default {
  name: 'app',
  methods:{
    ...mapMutations([
      'add'
    ]),
    // fn(){
    //   // this.$store.commit('add');
    //   // this.add();
    // }
  },
  computed:{
    num(){
      let {count} = this.$store.state;
      return count < 10?'0'+ count:''+count
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
