import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'contact',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
