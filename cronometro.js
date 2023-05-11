let Transcurrido = 0;
let intervalo;

function actualizarCronometro() {
  Transcurrido++;
  const horas = Math.floor(Transcurrido / 3600);
  const minutos = Math.floor((Transcurrido % 3600) / 60);
  const segundos = Transcurrido % 60;
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
  Transcurrido = 0;
  document.getElementById('tiempo').textContent = "00:00:00";
});
