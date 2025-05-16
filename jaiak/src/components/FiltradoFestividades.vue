
<template>
  <label for="municipio">Filtrar por municipio:</label>
  <select v-model="festividadesStore.municipioSeleccionado" id="municipio">
    <option value="">Todos</option>
    <option
      v-for="municipio in festividadesStore.municipios"
      :key="municipio"
      :value="municipio"
    >
      {{ municipio }}
    </option>
  </select>
</template>

<script setup>
import { useFestividadesStore } from '@/stores/festividadesStore'

const festividadesStore = useFestividadesStore()
</script>