const input_peso = parseInt(document.getElementById("peso").value);

const input_altura = parseInt(document.getElementById("altura").value);

const div_resultado = document.getElementById("div-resultado");
let resultadoImc = input_peso / (input_altura ** 2);

function calcularImc() {
    div_resultado.innerHTML = `

   <h3>Seu IMC é: ${resultadoImc}</h3>

     `
}