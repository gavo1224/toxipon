let ataqueJugador 
let ataqueEnemigo 

function ataqueFuego () { 
  ataqueJugador = "Fuego🔥"
 
  manejadorSeleccionarAtaqueEnemigo()

}
function ataqueAgua () { 
  ataqueJugador = "Agua💧"
  
  manejadorSeleccionarAtaqueEnemigo()
}
function ataquePlantas () { 
  ataqueJugador = "Plantas🌳"
  
  manejadorSeleccionarAtaqueEnemigo()
}

function obtenerNumeroEnRango(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function iniciarJuego(){

  let botonSeleccionarMascotaJugador = document.getElementById("boton-seleccionar-mascota")
  botonSeleccionarMascotaJugador.addEventListener ("click", manejadorSeleccionarMascotaJugador)

  let botonFuego = document.getElementById("boton-fuego")
  botonFuego.addEventListener ("click", ataqueFuego)
  let botonAgua = document.getElementById("boton-agua")
  botonAgua.addEventListener ("click", ataqueAgua)
  let botonPlantas = document.getElementById("boton-plantas")
  botonPlantas.addEventListener ("click", ataquePlantas)

} 

function manejadorSeleccionarMascotaJugador(){

  let inputHipodoge = document.getElementById("hipodoge")
  let inputCapipepo = document.getElementById("capipepo")
  let inputRatigueya = document.getElementById("ratigueya")
  let spanMascotaJugador = document.getElementById("mascota-jugador")

  if(inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge🦛"
  } else if(inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo🦘"
  } else if(inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya🐀"
  } else {
    alert("no seleccionaste ninguna mascota")
  }

  manejadorSeleccionarMascotaEnemigo()

}

function manejadorSeleccionarMascotaEnemigo() {

  let MacotaEnemigoNumeroAleatorio = obtenerNumeroEnRango(1,3)
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
  
  
  if (MacotaEnemigoNumeroAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge🦛"
  } else if (MacotaEnemigoNumeroAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo🦘"
  } else if (MacotaEnemigoNumeroAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "Ratigueya🐀"
  }
}

function manejadorSeleccionarAtaqueEnemigo(){
  let AtaqueEnemigoNumeroAleatorio = obtenerNumeroEnRango(1,3)

  if (AtaqueEnemigoNumeroAleatorio == 1) {
    ataqueEnemigo = "Fuego🔥"
  } else if (AtaqueEnemigoNumeroAleatorio == 2) {
    ataqueEnemigo = "Agua💧"
  } else if (AtaqueEnemigoNumeroAleatorio == 3) {
    ataqueEnemigo = "Plantas🌳"
  }
  combate ()
}

function combate () {

  if(ataqueJugador == ataqueEnemigo) {
      crearMensajes ("Empataste🐱‍👤")
  } else if(ataqueJugador == "Fuego🔥" && ataqueEnemigo == "Plantas🌳") {
       crearMensajes ("Ganaste🐲")
  } else if(ataqueJugador == "Agua💧" && ataqueEnemigo == "Fuego🔥") {
       crearMensajes ("Ganaste🐲")
  } else if(ataqueJugador == "Plantas🌳" && ataqueEnemigo == "Agua💧") {
       crearMensajes ("Ganaste🐲")
  } else {
    crearMensajes ("Perdiste🤡")
  }
}

function crearMensajes (resultado) {

  //se declara la variable seccionMensajes asignandole como valor el elemento con "id" = "mensajes" el cual es una "seccion" en el html.
  let seccionMensajes = document.getElementById("mensajes")
  // se declara una variable y se le da como valor el elemento creado por medio de la funcion .createElement, en este caso un parrafo "p"
  // se modifica el contenido de este elemento por medio de la propiedad .innerHTML concatenando textos con las variables globales
  // ataqueJugador y ataqueEnemigo.
  let parrafo = document.createElement ("p")
  parrafo.innerHTML = "Tu atacaste con "+ ataqueJugador +" el enemigo ataco con "+ ataqueEnemigo + " " + resultado
  // Utilizando el metodo de manipulacion del DOM(funcion) .appendChild() la cual nos permite tomar
  // elementos creados previamente en Js(parrafo) e incorporarlos a elementos ya existentes en el html(seccionMensajes) 
  seccionMensajes.appendChild(parrafo)
}


window.addEventListener("load", iniciarJuego)