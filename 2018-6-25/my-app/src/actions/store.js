import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        add(state){
            // setTimeout(()=>{
            //     state.count ++;
            // },2000)
            state.count ++;
        }
    },
    actions:{
        // addAsync(context){
        //      setTimeout(()=>{
        //         context.commit('add');
        //     },2000)
        // }
        addAsync ({ commit }) {
            setTimeout(()=>{
                commit('add');
            },2000);
        }
    }
})