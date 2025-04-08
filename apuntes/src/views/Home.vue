<template>
    <Navbar />
    <h1>Todos los ejercicios</h1>
    <div class="menu">
        <router-link to="/contador">Contador</router-link>
        <router-link to="/notas">Notas</router-link>
        <router-link to="/axios">Axios</router-link>
        <router-link to="/padre_hijo">PadreHijo</router-link>
        <router-link to="/hijo_padre">HijoPadre</router-link>
        <router-link to="/inicio">VueRouter</router-link>
        <router-link to="/inicioTareas">Pinia</router-link>
        <router-link to="/inicioEmpleados">Gestion_Empleados</router-link>
    </div>
    <Footer />
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>
<style>
.menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Esto crea 3 columnas de igual tamaño */
    gap: 15px;
    margin: 30px;
}

.menu a{
    text-decoration: none;
    color: darkslategrey;
    background-color: blanchedalmond;
    padding: 5px;
    width: 130px;
    transition: all 0.2s ease;
}

.menu a:hover{
    color: chocolate;
    background-color: aquamarine;
    transform: scaleX(1.1);
}

</style>