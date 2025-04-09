<template>
    <Navbar />
    <h1>Lista de empleados</h1>
    <h3>{{ empleadosStore.texto }}</h3>
    <input v-model="empleadosStore.numero"></input>
    <button @click="sumar">Sumar</button>
    <button @click="restar">Restar</button>
    <br>
    <br>
    <table class="tabla">
        <thead>
            <th class="tabla">Nombre</th>
            <th class="tabla">Departamento</th>
            <th class="tabla">Salario</th>
        </thead>
        <tbody>
            <tr v-for="empleado in empleadosStore.empleados">
                <td class="tabla">{{ empleado.name }}</td>
                <td class="tabla">{{ empleado.department }}</td>
                <td class="tabla">{{ empleado.salary }}</td>
            </tr>
            <tr>
                <td>Empleados totales: {{ empleadosStore.totalEmpleados }}</td>
                <td class="tabla">Salario Total:</td>
                <td class="tabla">{{ empleadosStore.sumarSalarios }}</td>
            </tr>
        </tbody>
    </table>

    <button @click="volver">Volver</button>
    <Footer />
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref,onMounted } from 'vue';
import { useEmpleadosStore } from '@/stores/empleados';
import { useRouter } from 'vue-router';

let router = useRouter()

let empleadosStore = useEmpleadosStore()


function sumar(){
    empleadosStore.numero++
}

function restar(){
    empleadosStore.numero--
}

function volver(){
    router.push('/inicioEmpleados')
}

onMounted(() => {
    empleadosStore.obtenerEmpleados();
});


</script>
<style>
.tabla{
    border: 2px solid black;
    border-collapse: collapse;
}


</style>