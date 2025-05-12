let pabellones = ["Arrupe", "Areitza", "Aztarain", "Guturbai"]


let servicio = document.getElementById("servicio")
let pabellon = document.getElementById("pabellon")
let mostrar = document.getElementById("mostrar")

function validarServicio(servicio){
    let validacion = /^[a-zA-Z0-9_]+$/
    if(validacion.test(servicio)){
        return true
    }else{
        return false
    }
}

