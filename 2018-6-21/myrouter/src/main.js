import Vue from 'vue'
import App from './shehui/content/content'
import router from './shehui/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
