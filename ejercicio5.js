// Se solicita al usuario que introduzca su nombre y guarda el valor en la variable nombre
let nombre = window.prompt("Introduce tu nombre", "...");

// Se solicita al usuario que introduzca su apellido y guarda el valor en la variable apellido
let apellido = window.prompt("Introduce tu apellido", "...");

// Se concatena el nombre y el apellido en un solo string y asignarlo a la variable resultadoFinal
let resultadoFinal = `Concatenado tu nombre y apellido es: ${nombre} ${apellido}`;

// Se escribie el resultado en el documento HTML
document.write(resultadoFinal);
