<template>
    <h1>todos los servicios</h1>
    <Basurto />
    <Cuadro />

    <input type="text" v-model="busqueda" placeholder="Buscar servicio..." />
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
            <template v-for="(servicio, index) in serviciosFiltrados" :key="index">
                <tr v-if="servicio.MOSTRAR === 1">
                    <td>{{ servicio.ICONO }}</td>
                    <td>{{ servicio.SERVICIO }}</td>
                    <td>{{ servicio.ENTRADA }}</td>
                    <td>
                        <span v-if="esFavorito(servicio)" @click="favoritosStore.quitarFavoritos(servicio)">❤️</span>
                        <span v-else @click="favoritosStore.añadirFavoritos(servicio)">💟</span>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>
<script setup>
import Basurto from '@/components/Basurto.vue'
import Cuadro from '@/components/CuadroFavoritos.vue'
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import {useFavoritosStore} from '@/stores/favoritos'

let servicios = ref( [] )


let busqueda = ref( '' )

let favoritosStore = useFavoritosStore()



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


// Computed para filtrar por nombre del servicio
const serviciosFiltrados = computed( () =>
{
    return servicios.value.filter( servicio =>
        servicio.SERVICIO.toLowerCase().includes( busqueda.value.toLowerCase() )
    )
} )




function esFavorito( servicio )
{
    return favoritosStore.favoritos.includes( servicio )
}



onMounted( () =>
{
    obtenerServicios();
} )
</script>
<style></style>