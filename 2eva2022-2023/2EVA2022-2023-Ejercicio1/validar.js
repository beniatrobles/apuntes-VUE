let matriculaInput = document.getElementById( "matricula" );
let tipoSeleccionado = document.getElementById( "tipo" );

let formulario = document.getElementById( "form" )
let resultado = document.getElementById( "resultado" )

let imgPorTipo = {
    motocicleta: [ "menorEdad", "mayorEdad" ],
    automovil: [ "particular", "profesional" ],
    camion: [ "rigido", "articulado" ]
};

// document.getElementById("menorEdad").style.display = "none";
// document.getElementById("mayorEdad").style.display = "none";
// document.getElementById("particular").style.display = "none";
// document.getElementById("profesional").style.display = "none";
// document.getElementById("rigido").style.display = "none";
// document.getElementById("articulado").style.display = "none";

document.querySelectorAll( "img" ).forEach( img =>
{
    img.style.display = "none"
} )


function validarMatricula( input )
{
    let validacion = /^\d{4}-[BCDFGHJKLMNPQRSTVWXYZ]{3}/;
    return validacion.test( input );
}


matriculaInput.addEventListener( "blur", () =>
{
    let valor = matriculaInput.value.toUpperCase();
    matriculaInput.value = valor;

    if ( !validarMatricula( valor ) )
    {
        document.getElementById( "errorMatricula" ).textContent = "Formato inválido.";
    } else
    {
        document.getElementById( "errorMatricula" ).textContent = "";
    }
} );


tipoSeleccionado.addEventListener( "change", () =>
{
    let seleccion = imgPorTipo[ tipoSeleccionado.value ];


    console.log( seleccion )

    document.querySelectorAll( "img" ).forEach( img => img.style.display = "none" );


    seleccion.forEach( id =>
    {
        let img = document.getElementById( id );
        if ( img )
        {
            img.style.display = "inline";
        }

        img.addEventListener( "click", () =>
        {
            // Quitar borde rojo de todas las imágenes visibles
            document.querySelectorAll( "img" ).forEach( otraImg =>
            {
                otraImg.classList.remove( "bordeRojo" );
            } );

            // Añadir borde rojo solo a la que se ha hecho click
            img.classList.add( "bordeRojo" );
        } );
    } );


} );


formulario.addEventListener( "submit", ( e ) =>
{
    e.preventDefault()

    let matricula = document.getElementById( "matricula" ).value
    let tipo = document.getElementById( "tipo" ).value

    let imagenesSel = document.querySelectorAll( "img.bordeRojo" )
    let tipos = []

    imagenesSel.forEach( img =>
    {
        tipos.push( img.alt )
    } )

    let html = `
        <p><strong>Matrícula:</strong> ${ matricula }</p>
        <p><strong>Automóvil:</strong> ${ tipo }</p>
    `;

    if ( tipos.length === 0 )
    {
        html += `<p>No has seleccionado ningúna imagen.</p>`;

    } else
    {
        html += `<p><strong>Tipo de automóvil:</strong> ${ tipos }</p>`
    }

    // resultado.innerHTML = `
    // <p>${ matricula }</p>
    // <p>${ tipo }</p>
    // <p><strong>Tipo de automóvil:</strong> ${tipos}`</p>


    resultado.innerHTML = html;
} )
