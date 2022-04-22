import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Simulation',
    name: 'Simulation',
    component: () => import('../views/Simulation.vue')
  },
  {
    path: '/Catalogue',
    name: 'Catalogue',
    component: () => import( '../views/Catalogue.vue')
  },
  {
    path: '/Quizz',
    name: 'Quizz',
    component: () => import( '../views/Quizz.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
