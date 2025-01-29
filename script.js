
function calcularImc() {


  const input_peso = parseFloat(document.getElementById("peso").value);

  const input_altura = parseFloat(document.getElementById("altura").value);

  const div_resultado = document.getElementById("div-resultado");

  const resultadoImc = input_peso / (input_altura ** 2);


  let classificacao = null;

  if (resultadoImc <= 18.5) {
    classificacao = "Abaixo do peso"
  } else if (resultadoImc >= 18.6 && resultadoImc <= 24.9) {
    classificacao = "Peso normal"
  } else if (resultadoImc >= 25 && resultadoImc <= 29.9) {
    classificacao = "Você está sobrepeso"
  } else if (resultadoImc >= 30 && resultadoImc <= 34.9) {
    classificacao = "Você está com grau de obesidade 1"
  } else if (resultadoImc >= 35 && resultadoImc <= 39.9) {
    classificacao = "Você está com grau de obesidade 2"
  } else {
    classificacao = "Você está com grau de obesidade 3"
  }

  div_resultado.innerHTML = `
   <h3>Seu IMC é: ${resultadoImc.toFixed(2)}</h3>

    <h3>Classificação: ${classificacao}</h3>
   `
}
