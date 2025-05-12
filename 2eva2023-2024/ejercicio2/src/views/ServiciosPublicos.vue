<template>
    <h1>todos los servicios</h1>
    <Basurto />



    <table>
        <thead>
            <tr>
                <th>Icono</th>
                <th>Servicio</th>
                <th>Pabellon</th>
                <th>Fav</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(servicio, index) in servicios" :key="index">
                <tr v-if="servicio.MOSTRAR === 1">
                    <td>{{ servicio.ICONO }}</td>
                    <td>{{ servicio.SERVICIO }}</td>
                    <td>{{ servicio.ENTRADA }}</td>
                    <td>
                        <span v-if="esFavorito(servicio)" @click="quitarFavoritos(servicio)">No FAV</span>
                        <span v-else @click="añadirFavoritos(servicio)">FAV</span>
                    </td>

                </tr>
            </template>
        </tbody>
    </table>



</template>
<script setup>
import Basurto from '@/components/Basurto.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

let servicios = ref( [] )
let favoritos = ref( [] )



let obtenerServicios = async () =>
{
    try
    {
        let response = await axios.get( '/basurto.json' )
        servicios.value = response.data
    } catch ( error )
    {
        console.error( "Error al obtener los servicios", error )
    }
}

function añadirFavoritos( servicio )
{
    favoritos.value.push( servicio )
    console.log( favoritos )
}

function esFavorito( servicio )
{
    return favoritos.value.includes( servicio )
}

function quitarFavoritos(servicio){

    let index = favoritos.value.indexOf(servicio)
    favoritos.value.splice(index,1)
    console.log( favoritos )
}

onMounted( () =>
{
    obtenerServicios();
} )
</script>
<style></style>