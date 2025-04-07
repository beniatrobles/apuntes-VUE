<template>
    <Navbar />
    <h1>Tareas Completadas</h1>
    <ul>
       
        <li v-for="tarea in tareasStore.tareasCompletadas" :key="tarea.id" >
            {{ tarea.nombre }} -- {{ tarea.descripcion }} -- 
            <span v-if="tarea.completada === true">Completada</span>
        </li>
    </ul>
    <button @click="volver">Volver</button>
    <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { useRouter } from 'vue-router';
import { useTareasStore } from '@/stores/tareas';

let tareasStore = useTareasStore();
let router = useRouter();

function volver() {
    router.push('/inicioTareas');
}
</script>

<style>

</style>
