import Vue from 'vue'
// import App from './componentlife.vue';
import Ppa from './ppa.vue'
Vue.config.productionTip = false

new Vue({
  // render: h => h(App)
  render: h => h(Ppa)
}).$mount('#app')
