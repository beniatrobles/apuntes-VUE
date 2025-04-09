<template>
    <Navbar />
    <h1>Albumes</h1>
    <select v-model="albumSeleccionado">
        <option value="" disabled>Selecciona un álbum</option>
        <option v-for="album in albumes" :key="album.id" :value="album.id">
            {{ album.id }} - {{ album.title }}
        </option>
    </select>
    <h3>Álbum seleccionado: {{ albumSeleccionado }}</h3>
    <form action="" @submit.prevent="agregarFoto">
        <h3>Añadir Foto ficticia</h3>
        <label for="">Titulo: </label>
        <input type="text" v-model="nuevaFoto.title" required><br>
        <label for="">Url: </label>
        <input type="text" v-model="nuevaFoto.url" required><br>
        <label for="">ThumbnailUrl: </label>
        <input type="text" v-model="nuevaFoto.thumbnailUrl"><br>
        <button type="submit">Añadir Foto</button>
    </form>
    <br>
    <ul v-for="album in albumes" :key="album.id">
        <li>{{ album.title }}
            <button @click="obtenerFoto(album.id)">Ver</button>
        </li>
    </ul>

    <div v-if="fotos.length > 0">
        <h2>Fotos del álbum {{ fotos[0].albumId }}</h2>
        <ul>
            <li v-for="foto in fotos" :key="foto.id">
                <!-- <img :src="foto.url" alt="" /> -->
                {{ foto.title }}
                <button @click="borrarFoto(foto.id)">Eliminar</button>
            </li>
        </ul>
    </div>
    <Footer />
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Definir las variables reactivas
let albumes = ref([]);
let fotos = ref([]);
let albumSeleccionado = ref('');
let nuevaFoto = ref({
    title: "",
    url: "",
    thumbnailUrl: ""
})

// Obtener los álbumes de la API
let obtenerAlbumes = async () => {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/albums?_limit=10');
        albumes.value = response.data;
    } catch (error) {
        console.error("Error al obtener los datos", error);
    }
};

// Obtener las fotos de un álbum específico
let obtenerFoto = async (id) => {
    try {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=5`);
        fotos.value = response.data;
    } catch (error) {
        console.error("Error al obtener las fotos", error);
    }
};

let borrarFoto = async (id) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
        fotos.value = fotos.value.filter((foto) => foto.id != id)

    } catch (error) {
        console.error("No se ha borrado la foto", error)
    }
}


let agregarFoto = async () => {
    let foto = {
        albumId: albumSeleccionado.value,
        title: nuevaFoto.value.title,
        url: nuevaFoto.value.url,
        thumbnailUrl: nuevaFoto.value.thumbnailUrl
    }

    let response = await axios.post(`https://jsonplaceholder.typicode.com/photos`, foto)

    fotos.value.push(response.data)

    nuevaFoto.value = {
        title: "",
        url: "",
        thumbnailUrl: ""
    };
}

onMounted(() => {
    obtenerAlbumes();
});
</script>

<style>
button {
    cursor: pointer;
}

img {
    width: 100px;
    height: auto;
}
</style>
