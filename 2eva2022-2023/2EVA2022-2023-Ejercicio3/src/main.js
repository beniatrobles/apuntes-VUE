// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Usar el router en la aplicación
app.use(router);

app.mount('#app');