let tiempoTranscurrido = 0;
let intervalo;

function actualizarCronometro() {
  tiempoTranscurrido++;
  const horas = Math.floor(tiempoTranscurrido / 3600);
  const minutos = Math.floor((tiempoTranscurrido % 3600) / 60);
  const segundos = tiempoTranscurrido % 60;
  const tiempoFormateado = 
    `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  document.getElementById('tiempo').textContent = tiempoFormateado;
}

document.getElementById('boton-iniciar').addEventListener('click', function() {
  intervalo = setInterval(actualizarCronometro, 1000);
});

document.getElementById('boton-parar').addEventListener('click', function() {
  clearInterval(intervalo);
});

document.getElementById('boton-reiniciar').addEventListener('click', function() {
  clearInterval(intervalo);
  tiempoTranscurrido = 0;
  document.getElementById('tiempo').textContent = "00:00:00";
});
