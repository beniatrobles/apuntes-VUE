<template>

    <h2>Total Festividades: {{ festividadesStore.totalfestividades }}</h2>
    <h2>Total Asistidos: {{ festividadesStore.totalAsistidos }}</h2>

    <h2>Municipios con múltiples festividades:</h2>
    <ul>
        <li v-for="municipio in festividadesStore.municipiosConMultiples" :key="municipio">
            {{ municipio }}
        </li>
    </ul>


</template>
<script setup>
import { onMounted } from 'vue'
import { useFestividadesStore } from '@/stores/festividadesStore'

const festividadesStore = useFestividadesStore()

</script>
<style></style>