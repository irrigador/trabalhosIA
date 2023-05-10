function somar(valorA, valorB) {
  return valorA + valorB;
}

function calcular() {
  var valorA = parseInt(document.getElementById("valorA").value);
  var valorB = parseInt(document.getElementById("valorB").value);

  var resultado = somar(valorA, valorB);

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
