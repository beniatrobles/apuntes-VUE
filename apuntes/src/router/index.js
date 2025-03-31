import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' 
import Contador from '../views/Contador.vue'
import Notas from '../views/appNotas/appNotas.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contador',
    name: 'Contador',
    component: Contador
  },
  {
    path: '/notas',
    name: 'Notas',
    component: Notas
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router