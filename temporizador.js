var start = document.getElementById('start');
var reset = document.getElementById('reset');
var select = document.getElementById('sonidos');
var audio;

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

select.addEventListener('change', function(){
    //get the selected audio file based on the selected option
    var audioFile = select.option[select.selectedIndex].value + '.mp3';
    //log para ver si se ejecuta el cambio de seleccion
    console.log('Option changed:', select.value);
    //Verificacion de si la tura de los archivos de audio se esta generando correctamete
    console.log('Audio file:', audioFile);
    //create a new Audio object with the selected file
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
        //play the selected audio file when the timer reaches 0
        if(audio){
            playButton.click();
        }
        //stop the timer after reaching 0
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

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}
