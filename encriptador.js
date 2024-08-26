//Vamos a iniciar con el código uhhhh!
/*let textoAEncriptar = parseInt(document.getElementById('miTexto').value);

function encriptar() {
    let textoAEncriptar = parseInt(document.getElementById('miTexto').value);
    console.log(textoAEncriptar);
}*/

// Función de validación
function validarTexto(inputText) {
    // Expresión regular para verificar letras minúsculas sin acentos ni caracteres especiales
    const regex = /^[a-z]+$/;
    if (regex.test(inputText)) {
        console.log("El texto es válido.");
        return true;
    } else {
        console.log("El texto no cumple con los requisitos.");
        return false;
    }
}

// Ejemplo de uso:
const miTexto = "holaMundo"; // Cambia esto por el texto que quieras validar
validarTexto(miTexto);


function encriptar() {
    const textoOriginal = document.getElementById("inputTexto").value.toLowerCase();
    let textoEncriptado = textoOriginal
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("resultado").value = textoEncriptado;
}

function desencriptar() {
    const textoEncriptado = document.getElementById("inputTexto").value.toLowerCase();
    let textoOriginal = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("resultado").value = textoOriginal;
}

function copiarResultado() {
    const resultado = document.getElementById("resultado");
    const range = document.createRange();
    range.selectNode(resultado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

