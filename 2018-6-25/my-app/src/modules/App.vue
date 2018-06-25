<template>
  <div id="app">
      <button @click="fn">点击</button>
     {{s1}}
     {{s2}}
  </div>
</template>

<script>

import { mapMutations,mapState,mapGetters } from 'vuex';



export default {
    name: 'app',
    computed:{
        ...mapState({
            s1:state=>state.store1.count,
            s2(state){
                return state.store2.count
            }
        })
    },
    methods:{
        fn(){
           
        }
        // ...mapMutations(['add'])
    }
}
</script>

