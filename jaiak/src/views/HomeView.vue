<template>
  <h1>Festividades</h1>

  <!-- //BUSQUEDA CAMPO DE TEXTO///// -->
    <!-- <input
  type="text"
  v-model="busqueda"
  placeholder="Buscar festividad por nombre..."
  class="buscador"
/> -->


<br>
   <select v-model="festividadesStore.municipioSeleccionado" id="municipio">
    <option value="">Todos</option>
    <option v-for="municipio in festividadesStore.municipios" :key="municipio" :value="municipio">
      {{ municipio }}
    </option>
  </select>

  <!-- <h2>Total Festividades: {{ festividadesStore.totalfestividades }}</h2>
  <h2>Total Asistidos: {{ festividadesStore.totalAsistidos }}</h2> -->
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Fecha</th>
        <th>Municipio</th>
        <th>Asistido</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="festividad in festividadesStore.festividadesFiltradas" :key="festividad.id">
        <td>{{ festividad.nombre }}</td>
        <td>{{ festividad.fecha }}</td>
        <td>{{ festividad.municipio }}</td>
        <td>
          <input type="checkbox" :checked="festividad.asistido"
            @change="festividadesStore.toogleAsistido(festividad.id)" />
          <span v-if="festividad.asistido" @click="">Asistido</span>
          <span v-else @click="">No asistido</span>
          <button @click="verDetalles(festividad)">Ver Detalles</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, computed} from 'vue'
import { onMounted } from 'vue'
import { useFestividadesStore } from '@/stores/festividadesStore'
import router from '@/router'

const festividadesStore = useFestividadesStore()

const busqueda = ref('')

onMounted( () =>
{
  festividadesStore.obtenerFestividades()
} )


function verDetalles(festividad){
  router.push(`/festividades/${festividad.id}/detalles`)
}


///fUNCIN¡ON QUE LO BUSCA (LOS NOMBRES DE EL ARRAY PUEDEN CAMBIAR)
// const festividadesFiltradasPorNombre = computed(() => {
//   return festividadesStore.festividadesFiltradas.filter(f =>
//     f.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
//   )
// })
</script>
