import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const init = {
  selected:'',
  sex:'',
  name:localStorage.getItem('name')
} 

export default new Vuex.Store({
  state: init,
  mutations: {
    submit(state,newState){
      let data = JSON.parse(localStorage.getItem('data')) || {};
      data[newState.name] = newState;
      localStorage.setItem('data',JSON.stringify(data));
    },
    setName(state){
      localStorage.setItem('name',state.name);
    },
    deleName(){
      localStorage.removeItem('name');
    }
  }
});
