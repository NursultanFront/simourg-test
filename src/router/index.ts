import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', redirect: '/margarita' },
  { path: '/:cocktail_code', component: HomeView }
]

const router = createRouter({ routes, history: createWebHistory(import.meta.env.BASE_URL) })

export default router
