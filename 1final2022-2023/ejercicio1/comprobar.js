let peliculas = [
    "As Bestas",
    "Harry Potter",
    "El Padrino",
    "Pulp Fiction",
    "La La Land",
    "Parásitos",
    "El Señor de los Anillos: La Comunidad del Anillo",
    "Forrest Gump",
    "Amélie",
    "El viaje de Chihiro"
];

let premios = [
    "Premios Óscar",
    "Globos de Oro",
    "Festival de Cannes - Palma de Oro",
    "Premios BAFTA",
    "León de Oro - Festival de Venecia",
    "Oso de Oro - Festival de Berlín",
    "Premios Goya",
    "Premios César",
    "Premios Spirit",
    "Critics' Choice Awards"
];

let peliculasInput = document.getElementById("pelicula")
let premiosInput = document.getElementById("premio")

let formulario = document.getElementById("formulario")

let contador = 3

function cargarDatos() {
    // Selecciona una película aleatoria
    let indicePelicula = Math.floor(Math.random() * peliculas.length);
    let peliculaAleatoria = peliculas[indicePelicula];

    // Muestra la película aleatoria en el input
    peliculasInput.value = peliculaAleatoria;

    // Imprime el índice de la película en la consola


    // Llenar el select con los premios
    premios.forEach((premio, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = premio;
        premiosInput.appendChild(option);

    });

    console.log(indicePelicula);
    console.log(peliculaAleatoria);

    // Obtener el índice del premio seleccionado
    premiosInput.addEventListener('change', function () {
        let indicePremioSeleccionado = premiosInput.value;  // El valor de la opción seleccionada
        console.log(indicePremioSeleccionado);
    });

    // Guardar el índice de la película seleccionada en el formulario
    peliculasInput.setAttribute("indicePelicula", indicePelicula);

}

window.onload = cargarDatos;

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    console.log(peliculasInput.value)
    console.log(premiosInput.value)

    let indicePelicula = peliculasInput.getAttribute("indicePelicula")
    let indicePremio = premiosInput.value
    
        if (indicePelicula === indicePremio) {
            alert("Acertado")
        } else {
            contador--
            alert(`No acertado. Te quedan ${contador} intentos.`)
        }

        if (contador === 0) {
            alert("Fin del juego")
        }




})