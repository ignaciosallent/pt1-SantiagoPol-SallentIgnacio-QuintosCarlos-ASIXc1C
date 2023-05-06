/* Dark/Light */
function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
}

window.addEventListener("load", main);

function main(){
    actualizaReloj();
    horasMenu();
    minMenu();
    segsMenu();
    sonidoMenu();
    formatoAudio();
}

function actualizaReloj(){
    var momentoActual = new Date();
    var hora = momentoActual.getHours();
    var minuto = momentoActual.getMinutes();
    var segundo = momentoActual.getSeconds();
    var horaImprimible = ComprovarZero(hora) + ":" + ComprovarZero(minuto) + ":" + ComprovarZero(segundo);
    document.getElementById("horaImprimible").innerHTML = horaImprimible;
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
        select.options[select.options.lenght] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function minMenu(){
    var select = document.getElementById("alarmaMin");
    var minutos = 59;

    for (i = 0; i <= minutos; i++) {
        select.options[select.options.lenght] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function segsMenu(){
    var select = document.getElementById("alarmaSeg");
    var segundos = 59;

    for (i = 0; i <= segundos; i++) {
        select.options[select.options.lenght] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function sonidoMenu(){
    var select = document.getElementById("Seleccion");

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
    
    for (var i = 0; i < sonidos.lenght; i++) {
        var opcion = document.createElement("opcion");
        opcion.value = sonidos[i].url;
        opcion.text = sonidos[i].name;
        select.appendChild(opcion); 
    }
}

function formatoAudio() {
    var myDiv = document.getElementById("myDiv");
    var myAudio = document.createElement("audio");

    myAudio.src = "https://freespecialeffects.co.uk/soundfx/cars/car_burnout.wav";
    myAudio.id = "myAudio";
    myDiv.appendChild(myAudio);
}

document.getElementById("BotonEstablecer").addEventListener("click", EstablecerAlarma);
document.getElementById("BotonLimpiar").addEventListener("click", limpiarAlarma);
document.getElementById("BotonSelect").addEventListener("change", ObtenerAudio);

function ObtenerAudio(){
    document.getElementById("myAudio").src = document.getElementById("BotonSelect").value;
}

function EstablecerAlarma() {
    var hora2 = document.getElementById("alarmaHrs");
    var minuto2 = document.getElementById("alarmaMin");
    var segundo2 = document.getElementById("alarmaSeg");

    var HoraEscogida = hora2.options[hora2.selectedIndex].value;
    var MinutoEscogido = minuto2.options[minuto2.selectedIndex].value;
    var SegundoEscogido = segundo2.options[segundo2.selectedIndex].value;

    var TiempoAlarma = afegirZero(HoraEscogida) + ":" + afegirZero(MinutoEscogido) + ":" + afegirZero(SegundoEscogido);

    document.getElementById("alarmaHrs").disabled = true;
    document.getElementById("alarmaMin").disabled = true;
    document.getElementById("alarmaSeg").disabled = true;
    document.getElementById("Seleccion").disabled = true;

    setInterval(function ReproducirSonidoAlarma() {
        var momentoActual = new Date();
        var hora = momentoActual.getHours();
        var minuto = momentoActual.getMinutes();
        var segundo = momentoActual.getSeconds();
        var tiempo = afegirZero(hora) + ":" + afegirZero(minuto) + ":" + afegirZero(segundo);

        if (tiempo == TiempoAlarma) {
            myAudio.play();
            myAudio.loop = true;
        } 
    }, 1000);
}

function afegirZero(i) {
    if (i < 10) { i = "0" + i} ;
    return i;
}

function limpiarAlarma() {
    document.getElementById("alarmaHrs").disabled = false;
    document.getElementById("alarmaMin").disabled = false;
    document.getElementById("alarmaSeg").disabled = false;
    document.getElementById("Seleccion").disabled = false;
    document.getElementById("myAudio").disabled = false;
    myAudio.pause();
}

/*
 function EstablecerAlarma() {   
    var alarmaFormato = prompt("Introduce la hora de la alarma (en formato HH:MM:SS)")
    var alarmaHora = alarmaFormato.substring(0,2)
    var alarmaMinuto = alarmaFormato.substring(3,5)
    var alarmaSegundo = alarmaFormato.substring(6,8)
  
    var alarma = new Date()
    alarma.setHours(alarmaHora)
    alarma.setMinutes(alarmaMinuto)
    alarma.setSeconds(alarmaSegundo)    

   var cuentaatras = alarma.getTime() - momentoActual.getTime()

    setTimeout(function() {
        alert("¡TIEMPO!")
    }, cuentaatras)
}

function setTimer() {
	var temporizadorformato = prompt("Introduce el tiempo del temporizador (en segundos):");
	
	var ahora = new Date().getTime();
	var final = ahora + (temporizadorformato * 1000);
	
	setTimeout(function() {
		alert("¡El temporizador ha finalizado!");
	}, time * 1000);
}*/

/* Dark/Light */
function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
}

/* Stopwatch beta 1 */
let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;
const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
function startTimer() {
  timerInterval = setInterval(function() {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
    timer.textContent =
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
      ":" +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds);
  }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
}
function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.textContent = "00:00:00";
}
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);