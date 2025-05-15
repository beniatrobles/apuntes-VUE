<template>
  <h1>Compras</h1>
  <p>{{ mensaje }}</p>

  <table>
    <thead>
      <tr>
        <th>Producto</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Stock</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="producto in productos" :key="producto.id">
        <td>{{ producto.title }}</td>
        <td>{{ producto.description }}</td>
        <td>{{ producto.price }} €</td>
        <td>{{ producto.stock }}</td>
        <td>
          <button @click="anadirProducto(producto)">Comprar</button>
        </td>
      </tr>
    </tbody>
  </table>

  <h1>Listado de Compras</h1>
  <ul>
    <li v-for="compra in compras" :key="compra.producto.id">
      {{ compra.producto.title }} --- {{ compra.producto.price }} € --- Unidades: {{ compra.unidades }}
    </li>
  </ul>

  <h2>Total de la compra: {{ total.toFixed(2) }} €</h2>
</template>

<script setup>
import { ref, onMounted,computed } from 'vue'
import axios from 'axios'

let mensaje = ref('')
let productos = ref([])
let compras = ref([])


const obtenerProductos = async () => {
  try {
    const response = await axios.get('/json/products.json')
    productos.value = response.data.products
  } catch (error) {
    console.error("Error al obtener los productos", error)
  }
}

const total = computed(() => {
  let suma = 0
  for (let i = 0; i < compras.value.length; i++) {
    const compra = compras.value[i]
    if (compra && compra.producto && compra.unidades) {
      suma += compra.producto.price * compra.unidades
    }
  }
  return suma
})


onMounted(() => {
  const usuarioStr = sessionStorage.getItem('usuario')

  if (usuarioStr) {
    const usuario = JSON.parse(usuarioStr)
    mensaje.value = `Realizando compra como ${usuario.name} (${usuario.email})`
  } else {
    mensaje.value = 'Realizando compra como invitado'
  }

  obtenerProductos()
})

// Añadir productos al carrito
function anadirProducto(producto) {
  let encontrado = false
  let totalCompra = 0

  for (let i = 0; i < compras.value.length; i++) {
    if (compras.value[i].producto.id === producto.id) {
      compras.value[i].unidades += 1
      encontrado = true
    //   break
    }
  }

 

  if (!encontrado) {
    compras.value.push({
      producto: producto,
      unidades: 1
    })
  }
}
</script>

<style scoped>

</style>
