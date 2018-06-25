import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store1 = {
    state:{
        count:0
    },
    mutations:{
        add(state){
            state.count ++;
        }
    },
    actions:{
        addAsync ({ commit }) {
            setTimeout(()=>{
                commit('add');
            },2000);
        }
    }
}

const store2 = {
    state:{
        count:0
    },
    mutations:{
        add(state){
            state.count ++;
        }
    },
    actions:{
        addAsync ({ commit }) {
            setTimeout(()=>{
                commit('add');
            },2000);
        }
    }
}

export default new Vuex.Store({
    modules:{
        store1,
        store2
    }
});