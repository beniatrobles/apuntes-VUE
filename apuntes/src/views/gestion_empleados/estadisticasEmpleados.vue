<template>
    <Navbar />
    <h1>Estadisticas de empleados</h1>
    <h3> Los empleados totales: {{ empleadosStore.totalEmpleados }}</h3>
    <h3> Departamentos totales: {{ empleadosStore.departamentosTotales.cantidadDeDepartamentos }}</h3>
    <h3>Salario Total: {{ empleadosStore.sumarSalarios }}</h3>
    <h3>Salario Promedio: {{ empleadosStore.salarioPromedio }}</h3>
    <h3>Salario mínimo: {{ empleadosStore.salarioMinimo.salarioMinimo }}--{{
        empleadosStore.salarioMinimo.empleadoMinimo }}</h3>
    <h3>Salario Maximo: {{ empleadosStore.salarioMaximo.salarioMaximo }}--{{
        empleadosStore.salarioMaximo.empleadoMaximo }}</h3>
    <hr>
    <h3>Salario total por departamento</h3>
    <ul>
        <li v-for="(totalSalario, departamento) in empleadosStore.salariosPorDept" :key="departamento">
            {{ departamento }}: {{ totalSalario }}
        </li>
    </ul>

    <hr>

    <h3>Empleados por departamento</h3>
    <ul>
        <li v-for="(totalEmpleados, departamento) in empleadosStore.empleadosporDept" :key="departamento">
            {{ departamento }} : {{ totalEmpleados}}
        </li>
    </ul>
    <button @click="volver">Volver</button>
    <Footer />
</template>
<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { useEmpleadosStore } from '@/stores/empleados';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';



let empleadosStore = useEmpleadosStore()


let router = useRouter()

function volver() {
    router.push('/inicioEmpleados')
}

onMounted(() => {
    empleadosStore.obtenerEmpleados()
});

</script>
<style></style>