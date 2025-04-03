<template>
    <div class="padre">
        <TaskInput @enviar-tarea="arrayTareas" />

        <h3>Tareas Recibidas(Componente Padre)</h3>
        <div class="hola">
            <ul>
                <li v-for="(tarea, index) in tareasRecibidas" :key="index">{{ tarea.tarea }}-{{ tarea.descripcion }}
                    <button @click="eliminarTarea(index)">Eliminar</button>
                </li>

            </ul>
        </div>
    </div>
</template>
<script setup>
import TaskInput from '@/components/TaskInput.vue';
import { ref } from 'vue';


let tareasRecibidas = ref([])

let arrayTareas = (tareas) => {
    tareasRecibidas.value = tareas
    console.log(tareasRecibidas)
}

function eliminarTarea(index) {
    tareasRecibidas.value.splice(index, 1)
}
</script>
<style>
.hola{
    background-color: white;
    width: 500px;
    height: auto;
}

</style>