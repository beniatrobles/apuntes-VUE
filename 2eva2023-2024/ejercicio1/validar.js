let pabellones = ["Arrupe", "Areitza", "Aztarain", "Guturbai"]


let servicio = document.getElementById("servicio")
let pabellon = document.getElementById("pabellon")
let mostrar = document.getElementById("mostrar")

function validarServicio(servicio){
    let validacion = /^[a-zA-Z0-9-]+$/;

    if(validacion.test(servicio)){
        return true;
    }else{
        return alert("El nombre debe contener solo letras, números o guión bajo.")
    }
}
