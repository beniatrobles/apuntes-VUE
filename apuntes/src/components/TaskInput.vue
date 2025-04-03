<template>
    <div class="hijo">
        <h2>Tareas(Componente hijo)</h2>
        <form action="" @submit.prevent="enviarTarea">
            <label for="">Tarea</label>
            <input type="text" v-model="tarea" required><br>
            <label for="">Descripcion</label><br>
            <textarea name="" id="" v-model="descripcion"></textarea><br>
            <button type="submit">Enviar</button>
        </form>

        <!-- <ul>
            <li v-for="tarea in tareas">{{ tarea }}</li>
        </ul> -->
    </div>


</template>
<script setup>
import { ref } from 'vue';

let tarea = ref('')
let descripcion = ref('')
let tareas = ref([])
let emit = defineEmits()

function enviarTarea() {
    tareas.value.push({
        tarea: tarea.value,descripcion:descripcion.value
    })
    emit('enviar-tarea', tareas.value)
    tarea.value = ''
    descripcion.value=''
}
</script>
<style></style>