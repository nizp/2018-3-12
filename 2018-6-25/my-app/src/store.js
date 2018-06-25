import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:0,
    arr:[1,2,3]
  },
  mutations: {
    add(state){
      state.count ++;
    }
  }
});
