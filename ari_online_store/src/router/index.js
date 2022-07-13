import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllProps from '../views/AllInfo.vue'
import Admin from '../views/Admin.vue'
import Register from '../views/RegisterView.vue'
import Login from '../views/LoginView.vue'
import YourProfile from '../views/YourProfileView.vue'
import SingleItem from '../views/SingleItemView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path: '/allInfo',
    name: 'AllInfo',
    component: AllProps
  },{
    path: '/admin',
    name: 'Admin',
    component: Admin
  },{
    path: '/register',
    name: 'register',
    component: Register
  },{
    path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/yourProfile',
    name: 'yourProfile',
    component: YourProfile
  },{
    path: '/allInfo/:id',
    name: 'single',
    component: SingleItem,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
