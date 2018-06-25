import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        arr:[{txt:'苹果',num:0},{txt:'梨儿',num:0},{txt:'荔枝',num:0}]
    },
    mutations:{
        add(state,txt){
            let obj = state.arr.find(e=>e.txt === txt);
            obj.num ++;
        },
        minus(state,txt){
            let obj = state.arr.find(e=>e.txt === txt);
            obj.num --;
        }
    },
    getters:{
        total(state){
            return state.arr.reduce((a,b)=>a+b.num,0);
        }
    }
})