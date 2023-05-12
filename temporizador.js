//creo cuatro variables, para el audio, el boton de start y reset, y la seleccion
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var select = document.getElementById('sonidos-contador');
var audio;

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

//guardamos una referencia a la variable startTimer
var startTimer = null;

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
    console.log('Boton Start, Variable inicializada', start.value);
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //parar el contador tras pulsar el botón "reset
    stopInterval()
    console.log('Boton Reset, Variable Reiniciada', reset.value);
})

select.addEventListener('change', function(){
    //conseguimos el audio según la opción del select escogida
    var audioFile = 'musicas/' + select.value + '.mp3';
    //log para ver si se ejecuta el cambio de seleccion
    console.log('Option changed:', select.value);
    //Verificacion de si la ruta de los archivos de audio se esta generando correctamete
    console.log('Audio file:', audioFile);
    //creamos un objeto Audio con el archivo escogido
    audio = new Audio(audioFile);
})

//Creo un boton para reproducir el audio que se activará automaticamente al llegar a 0 el contador p qq no está reproduciendo el audio
var playButton = document.createElement('button');
playButton.style.display = 'none';
document.body.appendChild(playButton);

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
        //reproducir el archivo de audio escogido cuando el temporizador llegue a 0
        if(audio){
            playButton.click();
        }
        //parar el timer cuando hayamos llegado a 0
        stopInterval();
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

playButton.addEventListener('click', function(){
    if(audio){
        audio.play();
    }
});

//parar la funcion despues de pulsar el boton reset
// asi podemos poner un nuevo tiempo despues de pulsar reset
function stopInterval() {
    clearInterval(startTimer);
}