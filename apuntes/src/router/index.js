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
import AddProduct from '@/views/vueRouter/AddProduct.vue'
import inicioTareas from '@/views/pinia/inicioTareas.vue'
import verTareas from '@/views/pinia/verTareas.vue'
import addTareas from '@/views/pinia/addTareas.vue'
import tareasCompletadas from '@/views/pinia/tareasCompletadas.vue'
import inicioEmpleados from '@/views/gestion_empleados/inicioEmpleados.vue'
import listaEmpleados from '@/views/gestion_empleados/listaEmpleados.vue'
import estadisticasEmpleados from '@/views/gestion_empleados/estadisticasEmpleados.vue'
import agregarEmpleados from '@/views/gestion_empleados/agregarEmpleados.vue'

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
  },
  {
    path: '/addProduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/inicioTareas',
    name: 'InicioTareas',
    component: inicioTareas
  },
  {
    path: '/verTareas',
    name: 'VerTareas',
    component: verTareas
  },
  {
    path: '/addTareas',
    name: 'AddTareas',
    component: addTareas
  },
  {
    path: '/tareasCompletadas',
    name: 'TareasCompletadas',
    component: tareasCompletadas
  },
  {
    path: '/inicioEmpleados',
    name: 'InicioEmpleados',
    component: inicioEmpleados
  },
  {
    path: '/listaEmpleados',
    name: 'ListaEmpleados',
    component: listaEmpleados
  },
  {
    path: '/estadisticasEmpleados',
    name: 'EstadisticasEmpleados',
    component: estadisticasEmpleados
  },
  {
    path: '/agregarEmpleados',
    name: 'AgregarEmpleados',
    component: agregarEmpleados
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router