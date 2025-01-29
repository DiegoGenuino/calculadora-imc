
function calcularImc() {


  const input_peso = parseFloat(document.getElementById("peso").value);

  const input_altura = parseFloat(document.getElementById("altura").value);

  const div_resultado = document.getElementById("div-resultado");

  const resultadoImc = input_peso / (input_altura ** 2);

  div_resultado.innerHTML = `
   <h3>Seu IMC é: ${resultadoImc.toFixed(2)}</h3>
     `
}
