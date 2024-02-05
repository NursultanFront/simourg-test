import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', redirect: '/margarita' }, // Перенаправление на первый пункт меню
  { path: '/:cocktail_code', component: HomeView }
  // Добавьте маршруты для других страниц
]

const router = createRouter({ routes, history: createWebHistory(import.meta.env.BASE_URL) })

export default router
