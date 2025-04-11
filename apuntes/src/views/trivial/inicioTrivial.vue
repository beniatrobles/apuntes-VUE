<template>
    <Navbar />
    <h1>TRIVIAL</h1>
    <h2>Selecciona cada una de los apartados para poder comenzar el juego</h2>
    <form action="" @submit.prevent="verSeleccion()">
        <label for="">Elige la categoria: </label><br>
        <select name="" id="" v-model="categoriaSeleccionada">
            <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">{{ categoria.name
            }}</option>
        </select><br><br>
        <label for="">Cantidad de preguntas: </label><br>
        <input type="number" v-model="numeroPreguntas" min="1" max="10"><br><br>
        <label for="">Dificultad: </label>
        <select name="" id="" v-model="dificultad">
            <option value="easy">Facil</option>
            <option value="medium">Normal</option>
            <option value="hard">Dificil</option>
        </select><br>
        <button type="submit">Comenzar Juego</button>
    </form>
    <Footer />
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

let categorias = ref([])

let categoriaSeleccionada = ref(null)
let numeroPreguntas = ref('')
let dificultad = ref(5)

let obtenerCategorias = async () => {
    try {
        let response = await axios.get('https://opentdb.com/api_category.php')
        categorias.value = response.data.trivia_categories
        console.log(response)

    } catch (error) {
        console.error("Error al obtener las categorias", error)
    }
}

function verSeleccion() {
    console.log(categoriaSeleccionada.value)
    console.log(numeroPreguntas.value)
    console.log(dificultad.value)
}
onMounted(() => {
    obtenerCategorias();
});


</script>
<style></style>