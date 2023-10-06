const frutas = ["manzana", "banana", "naranja", "uva", "pera"];

const frutasImagenes = {
    manzana: "./img/manzana.jpg",
    banana: "./img/banana.jpg",
    naranja: "./img/naranja.jpg",
    uva: "./img/uva.jpg",
    pera: "./img/pera.jpg",    
};

function jugar(frutas, frutasImagenes) {
    alert("Bienvenido al juego de adivinanza de frutas. Debes adivinar la fruta secreta.");
    console.log("Mensaje de Bienvenida");
    return function () {
        let adivinado = false;

        while (!adivinado) {
            const frutaAdivinar = frutaAleatoria(frutas);
            const intento = prompt("Adivina la fruta:").toLowerCase();

            if (existeFruta(intento) == true) {
                if (intento === frutaAdivinar) {
                    const imagenURL = obtenerURLImagen(frutaAdivinar);
                    adivinado = true;
                    setTimeout(function () {
                        alert("¡Felicidades! Adivinaste la fruta! ");
                        console.log("¡Adivinaste! La fruta es " + frutaAdivinar);
                        console.log("URL de la imagen: " + imagenURL);
                    }, 50);
                } else {
                    alert("Esa no es la fruta correcta. Intenta nuevamente.");
                }
            } else {
                alert("Esa no es una fruta válida. Intenta nuevamente.");
            }
        }
    };
}


function existeFruta(intento){
    for (let i = 0; i < frutas.length; i++) {
       if (frutas[i] === intento)
            return true
    }

    return false
}


function frutaAleatoria(frutas) {
    const indice = Math.floor(Math.random() * frutas.length);
    return frutas[indice];
}


function obtenerURLImagen(fruta) {
    return frutasImagenes[fruta];
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

const iniciarJuego = jugar(frutas, frutasImagenes);

setTimeout(function () {
    const frutaAdivinada = frutaAleatoria(frutas);
    const imagenURL = obtenerURLImagen(frutaAdivinada);       
    iniciarJuego();
}, 0);


