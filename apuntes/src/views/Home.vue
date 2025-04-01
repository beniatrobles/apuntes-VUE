<template>
    <Navbar />
    <h1>Todos los ejercicios</h1>
    <h3>
        <router-link to="/notas">Notas</router-link>
    </h3>
    <Footer />
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>
<style>

</style>