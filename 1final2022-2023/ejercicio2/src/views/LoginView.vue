<template>
  <h1>Página de Login | Login orrialdea</h1>
  <p>Datos de acceso</p>
  <form @submit.prevent="login">
    <label>Email:</label>
    <input type="text" placeholder="Introduce tu email" v-model="usuario"><br>
    <label>Password:</label>
    <input type="password" placeholder="Introduce tu contraseña" v-model="contrasena"><br>
    <button type="submit">Login usuario</button>
  </form>
  <button @click="entrarInvitado">Usuario Invitado</button>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

let usuarios = ref([])
let usuario = ref('')
let contrasena = ref('')

const router = useRouter()

// Cargar datos desde JSON
const obtenerUsuarios = async () => {
  try {
    const response = await axios.get('/json/Usuarios.json')
    usuarios.value = response.data
  } catch (error) {
    console.error("Error al obtener los usuarios", error)
  }
}

// Función de login
function login() {
  let usuarioEncontrado = null

  for (let i = 0; i < usuarios.value.length; i++) {
    let user = usuarios.value[i]
    if (
      user.email.toLowerCase() === usuario.value.trim().toLowerCase() &&
      user.password === contrasena.value
    ) {
      usuarioEncontrado = user
      break
    }
  }

  if (usuarioEncontrado) {
    alert(`Login exitoso: ${usuarioEncontrado.name}`)
    // sessionStorage.setItem('usuario', usuarioEncontrado.name)
    sessionStorage.setItem('usuario', JSON.stringify(usuarioEncontrado))
    router.push('/compras')
  } else {
    alert('Email o contraseña incorrectos. Inténtalo de nuevo.')
  }
}

// Acceso como invitado
function entrarInvitado() {
  sessionStorage.removeItem('usuario')
  alert("Accediendo como invitado")
  router.push('/compras')
}

// Al cargar la vista
onMounted(() => {
  obtenerUsuarios()
})
</script>
