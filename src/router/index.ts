import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import FavoritesPage from "@/pages/FavoritesPage.vue"
import SearchPage from "@/pages/SearchPage.vue"
import StatisticsPage from "@/pages/StatisticsPage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'search',
    component: SearchPage
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesPage
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: StatisticsPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
