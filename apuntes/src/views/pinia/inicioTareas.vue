<template>
    <Navbar />
    <h1 class="titulo">Pagina principal tareas</h1>
    <div class="navegador">
        <router-link to="/verTareas" class="router">Ver tareas</router-link>
        <router-link to="/addTareas" class="router">Agregar tarea</router-link>
        <router-link to="/tareasCompletadas" class="router">Ver tareas completadas</router-link>
    </div>
    <br><br>
    <h1 class="listaTareas">Todas las tareas</h1>
    <ul>
        <li v-for="tarea in tareasStore.tareas" class="listaTareas">{{ tarea.nombre }}--{{ tarea.descripcion }}

        </li>
    </ul>
    <Footer />
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { useTareasStore } from '@/stores/tareas';

let tareasStore = useTareasStore()


</script>
<style>

.listaTareas{
    text-align: center;
    padding: 5px;
}
.titulo{
    text-align: center;
}

.navegador{
    display: flex;
    justify-content: space-around;
    margin-left: 50px;
    
}

.router{
    text-decoration: none;
    color: black;
    background-color: cadetblue;
    padding: 20px;
}

.router:hover{
    text-decoration: underline;
    color: red;
}
</style>