function calcularValor() {
  //ids
  var inMinutos = document.getElementById("inMinutos");
  var inDuracao = document.getElementById("inDuracao");
  var outValorTotal = document.getElementById("outValorTotal");

  //obtém os dados do campo
  var minutos = Number(inMinutos.value);
  var duracao = Number(inDuracao.value);
  var tempoTotal = Math.floor(duracao / 15);

  var precoTotal = (minutos * tempoTotal).toFixed(2);

  //obtém a saída dos dados
  outValorTotal.textContent = "Valor a Pagar: R$ " + precoTotal + " reais";
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener('click', calcularValor);
