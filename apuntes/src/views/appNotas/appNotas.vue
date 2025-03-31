<template>
    <Navbar />
    <h1>Notas</h1>
    <label for="">Nota</label>
    <input type="text" v-model="nota"><br>
    <button @click="agregarNota" class="agregar">Agregar Nota</button>
    <button @click="guardarNota()" class="guardar">Guardar Nota</button>
    <br><br>
    <ul>
        <li v-for="(nota, index) in notas" :key="index">
            <input type="text" v-model="notas[index]" /> <!-- Usando v-model para que se actualicen las notas -->
            <button class="eliminar" @click="eliminarNota(index)">Eliminar</button>
            <button class="editar" @click="editarNota(index)">Editar</button>
        </li>
    </ul>
    <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

let nota = ref('');
let notas = ref([1, 2, 3, 4, 5]);
let notaIndex = ref(null);

function agregarNota() {
    if (nota.value.trim() !== '') {  // Aseguramos que no se agregue una nota vacía
        notas.value.push(nota.value);
        nota.value = '';
        console.log(notas);

        // Ordenando el array numéricamente
        notas.value.sort((a, b) => a - b);
    }
}

function eliminarNota(index) {
    notas.value.splice(index, 1);
}

function editarNota(index) {
    nota.value=notas.value[index]
    notaIndex.value = index;  // Almacena el índice de la nota que estamos editando
}

function guardarNota(){
    notas.value[notaIndex.value] = nota.value;  // Actualiza la nota en el índice correspondiente
    nota.value = '';
}
</script>

<style>
.agregar {
    cursor: pointer;
}

.eliminar {
    background-color: red;
    cursor: pointer;
}

.editar {
    background-color: yellow;
    cursor: pointer;
}
.guardar{
    cursor: pointer;
}
</style>