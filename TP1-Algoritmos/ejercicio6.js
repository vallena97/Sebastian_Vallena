if (!window.ejercicio6) {
    window.ejercicio6 = true;

    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    let numeroMes = parseInt(prompt("Ingresa un número del 1 al 12 para obtener el nombre del mes:"));

    if (numeroMes >= 1 && numeroMes <= 12) {
        let nombreMes = meses[numeroMes - 1];
        document.write(`El mes correspondiente al número ${numeroMes} es ${nombreMes}. <br>`);
    } else {
        document.write("Número de mes inválido. Debe ser un número del 1 al 12. <br>");
    }

    const a = 3; 
    let b = 7;
    let resultado = a * b;
    document.write(`Variable a contiene ${a} <br> `);
    document.write(`Variable b contiene ${b} <br> `);
    document.write(`El producto de a por b es ${resultado} <br> `);
    document.write("Los puntos de interrupción son fundamentales para programar");

    let dato, resultadoConcatenado;
    dato = window.prompt("Introduce tu nombre", "...");
    let apellido = window.prompt("Introduce tu apellido", "...");
    resultadoConcatenado = `Concatenando tu nombre y apellido es: ${dato} ${apellido} `;
    document.write(resultadoConcatenado);

    let num1 = 3;
    let num2 = 7;
    if (num1 <= num2) {
        console.log("num1 no es mayor que num2");
    }
    if (num2 > 0) {
        console.log("num2 es positivo");
    }
    if (num1 < 0 || num1 !== 0) {
        console.log("num1 es negativo o distinto de cero");
    }
    if (++num1 <= num2) {
        console.log("Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2");
    }
}
