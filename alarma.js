window.addEventListener("load", buildIt);

function buildIt() {
    actualizaReloj();
    horasMenu();
    minMenu();
    segsMenu();
    sonidoMenu2();
    formatoAudio();
}

function actualizaReloj(){
    var momentoActual = new Date();
    var hora = momentoActual.getHours();
    var minuto = momentoActual.getMinutes();
    var segundo = momentoActual.getSeconds();
    var horaImprimible = ComprovarZero(hora) + ":" + ComprovarZero(minuto) + ":" + ComprovarZero(segundo);
    document.getElementById("tiempo").innerHTML = horaImprimible;
    var t = setTimeout(actualizaReloj, 1000);  /*ERROR, NO USO LA VARIABLE EN NINGUN LADO??! */
    /* setTimeout(function() {
		alert("¡El temporizador ha finalizado!");          CÓDIGO DE UN EJ. DIFERENTE, PUEDE AYUDAR? 
	}, time * 1000); */
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

function sonidoMenu2(){
    var sonidos = document.getElementById("sonidos-alarma").value;
}

/*
function sonidoMenu(){
    var select = document.getElementById("sonidos");

    var sonidos = [
        {
            name: "Campanas Iglesia",
            url: "https://freespecialeffects.co.uk/soundfx/bells/church_bells_02.wav"
        },
        {
            name: "Quemando Rueda",
            url:"https://freespecialeffects.co.uk/soundfx/cars/car_burnout.wav"
        }
    ];
    
    for (var i = 0; i < sonidos.length; i++) {
        var option = document.createElement("option");
        option.value = sonidos[i].url;
        option.text = sonidos[i].name;
        select.appendChild(option);
    }
}
*/
function formatoAudio() {
    var myDiv = document.getElementById("eleccion_alarma");

    var myAudio1 = new Audio();
    myAudio1.src = "musicas/campanas.mp3";
    myAudio1.id = "myAudio1";
    document.body.appendChild(myAudio1);

    var myAudio2 = new Audio();
    myAudio2.src = "musicas/coche.mp3";
    myAudio2.id = "myAudio2";
    document.body.appendChild(myAudio2);

    var myAudio3 = new Audio();
    myAudio3.src = "musicas/gritos.mp3";
    myAudio3.id = "myAudio3";
    document.body.appendChild(myAudio3);
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

function limpiarAlarma() {
  if (myAlarm) {
    myAlarm.pause();
    myAlarm.currentTime = 0;
  }

  document.getElementById("botonEstablecerAlarma").disabled = false;
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

/* Cronometro */
let tiempoTranscurrido = 0;
function cronometroVamos() {
    tiempoTranscurrido++;
    const horas = Math.floor(tiempoTranscurrido / 3600);
    const minutos = Math.floor((tiempoTranscurrido % 3600) / 60);
    const segundos = tiempoTranscurrido % 60;
    const tiempoFormateado =
    `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    document.getElementById('cronometro').textContent = tiempoFormateado;
}