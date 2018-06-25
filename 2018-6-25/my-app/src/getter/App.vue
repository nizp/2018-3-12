<template>
  <div id="app">
      <ul>
          <li v-for="(val,key) in arr">
            <button @click="minus(val.txt)">-</button>
                <span>{{val.txt}}</span>
            <button @click="add(val.txt)">+</button>
                <span>数量:{{val.num}}个</span>
          </li>
      </ul>
      <br />
      <p>总计:{{total}}</p>
  </div>
</template>

<script>

import { mapMutations,mapState,mapGetters } from 'vuex';
export default {
    name: 'app',
    computed:{
        ...mapState(['arr']),
        ...mapGetters(['total'])
    },
    methods:{
        ...mapMutations(['add','minus'])
    }
}
</script>

