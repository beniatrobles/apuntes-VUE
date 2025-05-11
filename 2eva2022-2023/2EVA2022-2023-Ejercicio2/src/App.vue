<template>
  <h1>Crud Pokemons</h1>
  <select v-model="tipoSeleccionado">
    <option v-for="(tipo, index) in tipos" :key="index" :value="tipo">
      {{ tipo }}
    </option>
  </select>
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Habilidad</th>
      </tr>
    </thead>
    <tr v-for="(pokemon, index) in pokemonsFiltrados">

      <td>{{ pokemon.name }}</td>
      <td>{{ pokemon.type }}</td>
      <td>{{ pokemon.ability }}</td>
      <td><button @click="borrarPokemon(index)">X</button></td>
    </tr>
  </table>
  <br><br><br>
  <form action="" @submit.prevent="agregarPok">
    <label for="">Nombre</label>
    <input type="text" v-model="nuevoPok.nombre">
    <label for="">tipo</label>
    <input type="text" v-model="nuevoPok.tipo">
    <label for="">Habilidad</label>
    <input type="text" v-model="nuevoPok.habilidad">
    <button type="submit">+</button>
  </form>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';


let pokemons = ref( [] )
let tipos = ref( [] )
let nuevoPok = ref( {
  nombre: "",
  tipo: "",
  habilidad: ""
} )

let tipoSeleccionado = ref( "" );

let obtenerPokemons = async () =>
{
  try
  {
    let response = await axios.get( '/Datos/pokemons.json' )
    pokemons.value = response.data.results
  } catch ( error )
  {
    console.error( "Error al obtener los pokemons", error )
  }
}

let obtenerTipos = async () =>
{
  try
  {
    let response = await axios.get( '/Datos/pokemons.json' )
    tipos.value = [ ...new Set( response.data.results.map( p => p.type ) ) ];
    console.log( tipos.value )
  } catch ( error )
  {
    console.error( "Error al obtener los tipos", error )
  }
}

function borrarPokemon( pokemon )
{
  pokemons.value.splice( pokemon, 1 )
}

function agregarPok()
{
  let pokemonN = {
    name: nuevoPok.value.nombre,
    type: nuevoPok.value.tipo,
    ability: nuevoPok.value.habilidad
  }

  pokemons.value.push( pokemonN )

  nuevoPok.value = {
    nombre: "",
    tipo: "",
    habilidad: ""
  }
}

let pokemonsFiltrados = computed( () =>
{
  if ( tipoSeleccionado.value )
  {
    return pokemons.value.filter( p => p.type === tipoSeleccionado.value );
  } else
  {
    return pokemons.value;
  }
} );

onMounted( () =>
{
  obtenerPokemons();
  obtenerTipos();
} )
</script>
<style scoped></style>
