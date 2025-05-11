<template>
    <div>
        <h1>Aqui montamos el examen</h1>
        <h3>Examen minimos 2DW3</h3>
        <form action="" @submit.prevent="agregarAlumno">
            <label for="">Nombre:</label>
            <input type="text" v-model="nombre"><br>
            <label for="">Email:</label>
            <input type="email" v-model="email" id="email" @blur="validarEmail" ref="emailInput"><br>
            <p v-if="emailError" class="error">{{ emailError }}</p><br>
            <label for="">Password:</label>
            <input type="password" @keyup="validarPassword" v-model="password" id="password">
            <p v-if="passError" class="error">{{ passError }}</p>
            <br>
            <button type="submit" v-if="passValido">Agregar Nuevo Alumno</button>

        </form>
        <br><br>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tr v-for="(alumno, index) in alumnos" :key="index">
                <td><input type="text" v-model="alumno.nombre" :disabled="!alumno.estaEditando"></td>
                <td><input type="text" v-model="alumno.email" :disabled="!alumno.estaEditando"></td>
                <td><input type="text" v-model="alumno.password" :disabled="!alumno.estaEditando"></td>
                <td>

                    <button @click="eliminarAlumno(index)">Eliminar</button>
                    <div v-if="alumno.estaEditando === false">
                        <button @click="activarEdicion(index)">Activar Edicion</button>
                    </div>
                    <div v-if="alumno.estaEditando === true">
                        <button @click="activarEdicion(index)">Desactivar Edicion</button>
                    </div>

                </td>
            </tr>
        </table>

    </div>
</template>

<script setup>
import { ref } from 'vue'

let nombre = ref( '' )
let email = ref( '' )
let password = ref( '' )
let emailError = ref( '' )
let passError = ref( '' )


let emailInput = ref( null )
let passValido = ref( false )

let alumnos = ref( [
    {
        nombre: "beñat",
        email: "beñat@beñat.com",
        password: "oosdsdas12345",
        estaEditando: false
    },
    {
        nombre: "jorge",
        email: "jorge@jorge.com",
        password: "oosdsdas12345",
        estaEditando: false
    }
] )





function validarEmail()
{
    if ( !email.value.includes( '@' ) || !email.value.includes( '.' ) )
    {
        emailError.value = 'Correo incorrecto'
        if ( emailInput.value )
        {
            emailInput.value.focus()
        }
    } else
    {
        emailError.value = ''
    }
}

function validarPassword()
{
    let pass = password.value
    let mayusculas = /[A-Z]/.test( pass )
    let minusculas = /[a-z]/.test( pass )
    let numeros = /\d/.test( pass )
    let longitud = pass.length >= 8 && pass.length <= 16

    if ( mayusculas && minusculas && numeros && longitud )
    {
        passError.value = ''
        passValido.value = true
    } else
    {
        passError.value = 'Contraseña incorrecta.'
        passValido.value = false
    }

}

function agregarAlumno()
{
    alumnos.value.push( {
        nombre: nombre.value,
        email: email.value,
        password: password.value,
        estaEditando: false
    } )

    nombre.value = ''
    email.value = ''
    password.value = ''
    console.log( alumnos.value )

}

function eliminarAlumno( index )
{
    console.log( index )
    alumnos.value.splice( index, 1 )
}

function activarEdicion( index )
{
    alumnos.value[ index ].estaEditando = !alumnos.value[ index ].estaEditando
}


</script>

<style></style>