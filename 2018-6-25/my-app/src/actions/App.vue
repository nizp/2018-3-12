<template>
  <div id="app">
      <button @click="fn">点击</button>
      {{count}}
  </div>
</template>

<script>

import { mapMutations,mapState,mapGetters } from 'vuex';
export default {
    name: 'app',
    computed:{
       ...mapState(['count'])
    },
    methods:{
        fn(){
            this.$store.dispatch('addAsync');
        }
    }
}
</script>

