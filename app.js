// let parrafo = document.querySelector('.container__texto > p');

// const btnIntentar = document.querySelector();
// const btnNuevoJuego = document.querySelector();

// titulo.textContent = 'Juego del número secreto text content';
// parrafo.textContent = 'Ingresa un número del 1 al 10';

let numeroSecreto = 0;
let listaNumerosSorteados = [];
let intentos = 0;
let numeroMaximo = 2

let btnNuevoJuego = document.getElementById('reiniciar');


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTxt('.container__texto > p', `Felicitaciones adivinaste el numero secreto en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}`);
        //habilitar btn nuevo juego
        btnNuevoJuego.removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTxt('.container__texto > p', 'El numero secreto es menor');
        } else {
            asignarTxt('.container__texto > p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarInput();
    }
}

function limpiarInput() {
    document.querySelector('#valorUsuario').value = '';
}

function asignarTxt(element, txt) {

    // let titulo = document.querySelector(element);
    // titulo.textContent = txt;

    document.querySelector(element).textContent = txt;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTxt('.container__texto > p', `ya se sortearon todos los numeros del 1 al ${numeroMaximo}`);
    } else {
        // Si num esta
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTxt('.container__texto > h1', 'Juego número secreto');
    asignarTxt('.container__texto > p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar input
    limpiarInput();
    //mensajes iniciales del juego
    condicionesIniciales();
    //numero aleatorio
    // reiniciar intentos
    // deshabilitar btn
    btnNuevoJuego.setAttribute('disabled', true);
}

condicionesIniciales();