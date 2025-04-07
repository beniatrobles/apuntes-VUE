<template>
    <Navbar />
    <h1>Lista de tareas</h1>
    <ul>
        <li v-for="tarea in tareasStore.tareas" :key="tarea.id">
            {{ tarea.nombre }} -- {{ tarea.descripcion }} -- 
            <span v-if="tarea.completada === true">Completada</span>
            <span v-else>No completada</span>
        </li>
    </ul>

    <h1>Totales: {{ tareasStore.tareasTotales }}</h1>
    <button @click="volver">Volver</button>
    <Footer />
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { useRouter } from 'vue-router';
import { useTareasStore } from '@/stores/tareas';

let tareasStore = useTareasStore()

let router = useRouter()

function volver(){
    router.push('/inicioTareas')
}

</script>
<style></style>