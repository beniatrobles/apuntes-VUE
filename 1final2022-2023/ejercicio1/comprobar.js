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


let premiosPeliculas = []

let peliculasInput = document.getElementById("pelicula")
let premiosInput = document.getElementById("premio")

peliculasInput.disabled = true

let formulario = document.getElementById("formulario")

let resultado = document.getElementById("resultado")

let contador = 3

function cargarDatos() {
    // Selecciona una película aleatoria
    let indicePelicula = Math.floor(Math.random() * peliculas.length);
    let peliculaAleatoria = peliculas[indicePelicula];


    // Muestra la película aleatoria en el input
    peliculasInput.value = peliculaAleatoria;

    

    // Llenar el select con los premios
    premios.forEach((premio, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = premio;
        premiosInput.appendChild(option);

    });

    console.log(indicePelicula);
    console.log(peliculaAleatoria);

    // // Obtener el índice del premio seleccionado
    // premiosInput.addEventListener('change', function () {
    //     let indicePremioSeleccionado = premiosInput.value;  // El valor de la opción seleccionada
    //     console.log(indicePremioSeleccionado);
    // });

    // Guardar el índice de la película seleccionada en el formulario
    peliculasInput.setAttribute("indicePelicula", indicePelicula);

}

window.onload = cargarDatos;

formulario.addEventListener("submit", (e) => {
    
    e.preventDefault()

    peliculasInput.disabled = false


    console.log(peliculasInput.value)
    console.log(premiosInput.value)

    let indicePelicula = peliculasInput.getAttribute("indicePelicula")
    let indicePremio = premiosInput.value
    
        if (indicePelicula === indicePremio) {
            alert("Acertado")

            let peliculaN = peliculasInput.value
            let premioN = premios[parseInt(premiosInput.value)];

            let peliculaPremio = new PeliculaPremios(peliculaN,premioN)

            premiosPeliculas.push(peliculaPremio)

            console.log(premiosPeliculas)

            resultado.innerHTML = peliculaPremio.toString()
        } else {
            contador--
            alert(`No acertado. Te quedan ${contador} intentos.`)
        }

        if (contador === 0) {

            alert("Fin del juego")
            peliculasInput.disabled = true
            peliculasInput.style.color = "red"
            

        }




})

