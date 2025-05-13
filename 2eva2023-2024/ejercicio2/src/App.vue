<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div>
      <HelloWorld msg="Este es el componente de inicio" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <RouterLink to="/todosServicios">Todos los servicios</RouterLink>
        <RouterLink to="/favoritos">Favoritos</RouterLink>
        <RouterLink to="/serviciosPabellon">ServiciosPabellon</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
