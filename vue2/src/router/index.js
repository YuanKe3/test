import Router from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/demo1',
        component: () => import('../views/Demo1.vue')
      },
      {
        path: '/demo2',
        component: () => import('../views/Demo2.vue')
      }
    ]
  }
]

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
