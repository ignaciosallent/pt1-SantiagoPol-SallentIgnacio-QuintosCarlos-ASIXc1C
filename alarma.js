window.addEventListener("load", buildIt);

function buildIt() {
    actualizaReloj();
    horasMenu();
    minMenu();
    segsMenu();
    formatoAudio();
}

function actualizaReloj(){
    var momentoActual = new Date();
    var hora = momentoActual.getHours();
    var minuto = momentoActual.getMinutes();
    var segundo = momentoActual.getSeconds();
    var horaImprimible = ComprovarZero(hora) + ":" + ComprovarZero(minuto) + ":" + ComprovarZero(segundo);
    document.getElementById("tiempo").innerHTML = horaImprimible;
    var t = setTimeout(actualizaReloj, 1000);
}

function ComprovarZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
 }

function horasMenu(){
    var select = document.getElementById("alarmaHrs");
    var horas = 23;

    for (i = 0; i <= horas; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function minMenu(){
    var select = document.getElementById("alarmaMin");
    var minutos = 59;

    for (i = 0; i <= minutos; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function segsMenu(){
    var select = document.getElementById("alarmaSeg");
    var segundos = 59;

    for (i = 0; i <= segundos; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}


document.getElementById("botonEstablecerAlarma").addEventListener("click", EstablecerAlarma);
document.getElementById("botonReiniciarAlarma").addEventListener("click", limpiarAlarma);
document.getElementById("sonidos-alarma").addEventListener("change", ObtenerAudio);

function ObtenerAudio() {
    myAudio1.volume = 1;
    myAudio2.volume = 1;
    var seleccion = document.getElementById("sonidos-alarma").value;
    if (seleccion === "musicas/campanas.mp3") {
        document.getElementById("myAudio1").play();
    } if (seleccion === "musicas/coche.mp3") {
        document.getElementById("myAudio2").play();
    } else if (seleccion == "musicas/gritos.mp3") {
        document.getElementById("myAudio3").play();
    }

}

var myAlarm;

function EstablecerAlarma() {
  var hrs = document.getElementById("alarmaHrs").value;
  var min = document.getElementById("alarmaMin").value;
  var seg = document.getElementById("alarmaSeg").value;
  var sonido = document.getElementById("sonidos-alarma").value;

  var alarma = new Date();
  alarma.setHours(hrs);
  alarma.setMinutes(min);
  alarma.setSeconds(seg);

  var ahora = new Date();

  if (alarma <= ahora) {
    alert("Por favor seleccione una hora en el futuro.");
    return;
  }

  document.getElementById("botonEstablecerAlarma").disabled = true;

  myAlarm = new Audio(sonido);

  var intervalId = setInterval(function() {
    ahora = new Date();
    if (alarma <= ahora) {
      myAlarm.play();
      alert("¡Es hora de levantarse!");
      clearInterval(intervalId);
      document.getElementById("botonEstablecerAlarma").disabled = false;
    }
  }, 1000);
}

function ComprovarZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function afegirZero(i) {
    if (i < 10) { i = "0" + i} ;
    return i;
}

function limpiarAlarma() {
  if (myAlarm) {
    myAlarm.pause();
    myAlarm.currentTime = 0;
  }

  document.getElementById("botonEstablecerAlarma").disabled = false;
}

function limpiarAlarma() {
    document.getElementById("alarmaHrs").disabled = false;
    document.getElementById("alarmaMin").disabled = false;
    document.getElementById("alarmaSeg").disabled = false;
    document.getElementById("sonidos").disabled = false;
    document.getElementById("myAudio").disabled = false;
    myAudio.pause();
}

/* Dark/Light */
function cambiarTema() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
}