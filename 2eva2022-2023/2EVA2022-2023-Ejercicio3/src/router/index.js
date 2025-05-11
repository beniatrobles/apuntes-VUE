// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Componente que se va a mostrar
import Homeview from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ExamenView from '../views/ExamenView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homeview
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/examen',
    name: 'Examen',
    component: ExamenView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;