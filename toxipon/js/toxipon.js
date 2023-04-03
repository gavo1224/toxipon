console.log("antes de iniciar")

function iniciarJuego() {
  let botonSeleccionarMascota = document.getElementById("boton-seleccionar-mascota");
  botonSeleccionarMascota.addEventListener("click", manejadorSeleccionarMascotaJugador);
  console.log("inicio")
}


function manejadorSeleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge")
  let inputCapipepo = document.getElementById("capipepo")
  let inputRatigueya = document.getElementById("ratigueya")
  let spanMascotaJugador = document.getElementById("mascota-jugador")
  console.log(inputHipodoge)

  if (inputHipodoge.Checked) {
    spanMascotaJugador.innerHTML = "hipodoge";
  } else if (inputCapipepo.Checked) {
    spanMascotaJugador.innerHTML = "capipepo";
    console.log("")
  } else if (inputRatigueya.Checked) {
    spanMascotaJugador.innerHTML = "ratigueya";
  } else {
    alert("No seleccionaste mascota");
  }
  
}
window.addEventListener("load", iniciarJuego)