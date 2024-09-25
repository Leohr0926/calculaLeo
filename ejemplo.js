"use strict";
function suma() {
    const primerNumeroInput = document.getElementById('primerNumero');
    const segundoNumeroInput = document.getElementById('segundoNumero');
    const resultadoOutput = document.getElementById('Resultado');
    if (!primerNumeroInput || !segundoNumeroInput) {
        console.error('Uno o ambos elementos no se encontraron en el DOM');
        return;
    }
    const primerNumero = parseInt(primerNumeroInput.value);
    const segundoNumero = parseInt(segundoNumeroInput.value);
    const suma = primerNumero + segundoNumero;
    resultadoOutput.value = `la suma es: ${suma}`;
}
function resta() {
    const numero1Entrada = document.getElementById('primerNumero');
    const numero2Entrada = document.getElementById('segundoNumero');
    const resultadoSalida = document.getElementById('Resultado');
    const entradaPrimera = parseInt(numero1Entrada.value);
    const entradaSegunda = parseInt(numero2Entrada.value);
    const resta = entradaPrimera - entradaSegunda;
    resultadoSalida.value = `la resta es: ${resta}`;
}


