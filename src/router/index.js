import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login')
  },
  {
    path: '/Index',
    name: 'index',
    component: () => import('../components/Index'),
    children:[
      {
        path: '/Home',
        name: 'home',
        meta:{
          title: '首页'
        },
        component: () => import('../components/Home')
      }
    ]
  }
]


const router = new Router({
  modes: 'history',
  routes
})


export function resetRouter() {
  router.matcher = new Router({
    mode: 'history',
    routes: []
  }).matcher
}


export default router
