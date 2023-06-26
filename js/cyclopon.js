////verificar que funcione
//alert("Hola mundo js")

let ataqueJugador //varaible global de ataque
let ataqueEnemigo //variable de ataque contricante
let vidasJugador = 3; //variable global vidal del jugador
let vidasEnemigo = 3; //variable global vidas del enemigo

//funcion para ejecutar juego
function iniciarJuego() {
    //ocultar seccion
    let sectionAtaque = document.getElementById('seleccionar-ataque');//crear funcion de la seccion de html en js
    sectionAtaque.style.display = 'none'; //propiedad para ocultar de la pantalla
    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'none';

   //Reconocer la seleccion de un personaje
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

    //escuchar evnetos de ataques
    let botonSangre = document.getElementById('boton-sangre');
    botonSangre.addEventListener('click', ataqueSangre);
    let botonMoco = document.getElementById('boton-moco');
    botonMoco.addEventListener('click', ataqueMoco);
    let botonFlujo = document.getElementById('boton-flujo');
    botonFlujo.addEventListener('click', ataqueFlujo);

    //escuchar evento de reiniciar
    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
    
}

//Funcion para saber que personaje selecciono
function seleccionarPersonajeJugador(){
    //ocultar/mostrar secciones
    
    //crear variables de radio
    let inputHechicera = document.getElementById('hechicera'); //acceder al elemento
    let inputDoncella = document.getElementById('doncella');
    let inputMadre = document.getElementById('madre');

    let jugar = 1;

    let spanPersonajeJugador = document.getElementById('personaje-jugador'); //acceder al elemento span de html

    if (inputHechicera.checked) { //verificar que fue seleccionado true
        //alert('Seleccionaste a Hechicera');
        spanPersonajeJugador.innerHTML = 'Hechicera'; //personalizar texto segun el personaje 
    }
    else if (inputDoncella.checked) {
        //alert('Seleccionaste a Doncella');
        spanPersonajeJugador.innerHTML = 'Doncella';
    }
    else if (inputMadre.checked) {
        //alert('Seleccionaste a Madre');
        spanPersonajeJugador.innerHTML = 'Madre';
    }
    else {
        alert('Selecciona un arquetipo')
        jugar = 0;
        //reiniciarJuego();
    }

    if(jugar == 1) { //verificar que selecciono personaje
        seleccionarPersonajeEnemigo(); //mascota del enemigo llamar funcion
        //ocultar seccion personaje
        let sectionPersonaje = document.getElementById('seleccionar-personaje');
        sectionPersonaje.style.display = 'none';
        //mostrar seccion ataque
        let sectionAtaque = document.getElementById('seleccionar-ataque');
        sectionAtaque.style.display = 'flex'; //estilo para css, antes block, por flex

    }

}
function seleccionarPersonajeEnemigo () {
 
    let personajeAleatorio = aleatorio(1,3); //numero aleatorio
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    //conocer al personaje enemigo
    if(personajeAleatorio == 1) {
        //Hechicera
        spanPersonajeEnemigo.innerHTML = 'Hechicera';
    } else if (personajeAleatorio == 2) {
        // Doncella
        spanPersonajeEnemigo.innerHTML = 'Doncella';
    } else {
        //Madre
        spanPersonajeEnemigo.innerHTML = 'Madre';
    }
}

function aleatorio (min, max) { //funcion aleatoria reciclada

    return Math.floor(Math.random()*(max-min+1)+min);
}

//Funciones de ataque
function ataqueSangre() {
    ataqueJugador = 'Menstruacion';
    //alert(ataqueJugador);
    ataqueAleatorio() //funcion para seleccionar ataque enemigo
}
function ataqueMoco() {
    ataqueJugador = 'Moco';
    //alert(ataqueJugador);
    ataqueAleatorio()
}
function ataqueFlujo() {
    ataqueJugador = 'Flujo';
    //alert(ataqueJugador);
    ataqueAleatorio()
}

//Funcion de ataque aleatorio
function ataqueAleatorio() {
    let aleatorioEnemigo = aleatorio(1,3); //numero para el ataque

    if(aleatorioEnemigo == 1) {
        ataqueEnemigo = 'Menstruacion';
    } else if(aleatorioEnemigo == 2) {
        ataqueEnemigo = 'Moco';
    } else {
        ataqueEnemigo = 'Flujo';
    }

    ////MEnsaje despues de tener los dos ataques
    //crearMensajes();
    //Llamar al combate para conocer el ganador
    combate();
}

//logica para conocer al vencedor
function combate() {
    //vidas - sleccionar span
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    if(ataqueJugador == ataqueEnemigo) {
        crearMensajes('EMPATE 🤨')
    } else if(ataqueJugador == 'Moco' && ataqueEnemigo == 'Flujo') {
        crearMensajes('GANASTE 🤩')
        //Cambiar la vidas del enemigo
        vidasEnemigo-- //restar vida
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if(ataqueJugador == 'Menstruacion' && ataqueEnemigo == 'Moco') {
        crearMensajes('GANASTE 🤩')
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if(ataqueJugador == 'Flujo' && ataqueEnemigo == 'Menstruacion') {
        crearMensajes('GANASTE 🤩')
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensajes('PERDISTE 😭')
        //Cambiar la vidas
        vidasJugador-- //restar vida
        spanVidasJugador.innerHTML = vidasJugador;
    }

    //Revisar las vidas
    revisarVidas();    
}

//Mensajes de resultados y ataques
function crearMensajes(resultado) {
    //Llamar mensajes
    let sectionMensajes = document.getElementById('resultados'); //Mensaje resultado
    let ataquesDelJugador = document.getElementById('ataques-jugador'); //Mensjae de ataque jugador
    let ataquesDelEnemigo = document.getElementById('ataques-enemigo'); //Mensaje de ataque enemigo

    //Mensaje
    //let notificacion = document.createElement('p');
    let nuevoAtaqueDelJugador = document.createElement('p');
    let nuevoAtaqueDelEnemigo = document.createElement('p');
    
    //Enviar los resultados de las variables a nuestros parrafos
    sectionMensajes.innerHTML = resultado //Enviar el parrafo directamente
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    

    //Enviar parrafo
    //sectionMensajes.appendChild(notificacion);
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        //gana jugador
        crearMensajeFinal("Felicitaciones! GANASTE 🎉");
    }
    else if (vidasJugador == 0) {
        //perdiojugador
        crearMensajeFinal('Lo siento, PERDISTE ⏳')
    }
}

//Mensajes final de juego
function crearMensajeFinal(resultadoFinal) {
    //Llamar mensajes
    let sectionMensajes = document.getElementById('resultados');

    //crear mensaje
    //let parrafo = document.createElement('h3');
    sectionMensajes.innerHTML = resultadoFinal; //Enviar mensaje directamente

    //Enviar parrafo
    //sectionMensajes.appendChild(parrafo);

    //deshabilitar botones
    let botonSangre = document.getElementById('boton-sangre');
    botonSangre.disabled = true; //activar atributo disabled
    let botonMoco = document.getElementById('boton-moco');
    botonMoco.disabled = true;
    let botonFlujo = document.getElementById('boton-flujo');
    botonFlujo.disabled = true;

    //mostrar seccion de reiniciar
    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'block';


}

//funcion reiniciar juego
function reiniciarJuego() {
    //funcio para recargar ubicacion
    location.reload();
}

//cargar html antes de ejecutar js
window.addEventListener('load', iniciarJuego);

