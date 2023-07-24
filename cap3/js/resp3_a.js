function verificarParOuImpar() {

  //cria referência aos ids
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  //obtém e converte os dados do campo inNumero
  var numero = Number(inNumero.value);

  //se informado um dado errado ou NaN
  if (numero === 0 || isNaN(numero)) {
    alert("Insira um valor númerico para que seja calculado corretamente.")
    inNumero.focus();
    return;
  }

  //calculo e condição para informar se o número é par ou impar
  if (numero % 2 === 0) {
    outResposta.textContent = "Este número é Par."
  } else {
    outResposta.textContent = "Este número é Ímpar."
  }
}
// cria referência para o botão
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarParOuImpar);