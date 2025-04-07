<template>
    <Navbar />
    <h1>Agregar tareas</h1>
    <button @click="volver">Volver</button>
    <Footer />
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { useRouter } from 'vue-router';

let router = useRouter()

function volver(){
    router.push('/inicioTareas')
}
</script>
<style>


</style>