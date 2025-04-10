<template>
    <Navbar />
    <div class="form">
        <h1>Agregar empleados</h1>
        <form action="" @submit.prevent="agregarEmpleado">
            <label for="">Nombre: </label>
            <input type="text" v-model="nuevoEmpleado.name"><br>
            <label for="">Departamento: </label>
            <select v-model="nuevoEmpleado.department">
                <option value="Desarrollo">Desarrollo</option>
                <option value="Recursos Humanos">Recursos Humanos</option>
                <option value="Diseño">Diseño</option>
                <option value="Marketing">Marketing</option>
            </select><br>
            <label for="">Salario: </label>
            <input type="number" v-model="nuevoEmpleado.salary"><br>
            <button type="submit">Agregar</button>
        </form>
        <br><br>
        <h1>Lista para ver que se agrega</h1>
        <ul>
            <li v-for="empleado in empleadosStore.empleados">
                {{ empleado.name }}--{{ empleado.department }}--{{ empleado.salary }}
            </li>
        </ul>
    </div>
    <br><br>
    <button @click="volver">Volver</button>
    <Footer />
</template>
<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEmpleadosStore } from '@/stores/empleados';

let router = useRouter()
let empleadosStore = useEmpleadosStore()
let name = ref('')
let department = ref('')
let salary = ref('')



let nuevoEmpleado = ref({
    name: name.value,
    department: department.value,
    salary: salary.value
})


function agregarEmpleado() {
    empleadosStore.agregarEmpleado(nuevoEmpleado.value)


    nuevoEmpleado.value = {
        name: '',
        department: 'Desarrollo',
        salary: ''
    }

    console.log(empleadosStore.empleados)
}


function volver() {
    router.push('/inicioEmpleados')
}

onMounted(() => {
    empleadosStore.obtenerEmpleados();
});
</script>
<style>
.form {
    background-color: beige;
    width: 40%;
}
</style>