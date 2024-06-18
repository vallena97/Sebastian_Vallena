var valores = [true, false, 2, "hola", "mundo", 3, "char"];

var elementosTexto = valores.filter(function(valor) {
    return typeof valor === 'string';
});

var elementoMayor = elementosTexto.reduce(function(mayor, elemento) {
    return mayor.length > elemento.length ? mayor : elemento;
}, "");

var elementosOrdenados = elementosTexto.sort(function(a, b) {
    return a.length - b.length;
});
console.log("Elementos de menor a mayor cantidad de letras:", elementosOrdenados);

var numeros = valores.filter(function(valor) {
    return typeof valor === 'number';
});

if (numeros.length >= 2) {
    var suma = numeros.reduce(function(a, b) {
        return a + b;
    });
    var resta = numeros.reduce(function(a, b) {
        return a - b;
    });
    var multiplicacion = numeros.reduce(function(a, b) {
        return a * b;
    });
    var division = numeros.reduce(function(a, b) {
        return a / b;
    });
    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);
} else {
    console.log("No hay suficientes elementos numéricos para realizar las operaciones.");
}
