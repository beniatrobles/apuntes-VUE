<template>
    <hr>
    <div class="padre">
        <h1>Componente Padre</h1>
        <h2>Lista de Posts</h2>
        <div class="contenedor">
            <PostDetails :posts="posts" />
            <PostDetails :posts="posts" />
            <PostDetails :posts="posts" />
            <PostDetails :posts="posts" />
            <PostDetails :posts="posts" />
        </div>
    </div>
    <hr>
</template>
<script setup>
import { ref } from 'vue';
import PostDetails from './PostDetails.vue';

let posts = ref([
    { id: 1, title: 'Post 1', description: 'Este es el post 1' },
    { id: 2, title: 'Post 2', description: 'Este es el post 2' },
    { id: 3, title: 'Post 3', description: 'Este es el post 3' },
    { id: 4, title: 'Post 4', description: 'Este es el post 4' },
    { id: 5, title: 'Post 5', description: 'Este es el post 5' }
])

</script>
<style>
.padre {
    background-color: gray;
}

.contenedor{
    display: flex;
    gap: 10px;
}
</style>