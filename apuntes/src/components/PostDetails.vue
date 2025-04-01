<template>
    <div class="hijo">
        <h2>Componente Hijo</h2>
        <ul v-for="post in posts" :key="post.id">
            <li>{{ post.title }}-{{ post.description }}</li>
        </ul>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
let props = defineProps({
    posts: Array,
})

</script>
<style>
.hijo {
    background-color: beige;
    width: 300px;
}

h2{
    font-size: 20px;
}
li{
    font-size: 15px;
}
</style>