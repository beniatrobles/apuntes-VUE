<template>
    <Navbar />
    <h1>Todos los ejercicios</h1>
    <div class="menu">
        <router-link to="/contador">Contador</router-link>
        <router-link to="/notas">Notas</router-link>
        <router-link to="/axios">Axios</router-link>
        <router-link to="/padre_hijo">PadreHijo</router-link>
        <router-link to="/hijo_padre">HijoPadre</router-link>
    </div>
    <Footer />
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>
<style>
.menu {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 15px;
}

.menu a{
    text-decoration: none;
    color: darkslategrey;
    background-color: blanchedalmond;
    padding: 5px;
    width: 80px;
}

.menu a:hover{
    color: chocolate;
    background-color: aquamarine;
    padding: 10px;
    width: 80px;
}

</style>