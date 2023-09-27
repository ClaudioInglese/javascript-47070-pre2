// Array de frutas para adivinar
const frutas = ["manzana", "banana", "naranja", "uva", "pera"];

// Objeto que contiene las imágenes de las frutas
const frutasImagenes = {
    manzana: "./img/manzana.jpg",
    banana: "./img/banana.jpg",
    naranja: "./img/naranja.jpg",
    uva: "./img/uva.jpg",
    pera: "./img/pera.jpg",
};

// Función de orden superior para iniciar el juego
function jugarADivinarFruta(frutas, frutasImagenes) {
    alert("Bienvenido al juego de adivinanza de frutas. Debes adivinar la fruta secreta.");
    return function () {
        let adivinado = false;

        while (!adivinado) {
            const frutaAdivinar = obtenerFrutaAleatoria(frutas);
            const intento = prompt("Adivina la fruta:").toLowerCase();

            if (intento === frutaAdivinar) {
                mostrarImagen(frutaAdivinar);                
                adivinado = true;
                setTimeout(function () {
                    alert("¡Felicidades! Adivinaste la fruta!")
                }, 50);                
            } else {
                alert("Esa no es la fruta correcta. Intenta nuevamente.");
            }
        }
    };
}

// Función para obtener una fruta aleatoria del array de frutas
function obtenerFrutaAleatoria(frutas) {
    const indice = Math.floor(Math.random() * frutas.length);
    return frutas[indice];
}

// Función para mostrar la imagen de la fruta adivinada
function mostrarImagen(fruta) {
    const imagen = document.querySelector("img");
    imagen.src = frutasImagenes[fruta];    
}

// Llamar a la función de orden superior para iniciar el juego
const iniciarJuego = jugarADivinarFruta(frutas, frutasImagenes);

// Llamar a la función iniciarJuego al cargar la página
window.onload = iniciarJuego;
