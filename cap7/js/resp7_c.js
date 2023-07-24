function calcularVacina() {
  var inValor = document.getElementById("inValor")
  var selConvenio = document.getElementById("selConvenio")
  var outDesconto = document.getElementById("outDesconto")
  var outPagar = document.getElementById("outPagar")

  //obtém os dados e recoloca o nome do campo de valor
  var valor = Number(inValor.value);

  //cria a condição de erro ou falta de informação da função
  if (valor == 0 || isNaN(valor)) {
    alert("Informe o valor corretamente somente usando números.")
    inValor.focus()
    return;
  }
  //criação dos descontos e condições
  var desconto;
  if (rbSim.checked) {
    if (selConvenio.value == "amigo") {
      desconto = calcularDesconto(valor, 20)
    } else {
      desconto = calcularDesconto(valor, 50)
    }
  } else {
    desconto = calcularDesconto(valor, 10)
  }
  outDesconto.textContent = "Desconto R$: " + desconto.toFixed(2);
  outPagar.textContent = "A Pagar R$: " + (valor - desconto).toFixed(2);
}
btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener('click', calcularVacina);

function calcularDesconto(valor, taxa) {
  return valor * (taxa / 100);
}

//condições para 
var rbSim = document.getElementById("rbSim")
rbSim.addEventListener('change', function () {
  var possuiConvenio = document.getElementById("possuiConvenio")
  possuiConvenio.className = "exibeLinha";
});

var rbNao = document.getElementById("rbNao")
rbNao.addEventListener('change', function () {
  var possuiConvenio = document.getElementById("possuiConvenio")
  possuiConvenio.className = "oculta";
});