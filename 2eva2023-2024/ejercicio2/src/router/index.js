import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodosServicios from '../views/ServiciosPublicos.vue'
import Favoritos from '@/views/Favoritos.vue'
import ServicioPabellon from '@/views/ServicioPabellon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/todosServicios',
      name: 'todosServicios',
      component: TodosServicios
    },
    {
      path: '/favoritos',
      name: 'Favoritos',
      component: Favoritos
    },
    {
      path: '/serviciosPabellon',
      name: 'ServiciosPabellon',
      component: ServicioPabellon
    }
  ],
})

export default router
