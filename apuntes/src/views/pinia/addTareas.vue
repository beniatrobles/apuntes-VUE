<template>
    <Navbar />
    <h1>Agregar tareas</h1>
    <label for="">Nombre</label>
    <input type="text" name="" id="" v-model="nombre"><br>
    <label for="">Descripcion</label>
    <textarea name="" id="" v-model="descripcion"></textarea><br>
    <button @click="agregarTarea">Agregar tarea</button>
    <button @click="volver">Volver</button>
    <Footer />
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { useRouter } from 'vue-router';
import { useTareasStore } from '@/stores/tareas';
import { ref } from 'vue';

let router = useRouter()

let nombre = ref('')
let descripcion = ref('')

let tareasStore = useTareasStore()

function agregarTarea(){
    tareasStore.addTarea(nombre.value,descripcion.value)

    nombre.value = ''
    descripcion.value=''

    router.push('/verTareas')
}

function volver(){
    router.push('/inicioTareas')
}
</script>
<style>


</style>