import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' 
import Contador from '../views/Contador.vue'
import Notas from '../views/appNotas/appNotas.vue'
import Axios from '../views/axios/axios.vue'
import Padre_hijo from '@/views/padre_hijo/padre_hijo.vue'
import Hijo_padre from '@/views/hijo_padre/hijo_padre.vue'
import Inicio from '@/views/vueRouter/inicio.vue'
import ProductList from '@/views/vueRouter/ProductList.vue'
import ProductDetails from '@/views/vueRouter/ProductDetails.vue'

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
  },
  {
    path: '/hijo_padre',
    name: 'Hijo_padre',
    component: Hijo_padre
  },
  {
    path:'/inicio',
    name:'Inicio',
    component: Inicio
  },
  {
    path: '/productList',
    name:'ProductList',
    component: ProductList
  },
  {
    path: '/productDetails/:id',
    name: 'ProductDetails',
    component: ProductDetails
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router