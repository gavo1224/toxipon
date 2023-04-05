let ataqueJugador 
let ataqueEnemigo 

function ataqueFuego () { 
  ataqueJugador = "fuego"
  alert (ataqueJugador)
  manejadorSeleccionarAtaqueEnemigo()

}
function ataqueAgua () { 
  ataqueJugador = "agua"
  alert (ataqueJugador)
  manejadorSeleccionarAtaqueEnemigo()
}
function ataquePlantas () { 
  ataqueJugador = "plantas"
  alert (ataqueJugador)
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
    spanMascotaJugador.innerHTML = "hipodoge"
  } else if(inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "capipepo"
  } else if(inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "ratigueya"
  } else {
    alert("no seleccionaste ninguna mascota")
  }

  manejadorSeleccionarMascotaEnemigo()

}

function manejadorSeleccionarMascotaEnemigo() {

  let MacotaEnemigoNumeroAleatorio = obtenerNumeroEnRango(1,3)
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
  
  
  if (MacotaEnemigoNumeroAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "hipodoge"
  } else if (MacotaEnemigoNumeroAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "capipepo"
  } else if (MacotaEnemigoNumeroAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "ratigueya"
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
}

window.addEventListener("load", iniciarJuego)