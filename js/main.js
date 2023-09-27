const frutas = ["manzana", "banana", "naranja", "uva", "pera"];

const frutasImagenes = {
    manzana: "./img/manzana.jpg",
    banana: "./img/banana.jpg",
    naranja: "./img/naranja.jpg",
    uva: "./img/uva.jpg",
    pera: "./img/pera.jpg",
};


function jugarADivinarFruta(frutas, frutasImagenes) {
    alert("Bienvenido al juego de adivinanza de frutas. Debes adivinar la fruta secreta.");
    console.log("Mensaje de Bienvenida");
    return function () {
        let adivinado = false;

        while (!adivinado) {
            const frutaAdivinar = obtenerFrutaAleatoria(frutas);
            const intento = prompt("Adivina la fruta:").toLowerCase();

            if (intento === frutaAdivinar) {
                mostrarImagen(frutaAdivinar);                
                adivinado = true;
                setTimeout(function () {
                    alert("¡Felicidades! Adivinaste la fruta! ");
                    console.log("¡Adivinaste! La fruta es " + frutaAdivinar);
                }, 50);                
            } else {
                alert("Esa no es la fruta correcta. Intenta nuevamente.");
            }
        }
    };
}

function obtenerFrutaAleatoria(frutas) {
    const indice = Math.floor(Math.random() * frutas.length);
    return frutas[indice];
}

function mostrarImagen(fruta) {
    const imagen = document.querySelector("img");
    imagen.src = frutasImagenes[fruta];    
}

const iniciarJuego = jugarADivinarFruta(frutas, frutasImagenes);

window.onload = iniciarJuego;
