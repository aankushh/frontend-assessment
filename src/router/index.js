import { createRouter, createWebHistory } from 'vue-router'
import ExploreView from '../views/ExploreView.vue'

const routes = [
  {
    path: '/explore',
    name: 'Explore',
    component: ExploreView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
