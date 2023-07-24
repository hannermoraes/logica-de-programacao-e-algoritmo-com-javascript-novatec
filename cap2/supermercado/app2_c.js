function calcularPromocao() {
  //obténdo ids
  var inProduto = document.getElementById("inProduto");
  var inPreco = document.getElementById("inPreco");
  var outPromocao = document.getElementById("outPromocao");
  var outValorDesconto = document.getElementById("outValorDesconto");
  //obtém os dados
  var produto = inProduto.value;
  var preco = Number(inPreco.value);
  //calculo dos dados
  var precoDaPromocao = ((preco * 2) + (preco * 0.5)).toFixed(2);
  var precoDesconto = (preco * 0.5).toFixed(2);
  //obtém dados de saida
  outPromocao.textContent = produto + " Promoção: Leve 3 por: R$ " + precoDaPromocao;
  outValorDesconto.textContent = "O 3º produto sai por: R$ " + precoDesconto;
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener('click', calcularPromocao);