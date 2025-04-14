<template>
    <Navbar />
    <h1></h1>
    <h2>Selecciona cada una de los apartados para poder comenzar el juego</h2>

    <form @submit.prevent="obtenerPreguntas()">
        <label>Elige la categoria: </label><br>
        <select v-model="categoriaSeleccionada">
            <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
                {{ categoria.name }}
            </option>
        </select><br><br>

        <label>Cantidad de preguntas: </label><br>
        <input type="number" v-model="numeroPreguntas" min="1" max="10"><br><br>

        <label>Dificultad: </label>
        <select v-model="dificultad">
            <option value="easy">Fácil</option>
            <option value="medium">Normal</option>
            <option value="hard">Difícil</option>
        </select><br>

        <button type="submit">Comenzar Juego</button>
    </form>

    <br><br>

    <h2 v-if="preguntas.length">Preguntas</h2>
    <div v-for="(pregunta, index) in preguntas" :key="pregunta.question" v-if="preguntas.length">
        <h3 v-html="pregunta.question"></h3>
        <ul>
            <li v-for="respuesta in mezclarRespuestas(pregunta, index)" :key="respuesta">
                <button v-html="respuesta" @click="comprobarRespuesta(respuesta, pregunta, index)"
                    :disabled="preguntasRespondidas.value && preguntasRespondidas.value[index]"
                ></button>
            </li>
        </ul>
    </div>

    <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

let categorias = ref([]);
let preguntas = ref([]);
let respuestas = ref([]);

let categoriaSeleccionada = ref(null);
let numeroPreguntas = ref(5);
let dificultad = ref('');

let respuestasCorrectas = ref(0);
let respuestasIncorrectas = ref(0);
let preguntasRespondidas = ref([]);

// Este objeto guardará las respuestas mezcladas por pregunta (una sola vez)
let respuestasMezcladasPorPregunta = ref({});

let obtenerCategorias = async () => {
    try {
        let response = await axios.get('https://opentdb.com/api_category.php');
        categorias.value = response.data.trivia_categories;
    } catch (error) {
        console.error("Error al obtener las categorias", error);
    }
}

let obtenerPreguntas = async () => {
    try {
        let response = await axios.get(`https://opentdb.com/api.php?amount=${numeroPreguntas.value}&category=${categoriaSeleccionada.value}&difficulty=${dificultad.value}&type=multiple`);
        preguntas.value = response.data.results;
        
        respuestasMezcladasPorPregunta.value = {};
    } catch (error) {
        console.error("Error al obtener las preguntas", error);
    }
}

function mezclarRespuestas(pregunta, index) {
    if (!respuestasMezcladasPorPregunta.value[index]) {
        const mezcladas = [...pregunta.incorrect_answers, pregunta.correct_answer];
        respuestasMezcladasPorPregunta.value[index] = mezcladas.sort(() => Math.random() - 0.5);
    }
    return respuestasMezcladasPorPregunta.value[index];
}

function comprobarRespuesta(respuesta, pregunta, index) {
    if (preguntasRespondidas.value[index]) return;

    if (respuesta === pregunta.correct_answer) {
        respuestasCorrectas.value++;
        preguntasRespondidas.value[index] = 'correcta';
        console.log("Respuesta correcta");
    } else {
        respuestasIncorrectas.value++;
        preguntasRespondidas.value[index] = 'incorrecta';
        console.log("Respuesta incorrecta");
    }
}

onMounted(() => {
    obtenerCategorias();
});
</script>

<style>
.correcta {
    background-color: green;
    color: white;
}

.incorrecta {
    background-color: red;
    color: white;
}

button {
    margin: 5px;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}
</style>
