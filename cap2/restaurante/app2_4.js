function calcularPreco() {

  //id's
  var inQuilo = document.getElementById("inQuilo");
  var inConsumo = document.getElementById("inConsumo");
  var outValor = document.getElementById("outValor");
  //obtém conteúdo dos campos de entrada
  var quilo = Number(inQuilo.value);
  var consumo = Number(inConsumo.value);
  //calcular valor pago
  var valor = (quilo / 1000) * consumo;
  //altera o conteúdo das linhas de resposta
  outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener('click', calcularPreco);