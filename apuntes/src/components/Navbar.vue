<template>
    <nav>
        <ul class="lista">
            <li>
                <router-link to="/">Inicio</router-link>
            </li>
            <li>
                <router-link to="/contador">Contador</router-link>
            </li>
            <li>
                <router-link to="/notas">Notas</router-link>
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

a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
}

a:hover {
    color: #ff6347;
}
</style>