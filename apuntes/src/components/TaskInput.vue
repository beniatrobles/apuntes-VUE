<template>
    <div class="hijo">
        <h2>Tareas(Componente hijo)</h2>
        <form action="" @submit.prevent="enviarTarea">
            <label for="">Nombre</label>
            <input type="text" v-model="tarea" required>
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
let tareas = ref([])
let emit = defineEmits()

function enviarTarea() {
    tareas.value.push(tarea.value)

    emit('enviar-tarea', tareas.value
    )

    tarea.value = ''
}
</script>
<style></style>