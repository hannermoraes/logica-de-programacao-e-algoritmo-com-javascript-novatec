function promocaoFarmacia() {
  // IDs
  var inMedicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById("inPreco");
  var outPromocao = document.getElementById("outPromocao");
  var outDesconto = document.getElementById("outDesconto");

  // Obtém o conteúdo das entradas
  var medicamento = inMedicamento.value;
  var preco = Number(Math.floor(inPreco.value) * 2);

  // Saída de dados
  outPromocao.textContent = "Promoção de " + medicamento;
  outDesconto.textContent = "Leve 2 por R$ " + preco;
}

// IDs
var btVerPromocao = document.getElementById("btVerPromocao");

// Evento de clique
btVerPromocao.addEventListener('click', promocaoFarmacia);
