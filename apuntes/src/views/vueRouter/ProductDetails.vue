<template>
    <Navbar />
    <h1>Aqui estan los detalles del producto {{ id }}</h1>
    <h3>Nombre: {{ producto.nombre }}</h3>
    <h3>Precio:</h3>
    <h3>Stock:</h3>
    <Footer />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

let route = useRoute()
let id = route.params.id

let productos = ref([
    { id: 1, nombre: 'Arroz', precio: 1.99, stock: 50 },
    { id: 2, nombre: 'Leche', precio: 0.89, stock: 30 },
    { id: 3, nombre: 'Pan', precio: 1.29, stock: 100 },
    { id: 4, nombre: 'Tomates', precio: 2.49, stock: 40 },
    { id: 5, nombre: 'Manzanas', precio: 3.99, stock: 60 },
    { id: 6, nombre: 'Papel higiénico', precio: 5.49, stock: 25 },
    { id: 7, nombre: 'Huevos', precio: 2.79, stock: 80 },
    { id: 8, nombre: 'Aceite de oliva', precio: 6.99, stock: 15 },
    { id: 9, nombre: 'Pollo', precio: 4.99, stock: 20 },
    { id: 10, nombre: 'Queso', precio: 3.49, stock: 35 }
]);

let producto = ref([])
onMounted(() => {
    producto.value = productos.value.find((p) => p.id === id)
})
</script>
<style></style>