function calcularNumeroPerfeito() {
  //referência os itens a serem usados na função
  var inNumero = document.getElementById("inNumero");
  var outDivisores = document.getElementById("outDivisores");
  var outResposta = document.getElementById("outResposta");

  //obtém dados dos campos referênciados
  var numero = Number(inNumero.value);

  //condição que insere o número escolhido para verificação na resposta
  var divisor = "Divisores do " + numero + ":";
  var soma = 0;

  //alerta caso o dado inserido não seja um número
  if (numero == "" || numero == 0 || isNaN(numero)) {
    alert("Insira somente números para que seja verificado se ele é perfeito ou não.")
    inNumero.value = "";
    inNumero.focus();
  }

  // estrutura de repetição que incrementa informação
  for (var i = 1; i < numero; i++) {
    if (numero % i === 0) {
      if (divisor === "Divisores do " + numero + ":") {
        divisor = divisor + " " + i;
      } else {
        divisor = divisor + ", " + i;
      }
      soma = soma + i;
    }
  }

  soma = soma;
  divisor = divisor + " (Soma: " + soma + " )";
  outDivisores.textContent = divisor;

  //condição das respostas finais sobre ser ou não um número perfeito
  if (numero == soma) {
    outResposta.textContent = " Logo, é um número perfeito."
  } else {
    outResposta.textContent = " Logo, não é um número perfeito."
  }
}
// referência o botão que realiza a function de verificar
var btVerificar = document.getElementById("btVerificar");

//evento click do botão referênciado 
btVerificar.addEventListener('click', calcularNumeroPerfeito);