import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProximasFestividades from '@/views/ProximasFestividades.vue'
import Estadisticas from '@/views/Estadisticas.vue'
import FestividadesItem from '@/views/FestividadesItem.vue'

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
      path:'/proximas',
      name: 'proximas',
      component: ProximasFestividades
    },
    {
      path: '/estadisticas',
      name: 'estadisticas',
      component: Estadisticas
    },
    {
      path: '/festividades/:id/detalles',
      name: 'festividadItem',
      component: FestividadesItem
    }
  ],
})

export default router
