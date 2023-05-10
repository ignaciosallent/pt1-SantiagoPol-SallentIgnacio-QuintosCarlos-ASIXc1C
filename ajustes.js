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
    var sonidos = document.getElementById("sonidos").value;
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
    var myAudio = document.createElement("audio");

    myAudio.src = "https://freespecialeffects.co.uk/soundfx/cars/car_burnout.wav";
    myAudio.id = "myAudio";
    myDiv.appendChild(myAudio);

    myAudio.src = "https://freespecialeffects.co.uk/soundfx/bells/church_bells_02.wav";
    myAudio.id = "myAudio";
    myDiv.appendChild(myAudio);
}

document.getElementById("botonEstablecerAlarma").addEventListener("click", EstablecerAlarma);
document.getElementById("botonReiniciarAlarma").addEventListener("click", limpiarAlarma);
document.getElementById("Seleccion").addEventListener("change", ObtenerAudio);

function ObtenerAudio(){
    document.getElementById("myAudio").src = document.getElementById("Seleccion").value;
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
    document.getElementById("sonidos").disabled = true;

    setInterval(function ReproducirSonidoAlarma() {
        var momentoActual = new Date();
        var hora = momentoActual.getHours();
        var minuto = momentoActual.getMinutes();
        var segundo = momentoActual.getSeconds();
        var tiempo = afegirZero(hora) + ":" + afegirZero(minuto) + ":" + afegirZero(segundo);

        if (tiempo == TiempoAlarma) {
            myAudio.play();
            document.getElementById("alarmaSeg").disabled = false;
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
    document.getElementById("sonidos").disabled = false;
    document.getElementById("myAudio").disabled = false;
    myAudio.pause();
}

/* Dark/Light */
function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
}


/* Stopwatch beta 1 */
/*
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
*/