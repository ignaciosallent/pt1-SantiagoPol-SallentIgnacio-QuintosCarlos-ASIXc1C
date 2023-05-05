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
var horaActual = setTimeout(function(){ actualizaReloj() }, 1000)
}

