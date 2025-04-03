<template>
    <Navbar />
    <h3>En este sitio web veremos los productos de un supermercado</h3>
    <h3>Si quieres ver la lista clicka aqui</h3>
    <button @click="navegar">Lista Productos</button>
    <Footer />
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { useRouter } from 'vue-router';

let router = useRouter()

function navegar() {
    router.push('/productList')
}

</script>
<style></style>