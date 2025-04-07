import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa el router
import { createPinia } from 'pinia'

createApp(App)
  .use(router) // Registra el router en la aplicación
  .use(createPinia())  
  .mount('#app')
