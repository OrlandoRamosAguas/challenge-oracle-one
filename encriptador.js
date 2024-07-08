//Vamos a iniciar con el código uhhhh!
/*let textoAEncriptar = parseInt(document.getElementById('miTexto').value);

function encriptar() {
    let textoAEncriptar = parseInt(document.getElementById('miTexto').value);
    console.log(textoAEncriptar);
}*/

function encriptar() {
    const textoOriginal = document.getElementById("inputTexto").value.toLowerCase();
    let textoEncriptado = textoOriginal
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("resultado").textContent = textoEncriptado;
}

function desencriptar() {
    const textoEncriptado = document.getElementById("inputTexto").value.toLowerCase();
    let textoOriginal = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("resultado").textContent = textoOriginal;
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

