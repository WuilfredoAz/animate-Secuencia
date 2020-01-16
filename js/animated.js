// Guardamos en variablesa todos los elementos animables (elemento, efecto de reveal, contendor de elemntos)
const principal = document.querySelector(".js-escuchador");
const primero = document.querySelector(".js-primero");
const segundo = document.querySelector(".js-segundo");

const tercero = document.querySelector(".js-tercero");
const txtPrimero = document.querySelector(".js-txtPrimero");

const cuarto = document.querySelector(".js-cuarto");

const quinto = document.querySelector(".js-quinto");
const txtSegundo = document.querySelector(".js-txtSegundo");

const sexto = document.querySelector(".js-sexto");
const revealSexto = document.querySelector(".js-sexto .reveal");
const contenedorSexto = document.querySelector(".contenedor-sexto");
const txtTercero = document.querySelector(".js-txtTercero");

const septimo = document.querySelector(".js-septimo");
const revealSeptimo = document.querySelector(".js-septimo .reveal");
const contenedorSeptimo = document.querySelector(".js-septimo .contenedor-septimo");
const txtCuarto = document.querySelector(".js-txtCuarto");

const octavo = document.querySelector(".js-octavo");
const revealOctavo = document.querySelector(".js-octavo .reveal");
const contenedorOctavo= document.querySelector(".js-octavo .contenedor-octavo");
const txtQuinto = document.querySelector(".js-txtQuinto");

const noveno = document.querySelector(".js-noveno");
const revealNoveno = document.querySelector(".js-noveno .reveal");
const contenedorNoveno = document.querySelector(".js-noveno .contenedor-noveno");
const txtSexto = document.querySelector(".js-txtSexto");

const decimo = document.querySelector(".js-decimo");
const revealDecimo = document.querySelector(".js-decimo .reveal");
const contenedorDecimo = document.querySelector(".js-decimo .contenedor-decimo");
const txtSeptimo = document.querySelector(".js-txtSeptimo");

// Guardamos en una variable a nuestro elemento que servira de boton para mostrar el menu
const mostrarMenu = document.querySelector(".js-btnMenu");

// Creamos el escuchador de eventos principal (el que usarán todas las animaciones)
principal.addEventListener("animationend", secuencia)

// Creamos el escuchador de eventos que activará la secuencia
mostrarMenu.addEventListener("click", activarSecuencia)

// Creamos el escuchador de eventos que desactivará la secuencia
txtPrimero.addEventListener("click", desactivarSecuencia)

// creamos la funcion necesaria para que se active el menu
function activarSecuencia()
{
    principal.style.display="grid";
}

//  Creamos la funcion necesaria para desactivar la secuencia (ocultar el menu)
function desactivarSecuencia()
{
    primero.classList.add("ocultarArriba");
}


