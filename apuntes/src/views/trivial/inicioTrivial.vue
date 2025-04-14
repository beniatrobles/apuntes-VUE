<template>
    <Navbar />
    <h1></h1>
    <h2>Selecciona cada una de los apartados para poder comenzar el juego</h2>
    <form action="" @submit.prevent="obtenerPreguntas()">
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

    <br><br>

    <h2>Preguntas</h2>
    <div v-for="pregunta in preguntas">
        <h3 v-html="pregunta.question"></h3>
        <ul>
            <li v-for="respuesta in mezclarRespuestas(pregunta)">
                <button v-html="respuesta" @click="comprobarRespuesta(respuesta,pregunta)"></button>
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

let categorias = ref([])
let preguntas = ref([])
let respuestas = ref([])

let categoriaSeleccionada = ref(null)
let numeroPreguntas = ref(5)
let dificultad = ref('')

let respuestasCorrectas = ref(0)
let respuestasIncorrectas = ref(0)
let respuestaRespondida = ref(false)

let obtenerCategorias = async () => {
    try {
        let response = await axios.get('https://opentdb.com/api_category.php')
        categorias.value = response.data.trivia_categories

    } catch (error) {
        console.error("Error al obtener las categorias", error)
    }
}

let obtenerPreguntas = async () => {
    try {
        let response = await axios.get(`https://opentdb.com/api.php?amount=${numeroPreguntas.value}&category=${categoriaSeleccionada.value}&difficulty=${dificultad.value}&type=multiple`)
        preguntas.value = response.data.results

    } catch (error) {
        console.error("Error al obtener las preguntas", error)
    }
}


function mezclarRespuestas(pregunta) {
    respuestas = [...pregunta.incorrect_answers, pregunta.correct_answer]
    return respuestas.sort(() => Math.random() - 0.5);
}

function comprobarRespuesta(respuesta,pregunta){
    respuestaRespondida.value = true
    if(respuesta===pregunta.correct_answer){
        console.log("respuesta correcta")
        respuestasCorrectas.value += 1
        console.log(respuestasCorrectas.value)
    }else{
        console.log("respuesta incorrecta")
        respuestasIncorrectas.value +=1
        console.log(respuestasIncorrectas.value)
    }
}



onMounted(() => {
    obtenerCategorias();
});


</script>
<style></style>