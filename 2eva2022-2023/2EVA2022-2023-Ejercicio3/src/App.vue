<script setup>

</script>

<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/examen">Examen</router-link></li>
      </ul>
    </nav>
    <router-view></router-view> <!-- Aquí se renderizarán las vistas -->
  </div>
</template>

<style scoped></style>
