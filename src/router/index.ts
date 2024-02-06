import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheLayout from '@/components/ui/layout/TheLayout.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    component: TheLayout,
    path: '/',
    children: [
      { path: '/', redirect: '/margarita' },
      { path: '/:cocktail_code', component: HomeView }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]

const router = createRouter({ routes, history: createWebHistory(import.meta.env.BASE_URL) })

export default router
