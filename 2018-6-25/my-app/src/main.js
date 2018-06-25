import Vue from 'vue'
// import App from './App.vue'
// import App from './components/index.vue'
// import App from './components/App.vue'
// import store from './store';

// import store from './getter/store';
// import App from './getter/App.vue';
import store from './actions/store';
import App from './actions/App.vue';

// import store from './modules/store';
// import App from './modules/App.vue';

// import store from './components/store';
// import router from './routes';
Vue.config.productionTip = false

/*
   *** router必须写router
*/
new Vue({
  store,
  // router,
  render: h => h(App)
}).$mount('#app')
