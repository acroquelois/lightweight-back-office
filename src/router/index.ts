import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store/index'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Add from '../views/Adding.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
  console.log('ping')
  console.log('target', store.getters)
  const isLogged = store.getters.user
  console.log('from', from.path)
  console.log('user', isLogged)
  console.log('isLogg', isLogged.loggedIn)
  if (!isLogged && to.path != '/login') {
    next({ name: 'Login' })
    return
  } else {
    next()
    return
  }
})

export default router
