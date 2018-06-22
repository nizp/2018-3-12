import Vue from 'vue'
import Router from 'vue-router';
import Content from './component/content/content.vue';
import Detail from './component/detail/detail.vue';

Vue.use(Router)

const routes = [
  {
    path:'/',
    redirect:'/sh/0'
  },
  {
    path:'/:id/:num',
    component:Content
  },
  {
    path:'/detail/:id/:num',
    component:Detail
  }
]

export default new Router({
  routes,
  mode:'history'
})
