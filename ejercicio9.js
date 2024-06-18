var notas = [];

for (var i = 1; i <= 5; i++) {
    var nota = parseInt(prompt(`Ingrese la nota ${i}:`));
    while (isNaN(nota) || nota < 0 || nota >= 11) {
        nota = parseInt(prompt(`La nota ingresada no es válida. Por favor, ingrese una nota natural menor que 11 para la nota ${i}:`));
    }
    notas.push(nota);
}

var suma = notas.reduce(function(a, b) {
    return a + b;
}, 0);
var promedio = suma / notas.length;

var estado;
if (promedio < 5) {
    estado = "Reprobado";
} else if (promedio >= 6 && promedio <= 8) {
    estado = "Aprobado";
} else {
    estado = "Sobresaliente";
}

console.log(`El promedio de las notas es ${promedio.toFixed(2)}.`);
console.log(`El alumno está ${estado}.`);
