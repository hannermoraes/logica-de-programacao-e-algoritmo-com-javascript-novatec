function calcularTroco() {

  //criando referencia aos dados
  var inValor = document.getElementById("inValor");
  var outTempo = document.getElementById("outTempo");
  var outTroco = document.getElementById("outTroco");

  //obtém dados de entrada
  var valor = Number(inValor.value);
  var troco30min = (valor - 1).toFixed(2);
  var troco60min = (valor - 1.75).toFixed(2);
  var troco120min = (valor - 3).toFixed(2);

  //condição para falta de informação ou NaN
  if (valor < 1 || isNaN(valor)) {
    alert("Valor minimo de R$ 1.00! Insira um valor válido.");
    inValor.value = "";
    inValor.focus();
    return;
  }

  //condição para calculo e troco
  if (valor >= 1 && valor < 1.75) {
    outTempo.textContent = "30 min"
    outTroco.textContent = "Troco R$: " + troco30min;
  } else if (valor >= 1.75 && valor < 3) {
    outTempo.textContent = "60 min"
    outTroco.textContent = "Troco R$: " + troco60min;
  } else {
    outTempo.textContent = "120 min"
    outTroco.textContent = "Troco R$: " + troco120min;
  }
}

//referência do botão de calcular
var btDeposito = document.getElementById("btDeposito");

//condição de click do botão
btDeposito.addEventListener('click', calcularTroco);