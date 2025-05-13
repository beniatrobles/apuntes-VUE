<template>
    <Basurto/>
    <div>
        <select v-model="entradaSeleccionada">
            <option v-for="entrada in entradasUnicas" :key="entrada" :value="entrada">
                {{ entrada }}
            </option>
        </select>
    </div>

    <div v-if="entradaSeleccionada && serviciosFiltrados.length > 0">
        <ul>
            <li v-for="servicio in serviciosFiltrados">
                {{ servicio.SERVICIO }} <!-- Suponiendo que cada servicio tiene un nombre -->
            </li>
        </ul>
    </div>

    <div v-else-if="entradaSeleccionada">
        <p>No hay servicios disponibles para esta entrada.</p>
    </div>
</template>

<script setup>
import Basurto from '@/components/Basurto.vue'
import axios from 'axios'
import { ref, onMounted, computed, watch } from 'vue'

let servicios = ref( [] )

let entradaSeleccionada = ref( '' )


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


onMounted( () =>
{
    obtenerServicios()
} )


let entradasUnicas = computed( () =>
{
    let entradas = servicios.value.map( s => s.ENTRADA )
    return [ ...new Set( entradas ) ]
} )


// let serviciosFiltrados = computed(() => {
//   if (!entradaSeleccionada.value) return servicios.value // Si no hay selección, mostrar todos los servicios
//   return servicios.value.filter(s => s.ENTRADA === entradaSeleccionada.value)
// })

let serviciosFiltrados = computed( () =>
{
    if ( !entradaSeleccionada.value ) return [] // Si no hay selección, no mostrar servicios
    return servicios.value.filter( s => s.ENTRADA === entradaSeleccionada.value )
} )

</script>
