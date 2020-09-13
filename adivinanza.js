const respuestas = ['Gimnasio', 'GIMNASIO', 'gimnasio', 'gym', 'Gym', 'GYM'];

const alertExito = document.getElementById('alertExito');
const alertFalla = document.getElementById('alertFalla');
const alertNoMasIntentos = document.getElementById('alertNoMasIntentos');
const enviarBtn = document.getElementById('enviarBtn');
const respuesta = document.getElementById('respuesta');
const respuestaFieldset = document.getElementById('respuestaFieldSet');
const intentos = document.getElementById('intentos');
const cantidadDeIntentos = document.getElementById('cantidadDeIntentos');
const reintentarBtn = document.getElementById('reintentarBtn');
const pista1 = document.getElementById('pista1');
const pista2 = document.getElementById('pista2');

alertExito.style.display = 'none';
alertFalla.style.display = 'none';
alertNoMasIntentos.style.display = 'none';
intentos.style.display = 'none';
reintentarBtn.style.display = 'none';
pista1.style.display = 'none';
pista2.style.display = 'none';

reiniciar();

enviarBtn.addEventListener('click', function() {
    if (respuestas.includes(respuesta.value))   {
        alertExito.style.display = 'block';
        alertFalla.style.display = 'none';
        enviarBtn.setAttribute('disabled', 'true');
        respuestaFieldset.setAttribute('disabled', 'true');
        intentos.style.display = 'none';
        pista1.style.display = 'none';
        pista2.style.display = 'none';
    } else {
        switch (Number(cantidadDeIntentos.innerHTML)) {
            case 1:
                alertExito.style.display = 'none';
                alertFalla.style.display = 'none';
                alertNoMasIntentos.style.display = 'block';
                reintentarBtn.style.display = 'block';
                enviarBtn.style.display = 'none';
                pista1.style.display = 'none';
                pista2.style.display = 'none';
                intentos.style.display = 'none';
                break;
            case 2:
                respuestaIncorrecta();
                pista2.style.display = 'block';
                break;
            case 3:
                respuestaIncorrecta();
                pista1.style.display = 'block';
                break;
            default: 
                respuestaIncorrecta();
                break;
        }
    }
});

reintentarBtn.addEventListener('click', function() {
    reiniciar();
});

function reiniciar() {
    reintentarBtn.style.display = 'none';
    enviarBtn.style.display = 'block';
    alertNoMasIntentos.style.display = 'none';
    cantidadDeIntentos.innerHTML = 4;
}

function respuestaIncorrecta() {
    alertExito.style.display = 'none';
    alertFalla.style.display = 'block';
    intentos.style.display = 'block';
    cantidadDeIntentos.innerHTML = Number(cantidadDeIntentos.innerHTML) - 1;
}

document.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        if (enviarBtn.style.display !== 'none') {
            enviarBtn.click();
        } else {
            reintentarBtn.click();
        }
    }
})