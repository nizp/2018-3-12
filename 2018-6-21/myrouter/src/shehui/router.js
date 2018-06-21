import Vue from 'vue'
import Router from 'vue-router'
import Content from './content/content.vue';

import Detail from './detail/detail.vue';
Vue.use(Router);
const routes =  [
  {
    path: '/',
    name: 'Content',
    redirect:'/sh'
    // component: Content
  },
  {
    path: '/:id',
    name: 'Content',
    component: Content
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
]



export default new Router({
  routes,
  mode:'history'
})
