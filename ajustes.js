function actualizaReloj(){
    var momentoActual = new Date()
    var hora = momentoActual.getHours()
    var minuto = momentoActual.getMinutes()
    var segundo = momentoActual.getSeconds()

    if (hora < 10) hora = "0" + hora
    if (minuto < 10) minuto = "0" + minuto
    if (segundo < 10) segundo = "0" + segundo
   
    horaImprimible = hora + ":" + minuto + ":" + segundo
    
document.getElementById("clock").innerHTML = horaImprimible
var horaImprimible = setTimeout(function(){ actualizaReloj() }, 1000)
}

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
}

/* Dark/Light */
function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme');
}