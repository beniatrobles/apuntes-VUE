<template>
  <div v-if="festividad">
    <h1>Detalles de la Festividad</h1>
    <p><strong>Nombre:</strong> {{ festividad.nombre }}</p>
    <p><strong>Fecha:</strong> {{ festividad.fecha }}</p>
    <p><strong>Municipio:</strong> {{ festividad.municipio }}</p>

    <label>
      <input type="checkbox" @change="festividadesStore.toogleAsistido(festividad.id)" />
      <span v-if="festividad.asistido">Asistido</span>
      <span v-else>No asistido</span>
    </label>
  </div>
  <div v-else>
    <p>Festividad no encontrada.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useFestividadesStore } from '@/stores/festividadesStore'

const route = useRoute()
const festividadesStore = useFestividadesStore()

const id = parseInt(route.params.id)
const festividad = computed(() =>
  festividadesStore.festividades.find(f => f.id === id)
)

</script>