import { Login, Register } from '../pages/Auth'

export const authRoutes = [
  {
    path: '/auth/login',
    name: 'login',
    component: Login
  },
  {
    path: '/auth/register',
    name: 'register',
    component: Register
  },
]

