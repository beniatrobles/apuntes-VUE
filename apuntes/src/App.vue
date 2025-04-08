<template>
  <div id="app">
    <!-- Aquí se renderizan las vistas según la ruta -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}
</style>
