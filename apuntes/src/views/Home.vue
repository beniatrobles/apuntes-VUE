<template>
    <Navbar />
    <h1>Todos los ejercicios</h1>
    <ul>
        <li>
            <router-link to="/notas">Notas</router-link>
        </li>
    </ul>
    <Footer />
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>
<style>

</style>