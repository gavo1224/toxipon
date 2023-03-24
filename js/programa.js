function obtenerNumeroEnRango(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function traducirEleccionNumeroTexto(eleccionNumerica) {
  let traduccion = "";
  if (eleccionNumerica == 1) {
    traduccion = "piedra";
  } else if (eleccionNumerica == 2) {
    traduccion = "papel";
  } else if (eleccionNumerica == 3) {
    traduccion = "tijera";
  } else {
    traduccion = "Ta mal";
  }
  return traduccion;
}

let OPCION_EMPATE = 0;
let OPCION_JUGADOR_A = -1;
let OPCION_JUGADOR_B = 1;
function decidirResultadoCombate(eleccionJugadorA, eleccionJugadorB) {
  if (eleccionJugadorA == eleccionJugadorB) {
    return OPCION_EMPATE; // empate
  } else if (
    (eleccionJugadorA == 1 && eleccionJugadorB == 3) ||
    (eleccionJugadorA == 2 && eleccionJugadorB == 1) ||
    (eleccionJugadorA == 3 && eleccionJugadorB == 2)
  ) {
    return OPCION_JUGADOR_A; // ganó jugador A
  } else {
    return OPCION_JUGADOR_B; // ganó jugador B
  }
}

/*let contador = 0;
while (contador < 5) {
  alert("contador: " + contador);
  contador = contador + 1;
}*/
let eleccionJugador = 0;
let eleccionPc = 0;
let triunfosJugador = 0;
let derrotasJugador = 0;
let empates = 0;
let partidas = 0;

while (
  triunfosJugador < 3 &&
  derrotasJugador < 3
  //empates < 3 &&
  //partidas < 6
) {
  eleccionJugador = prompt("elije: 1 para piedra, 2 para papel, 3 para tijera");
  eleccionPc = obtenerNumeroEnRango(1, 3);

  alert("jugador eligió: " + traducirEleccionNumeroTexto(eleccionJugador));
  alert("PC eligió: " + traducirEleccionNumeroTexto(eleccionPc));

  //Combate
  let resultadoCombate = decidirResultadoCombate(eleccionJugador, eleccionPc);
  if (resultadoCombate == OPCION_EMPATE) {
    alert("Empate");
    empates = empates + 1;
  } else if (resultadoCombate == OPCION_JUGADOR_A) {
    alert("ganaste wey");
    triunfosJugador = triunfosJugador + 1;
  } else if (resultadoCombate == OPCION_JUGADOR_B) {
    alert("Perdiste");
    derrotasJugador = derrotasJugador + 1;
  }
  partidas = derrotasJugador + triunfosJugador + empates;
}

alert(
  "ganaste " +
    triunfosJugador +
    " veces. perdiste " +
    derrotasJugador +
    " veces. y jugaste " +
    partidas +
    " partidas."
);
