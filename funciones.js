
const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];


let textinput = document.getElementById("input_text_encrypt");
let textoutput = document.getElementById("output_text_decrypt");
let botonCopiar = document.getElementById("button_copiar");
let contenedorPadre = document.querySelector(".result");
const botonLimpiar = document.getElementById('button_limpiar'); 

const mensaje = document.querySelector(".output_text_decrypt");



function encriptar() {
    let stringEncriptada = textinput.value;
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    actualizarPagina();
    textoutput.innerHTML = textinput.value;
    textoutput.value = stringEncriptada;

}

function desencriptar() {
    let stringDesencriptada = textinput.value;
    console.log('valor : ' + stringDesencriptada);
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            console.log('salida  : ' + stringDesencriptada);

        }

    }
    actualizarPagina();
    textoutput.innerHTML = textinput.value;
    textoutput.value = stringDesencriptada;

}
function actualizarPagina() {
    if (textinput.value !== "") {
        contenedorPadre.classList.remove("no_texto")
    }
    textinput.focus();
}
function limpiar(e) {
    const textoInput = document.getElementById('input_text_encrypt');
    const res = document.getElementById('output_text_decrypt');
    textoInput.value = "";
    res.value = "";
    contenedorPadre.classList.add("no_texto");


}


function copiarAlPortapapeles() {
    var textarea = document.getElementById("output_text_decrypt");

    navigator.clipboard.writeText(textarea.value)
        .then(function () {
            alert('Texto copiado al portapapeles');
        })
        .catch(function (err) {
            console.error('Error al intentar copiar el texto: ', err);
        });
}



function validadorInputs(e) {

    if (e.inputType === "deleteContentBackward") {
        return;
    }
    const valor = e.target.value.toLowerCase();
    console.log(valor);
    const regex = /[a-z]/;
    if (!regex.test(valor)) {
        alert("Ingrese solo texto en minúsculas y sin caracteres especiales.");
        e.target.value = "";
    }

}

