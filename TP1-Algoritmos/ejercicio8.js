// Obtener el texto introducido por el usuario
var texto = prompt("Introduce un texto:");

// Función para verificar si un carácter es una vocal
function esVocal(caracter) {
    return 'aeiouáéíóú'.includes(caracter.toLowerCase());
}

// Encontrar la posición de la primera vocal en el texto
var posicion = -1;
for (var i = 0; i < texto.length; i++) {
    if (esVocal(texto[i])) {
        posicion = i + 1;
        break;
    }
}

// Mostrar el resultado
if (posicion !== -1) {
    console.log(`La primera vocal en "${texto}" es la letra Nº${posicion}.`);
} else {
    console.log("No se encontraron vocales en el texto introducido.");
}
