<template>
    <nav>
        <ul class="lista">
            <li >
                <router-link to="/" class="lista1">Todos los ejercicios</router-link>
            </li>
            <li>
                <router-link to="/contador" class="lista1">Contador</router-link>
            </li>
            <li class="lista3">
                <router-link to="/notas" class="lista1">Notas</router-link>
            </li>
            <li class="lista4">
                <router-link to="/axios" class="lista1">Axios</router-link>
            </li>
            <li class="lista5">
                <router-link to="/padre_hijo" class="lista1">PadreHijo</router-link>
            </li>
            <li class="lista5">
                <router-link to="/hijo_padre" class="lista1">HijoPadre</router-link>
            </li>
            <li class="lista5">
                <router-link to="/inicio" class="lista1">VueRouter</router-link>
            </li>
            <li class="lista5">
                <router-link to="/inicioTareas" class="lista1">Pinia</router-link>
            </li>
        </ul>
    </nav>
</template>
<script setup>

</script>
<style>
nav {
    background-color: #333;
    padding: 1rem;
}

ul {
    list-style-type: none;
    justify-content: space-around;
    padding: 0;
}
.lista{
    display: flex;
}
.lista1{
    color: white;
    text-decoration: none;
    
}

.lista1:hover{
    color: red
}


</style>