<template>
    <Navbar />
    <PostList :posts="posts"/>
    <Footer />
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import PostList from '@/components/PostList.vue';


</script>
<style></style>