<template>
    <Navbar />
    <h1>Lista de tareas</h1>
    <ul>
        <li v-for="tarea in tareasStore.tareas" :key="tarea.id" :class="{completada: tarea.completada}">{{ tarea.id }}--
            {{ tarea.nombre }} -- {{ tarea.descripcion }} -- 
            <span v-if="tarea.completada === true" :class="{completada: tarea.completada}">Completada</span>
            <span v-else>No completada</span>

            <button :class="{completada: tarea.completada}" @click="cambiarEstado(tarea.id)">✔</button>
            <button @click="borrarTarea(tarea.id)" class="borrar">🗑</button>
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

let {cambiarEstado,borrarTarea} = tareasStore

let router = useRouter()

function volver(){
    router.push('/inicioTareas')
}

</script>
<style>

.completada{
    text-decoration: line-through;
      color: gray;
}

.borrar:hover{
    background-color: red;
}
 
</style>