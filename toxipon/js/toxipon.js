let ataqueJugador = 0

function ataqueFuego () { 
  let spanAtaqueJugador = document.getElementById("ataque-jugador")
  spanAtaqueJugador.innerHTML = "Fuego🔥"
  ataqueJugador = spanAtaqueJugador

}
function ataqueAgua () { 
  let spanAtaqueJugador = document.getElementById("ataque-jugador")
  spanAtaqueJugador.innerHTML = "Agua💧"
  ataqueJugador = spanAtaqueJugador
}
function ataquePlantas () { 
  let spanAtaqueJugador = document.getElementById("ataque-jugador")
  spanAtaqueJugador.innerHTML = "Plantas🌳"
  ataqueJugador = spanAtaqueJugador
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

  let numeroAleatorio = obtenerNumeroEnRango(1,3)
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

  if (numeroAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "hipodoge"
  } else if (numeroAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "capipepo"
  } else if (numeroAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "ratigueya"
  }
}



window.addEventListener("load", iniciarJuego)