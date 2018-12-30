import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    routes: [
      {
        path: '/home',
        component: require('@/App.vue').default
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import(/* webpackChunkName: "page1" */ '@/views/page1.vue')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import(/* webpackChunkName: "page2" */ '@/views/page2.vue')
      }
    ]
  })

