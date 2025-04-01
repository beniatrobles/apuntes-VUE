import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' 
import Contador from '../views/Contador.vue'
import Notas from '../views/appNotas/appNotas.vue'
import Axios from '../views/axios/axios.vue'
import padre_hijo from '@/views/padre_hijo/padre_hijo.vue'
import Padre_hijo from '@/views/padre_hijo/padre_hijo.vue'

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
  },
  {
    path: '/axios',
    name: 'Axios',
    component: Axios
  },
  {
    path: '/padre_hijo',
    name: 'Padre_hijo',
    component: Padre_hijo
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router