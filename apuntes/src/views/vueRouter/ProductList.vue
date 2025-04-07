<template>
    <Navbar />
    <h1>Listado de productos</h1>
    <ul>
        <li v-for="producto in productos" :key="producto.id">{{ producto.nombre
            }}---{{ producto.precio }}€---{{ producto.stock }} unidades
            <button @click="verDetalles(producto.id)">Ver</button>
        </li>
    </ul>
    <button @click="volver">Inicio</button>
    <button @click="formulario">Agregar Producto</button>
    <Footer />
</template>
<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { useRouter } from 'vue-router';

let router = useRouter()

function volver() {
    router.push('/inicio')
}

function formulario(){
    router.push('/addProduct')
}

function verDetalles(id){
    console.log(id)
    router.push({name: 'ProductDetails', params: {id}})

}


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


</script>
<style></style>