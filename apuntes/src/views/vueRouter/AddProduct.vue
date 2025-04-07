<template>
    <Navbar />
    <h1>Agregar Producto</h1>
    <form action="" @submit.prevent="agregarProducto">
        <label for="">Nombre</label>
        <input type="text" v-model="nombre"><br>
        <label for="">Precio</label>
        <input type="number" v-model="precio"><br>
        <label for="">Stock</label>
        <input type="number" v-model="stock"><br>
        <button type="submit">Agregar Producto</button>
        <button @click="volver">Volver</button>
    </form>
    
    <Footer />
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let nombre = ref('')
let precio = ref('')
let stock = ref('')
let productos = ref([])
let router = useRouter()

function agregarProducto(){
    productos.value.push([{
        nombre: nombre.value,
        precio: precio.value,
        stock: stock.value
    }])

    console.log(productos,"Producto añadido")
}

function volver(){
    router.push('/productList')
}



</script>
<style></style>