<template>
<Basurto />

<h4>Tienes {{ favoritosStore.numeroFavoritos }} favoritos</h4>

<div v-for="(favorito,index) in favoritosStore.favoritos">
    <p>{{ favorito.SERVICIO }}</p>
    <p @click="favoritosStore.quitarFavoritos(favorito)">X</p>
</div>
</template>

<script setup>
import Basurto from '@/components/Basurto.vue'
import {useFavoritosStore} from '@/stores/favoritos'

let favoritosStore = useFavoritosStore()
</script>
