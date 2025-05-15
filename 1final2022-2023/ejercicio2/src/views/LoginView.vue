<template>
    <h1>Pagina de Login | Login orrialdea</h1>
    <p>Datos de acceso</p>
    <form action="">
        <label for="">Email:</label>
        <input type="text" name="" id="" placeholder="Introduce tu email"><br>
        <label for="">Password: </label>
        <input type="password" placeholder="Introduce tu contraseña"><br>
        <button>Login</button>
    </form>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

let usuarios = ref([])

let obtenerUsuarios = async () => {
    try{
        let response = await axios.get('/json/Usuarios.json')
        usuarios.value = response.data
    }catch(error){
        console.error( "Error al obtener los usuarios", error )

    }
}

onMounted(()=>{
     obtenerUsuarios()
})

</script> 
<style></style>