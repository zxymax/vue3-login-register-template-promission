import { createRouter, createWebHistory } from 'vue-router'

import { authRoutes } from './auth'
import { Home } from '../pages'
import Auth from '../pages/auth/Auth.vue'

const routes = [
  {
    path: '/',
    component: Home,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
        meta: {
          title: 'home'
        }
      }
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      ...authRoutes
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
