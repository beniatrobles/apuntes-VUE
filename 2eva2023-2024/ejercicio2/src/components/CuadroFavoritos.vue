<template>
    <h1>Favoritos</h1>
    <h3>Tienes {{ favoritosStore.numeroFavoritos }} favoritos</h3>
    <ul v-for="(favorito,index) in favoritosStore.favoritos">
        <li>{{ favorito.SERVICIO }}--{{ favorito.ICONO }}</li>
    </ul>

</template>
<script setup>
    import {useFavoritosStore} from '@/stores/favoritos'
    let favoritosStore = useFavoritosStore()

</script>
