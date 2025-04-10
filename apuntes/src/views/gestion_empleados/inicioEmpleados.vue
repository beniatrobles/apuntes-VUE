<template>
    <Navbar />
    <h1>Página principal que muestra un resumen de la empresa
        (total de empleados, salario promedio, etc.).</h1>
    <div class="navegador">
        <router-link to="/listaEmpleados" class="router">Lista de empleados</router-link>
        <router-link to="/estadisticasEmpleados" class="router">Estadisticas empleados</router-link>
        <router-link to="/agregarEmpleados" class="router">Agregar empleados</router-link>
    </div>
    <br><br>
    <textarea name="" id="" class="todo">{{ empleadosStore }}</textarea>
    <Footer />
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { onMounted, ref } from 'vue';
import { useEmpleadosStore } from '@/stores/empleados';


let empleadosStore = useEmpleadosStore()


onMounted(() => {
    empleadosStore.obtenerEmpleados();
});


</script>
<style>
.todo {
    width: 80%;
    height: 60vh;
    /* 80% de la altura de la pantalla */
}
</style>