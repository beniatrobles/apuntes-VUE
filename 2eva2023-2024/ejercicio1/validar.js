import { Servicio } from "./Servicio"


let pabellones = ["Arrupe", "Areitza", "Aztarain", "Guturbai"]


let servicio = document.getElementById("servicio")
let pabellon = document.getElementById("pabellon")
let mostrar = document.getElementById("mostrar")

let formulario = document.getElementById("formulario")

function validarServicio(servicio){
    let validacion = /^[a-zA-Z0-9_]+$/
    if(validacion.test(servicio)){
        return true
    }else{
        return false
    }

}

function validarPabellon(pabellon){
    if(pabellones.includes(pabellon)){
        return true
    }else{
        return false
    }
}


formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    let servicioTexto = servicio.value
    let pabellonTexto = pabellon.value
    let mostrarTexto = mostrar.checked
    if(!validarServicio(servicioTexto)){
        alert("El nombre debe estar formado únicamente por letras, números o guión alto.")
    }else if(!validarPabellon(pabellonTexto)){
        alert ("El pabellon no esta disponible")
    }else{
        alert ("Formulario correcto")
        let servicioNuevo = new Servicio(servicioTexto,pabellonTexto,mostrarTexto)
        console.log(servicioNuevo)

    }

    
    
})