// Creamos la funcion necesaria para el despliegue animado del menu
function secuencia()
{
    // Condiciones para mostrar
    if(event.animationName==="toArriba" || event.animationName==="toLado")
    {
        // Activar el segundo
        if(event.animationName==="toArriba" && event.srcElement.classList[1]==="primero")
        {
            segundo.style.display="initial";
            segundo.style.transformOrigin="left";
            segundo.style.animationName="toLado";
            segundo.style.animationDuration=".1s";
        }
        // Activamos el tercero
        else if(event.animationName==="toLado" && event.srcElement.classList[1]==="segundo")
        {
            tercero.style.display="flex";
            tercero.style.transformOrigin="bottom";
            tercero.style.animationName="toArriba";
            tercero.style.animationDuration=".12s";

            // Mostramos el texto de tercero
            txtPrimero.style.display="inherit";
        }
        // Activamos el cuarto
        else if(event.animationName==="toArriba" && event.srcElement.classList[1]==="tercero")
        {
            cuarto.style.display="initial";
            cuarto.style.transformOrigin="left";
            cuarto.style.animationName="toLado";
            cuarto.style.animationDuration=".14s";
        }
        // Activamos el quinto
        else if(event.animationName==="toLado" && event.srcElement.classList[1]==="cuarto")
        {
            quinto.style.display="flex";
            quinto.style.transformOrigin="bottom";
            quinto.style.animationName="toArriba";
            quinto.style.animationDuration=".16s";

            // Mostramos el texto del quinto
            txtSegundo.style.display="inherit";
        }
        // Activamos el sexto
        else if(event.animationName==="toArriba" && event.srcElement.classList[1]==="quinto")
        {
            sexto.style.display="initial";
            sexto.style.transformOrigin="left";
            sexto.style.animationName="toLado";
            sexto.style.animationDuration=".18s";
        }
        // Activamos el septimo
        else if(event.animationName==="toLado" && event.srcElement.classList[1]==="sexto")
        {
            septimo.style.display="initial";
            septimo.style.transformOrigin="bottom";
            septimo.style.animationName="toArriba";
            septimo.style.animationDuration=".2s";

            // activamos reveal en el sexto
            revealSexto.style.display="inherit";
            revealSexto.style.animationName="revelado";
            contenedorSexto.style.backgroundImage="url(../img/sexto.jpg)";
        }
        // Activamos el octavo
        else if(event.animationName==="toArriba" && event.srcElement.classList[1]==="septimo")
        {
            octavo.style.display="initial";
            octavo.style.transformOrigin="left";
            octavo.style.animationName="toLado";
            octavo.style.animationDuration=".22s";

            // Activamos el reveal del septimo
            revealSeptimo.style.display="inherit";
            revealSeptimo.style.animationName="revelado";
            contenedorSeptimo.style.backgroundImage="url(../img/septimo.jpg)";

            // Mostramos texto del sexto
            txtTercero.style.display="inherit";
            txtTercero.style.animationName="mostrarTexto";
        }
        // Activamos el noveno
        else if(event.animationName==="toLado" && event.srcElement.classList[1]==="octavo")
        {
            noveno.style.display="initial";
            noveno.style.transformOrigin="bottom";
            noveno.style.animationName="toArriba";
            noveno.style.animationDuration=".24s";

            // activamos el revelado del octavo
            revealOctavo.style.display="initial";
            revealOctavo.style.animationName="revelado";
            contenedorOctavo.style.backgroundImage="url(../img/octavo.jpg)";

            // Mostramos el texto del septimo
            txtCuarto.style.display="inherit"
            txtCuarto.style.animationName="mostrarTexto";
        }
        // Activamos el decimo
        else
        {
            decimo.style.display="initial";
            decimo.style.transformOrigin="left";
            decimo.style.animationName="toLado";
            decimo.style.animationDuration=".26s";

            // activamos el revelado del noveno
            revealNoveno.style.display="initial";
            revealNoveno.style.animationName="revelado";
            contenedorNoveno.style.backgroundImage="url(../img/noveno.jpg)";

            // Revelamos el decimo
            revealDecimo.style.display="initial";
            revealDecimo.style.animationName="revelado";
            contenedorDecimo.style.backgroundImage="url(../img/decimo.jpg)";

            // Mostramos el texto del octavo
            txtQuinto.style.display="inherit";
            txtQuinto.style.animationName="mostrarTexto";

            // Mostramos el texto del noveno
            txtSexto.style.display="inherit";
            txtSexto.style.animationName="mostrarTexto";

            // Mostramos el texto del Decimo
            txtSeptimo.style.display="inherit";
            txtSeptimo.style.animationName="mostrarTexto";
        }
    }
    // Condicion para ocultar el menu
    else if(event.animationName==="toAbajo" || event.animationName==="toDerecha")
    {
        //Ocultamos el segundo
        if(event.animationName==="toAbajo" && event.srcElement.classList[1]==="primero")
        {
            segundo.style.transformOrigin="right";
            segundo.style.animationName="toDerecha";
        }
        //Ocultamos el tercero
        else if(event.animationName==="toDerecha" && event.srcElement.classList[1]==="segundo")
        {
            tercero.style.transformOrigin="top";
            tercero.style.animationName="toAbajo";
        }
        //Ocultamos el cuarto
        else if(event.animationName==="toAbajo" && event.srcElement.classList[1]==="tercero")
        {
            cuarto.style.transformOrigin="right";
            cuarto.style.animationName="toDerecha";
        }
        //Ocultamos el quinto
        else if(event.animationName==="toDerecha" && event.srcElement.classList[1]==="cuarto")
        {
            quinto.style.transformOrigin="top";
            quinto.style.animationName="toAbajo";
        }
        //Ocultamos el sexto
        else if(event.animationName==="toAbajo" && event.srcElement.classList[1]==="quinto")
        {
            sexto.style.transformOrigin="right";
            sexto.style.animationName="toDerecha";
        }
        //Ocultamos el septimo
        else if(event.animationName==="toDerecha" && event.srcElement.classList[1]==="sexto")
        {
            septimo.style.transformOrigin="top";
            septimo.style.animationName="toAbajo";
        }
        //Ocultamos el octavo
        else if(event.animationName==="toAbajo" && event.srcElement.classList[1]==="septimo")
        {
            octavo.style.transformOrigin="right";
            octavo.style.animationName="toDerecha";
        }
        //Ocultamos el noveno
        else if(event.animationName==="toDerecha" && event.srcElement.classList[1]==="octavo")
        {
            noveno.style.transformOrigin="top";
            noveno.style.animationName="toAbajo"
        }
        //Ocultamos el decimo
        else if(event.animationName==="toAbajo" && event.srcElement.classList[1]==="noveno")
        {
            decimo.style.transformOrigin="right";
            decimo.style.animationName="toDerecha";
            // limpiar();
        }
        // limpiamos tras haberse ocultado todo
        else
        {
            limpiar();
        }
    }
}

function limpiar()
{
     //Ocultamos y reseteamos todo
     segundo.style.display="";
     segundo.style.transformOrigin="";
     segundo.style.animationName="";
     segundo.style.animationDuration="";

     tercero.style.display="";
     tercero.style.transformOrigin="";
     tercero.style.animationName="";
     tercero.style.animationDuration="";

     cuarto.style.display="";
     cuarto.style.transformOrigin="";
     cuarto.style.animationName="";
     cuarto.style.animationDuration="";

     quinto.style.display="";
     quinto.style.transformOrigin="";
     quinto.style.animationName="";
     quinto.style.animationDuration="";

     sexto.style.display="";
     sexto.style.transformOrigin="";
     sexto.style.animationName="";
     sexto.style.animationDuration="";

     septimo.style.display="";
     septimo.style.transformOrigin="";
     septimo.style.animationName="";
     septimo.style.animationDuration="";

     octavo.style.display="";
     octavo.style.transformOrigin="";
     octavo.style.animationName="";
     octavo.style.animationDuration="";

     noveno.style.display="";
     noveno.style.transformOrigin="";
     noveno.style.animationName="";
     noveno.style.animationDuration="";

     decimo.style.display="";
     decimo.style.transformOrigin="";
     decimo.style.animationName="";
     decimo.style.animationDuration="";

     principal.style.display="";
     primero.classList.remove("ocultarArriba");
}