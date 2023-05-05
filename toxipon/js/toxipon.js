// VARIABLES GLOBALES
let ataqueJugador 
let ataqueEnemigo 

// CONSTANTES GLOBALES
const FUEGO = "Fuego🔥";
const AGUA = "Agua💧"
const PLANTAS = "Plantas🌳"


function ataqueFuego () { 
  ataqueJugador = FUEGO
 
  manejadorSeleccionarAtaqueEnemigo()

}
function ataqueAgua () { 
  ataqueJugador = AGUA
  
  manejadorSeleccionarAtaqueEnemigo()
}
function ataquePlantas () { 
  ataqueJugador = PLANTAS
  
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
    ataqueEnemigo = FUEGO
  } else if (AtaqueEnemigoNumeroAleatorio == 2) {
    ataqueEnemigo = AGUA
  } else if (AtaqueEnemigoNumeroAleatorio == 3) {
    ataqueEnemigo = PLANTAS
  }
  
  combate ()
}

function combate () {

  let resultado;

  if(ataqueJugador == ataqueEnemigo) {
    resultado = 0;
  } else if(ataqueJugador == FUEGO && ataqueEnemigo == PLANTAS) {
    resultado = 1
  } else if(ataqueJugador == AGUA && ataqueEnemigo == FUEGO) {     
    resultado = 1
  } else if(ataqueJugador == PLANTAS && ataqueEnemigo == AGUA) {
    resultado = 1
  } else {
    resultado = -1
  }

  crearMensaje(armarResultado(resultado));
}

function crearMensaje (contenido) {

  let seccionMensajes = document.getElementById("mensajes")
 
  let parrafo = document.createElement("p")

  parrafo.innerHTML = contenido
  
  seccionMensajes.appendChild(parrafo)
}

function armarResultado (codigoResultado) {

  let resultadoCombate;

  if(codigoResultado == 0) {
    resultadoCombate = "Empataste🐱‍👤";
  } else if(codigoResultado == 1) {
    resultadoCombate = "Ganaste🔥🐲"
  } else {
    resultadoCombate = "Perdiste🤡"
  }

  return "Tu atacaste con "+ ataqueJugador +" el enemigo ataco con "+ ataqueEnemigo + " " + resultadoCombate
}


window.addEventListener("load", iniciarJuego)