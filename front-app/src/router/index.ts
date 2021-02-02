import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Add from '../views/Adding.vue'
import Edit from '@/views/Edit.vue'

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
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
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

router.beforeEach(async (to, from, next) => {
  const isLogged = store.getters.isLogged
  if (!isLogged && to.path != '/login') {
    next({ name: 'Login' })
    return
  } else {
    next()
    return
  }
})

export default router
