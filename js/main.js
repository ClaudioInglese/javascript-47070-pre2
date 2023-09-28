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

function obtenerFrutaPorColor(color) {
    const frutasDelColor = frutas.filter(fruta => obtenerColor(fruta) === color);
    
    if (frutasDelColor.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * frutasDelColor.length);
        return frutasDelColor[indiceAleatorio];
    } else {
        return "No hay frutas de ese color.";
    }
}

let colorSeleccionado = "rojo";
setTimeout(function () {    
    const frutaDeColor = obtenerFrutaPorColor(colorSeleccionado);
    console.log(`Fruta de color ${colorSeleccionado}: ${frutaDeColor}`);
}, 0);    

function filtrarFrutasPorColor(color) {
    return frutas.filter(function (fruta) {
        const frutaColor = obtenerColor(fruta);
        return frutaColor === color;
    });
}

function obtenerColor(fruta) {
    switch (fruta) {
        case "manzana":
            return "rojo";
        case "banana":
            return "amarillo";
        case "naranja":
            return "naranja";
        case "uva":
            return "morado";
        case "pera":
            return "verde";           
        default:
            return "desconocido";
    }
}

const iniciarJuego = jugarADivinarFruta(frutas, frutasImagenes);

window.onload = iniciarJuego;
