<template>

<ul>
  <li v-for="festividad in festividadesStore.futuras" :key="festividad.id">
    {{ festividad.nombre }} - {{ festividad.fecha }}
  </li>
</ul>

</template>
<script setup>
import { onMounted } from 'vue'
import { useFestividadesStore } from '@/stores/festividadesStore'

const festividadesStore = useFestividadesStore()

onMounted( () =>
{
  festividadesStore.obtenerFestividades()
} )

</script>