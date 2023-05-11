const array_alumnos=
            [
                'Dani' ,'Pol','Nacho','Leo','Sofía', 'Mateo', 'Valentina', 'Daniel', 'Isabella', 'Santiago', 'Victoria', 'Carlos', 'Catalina', 'Juan', 'Mariana', 'Alejandro', 'Ana', 'Andrés', 'Camila', 'Esteban', 'Laura', 'Felipe', 'Natalia'
            ];

            let sonido = document.getElementById("audio");
            let canvas=document.getElementById("idcanvas");
            let context=canvas.getContext("2d");
            let center=canvas.width/2;

            context.beginPath();
            context.moveTo(center,center);
            context.arc(center,center,center,0, 2*Math.PI);
            context.lineTo(center,center);
            context.fillStyle ='#33333333';
            context.fill();

            context.beginPath();
            context.moveTo(center,center);
            context.arc(center,center,center-10,0, 2*Math.PI);
            context.lineTo(center,center);
            context.fillStyle ='black';
            context.fill();

            for (var i = 0; i < array_alumnos.length; i++) {
                context.beginPath();
                context.moveTo(center,center);
                context.arc(center,center,center-20,i*2*Math.PI/array_alumnos.length, (i+1)*2*Math.PI/array_alumnos.length);
                context.lineTo(center,center);
                context.fillStyle =random_color();
                context.fill();

                context.save();
                context.translate(center, center);
                context.rotate(3*2*Math.PI/(5*array_alumnos.length)+i*2*Math.PI/array_alumnos.length);
                context.translate(-center, -center);
                context.font = "13px Comic Sans MS";
                context.textAlign = "right";
                context.fillStyle = "white";
                context.fillText(array_alumnos[i], canvas.width-30, center);
                context.restore();
            }

            let pos_ini = 0;
            let clic = 0;
            let movement;
            let crono;

            function Girar() {
                  if (clic == 0) {
                sonido.play();
                let canvas = document.getElementById("idcanvas");
                   movement = setInterval(function() {
                      pos_ini += 10;
                      canvas.style.transform = 'rotate(' + pos_ini + 'deg)';
                }, 10);
                crono = setTimeout(function() {
                      clearInterval(movement);
                      clic = 0;
                      document.getElementById("idestado").innerHTML = "Girar";
                      sonido.pause();
                }, 5000);
                   clic = 1;
                document.getElementById("idestado").innerHTML = "Detener";
              } else {
                clearTimeout(crono);
                clearInterval(movement);
                clic = 0;
                document.getElementById("idestado").innerHTML = "Girar";
                sonido.pause();
              }
        }
            function random_color(){
                let ar_digit=['2','3','4','5','6','7','8','9'];
                let color='';
                let i=0;
                while(i<6){
                    let pos=Math.round(Math.random()*(ar_digit.length-1));
                    color=color+''+ar_digit[pos];
                    i++;
                }
                return '#'+color;
            }
