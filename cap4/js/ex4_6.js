function verificarPrimo() {
  //cria referência aos elementos da página
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  //obtém o número iformado
  var num = Number(inNumero.value);

  //verifica se o campo foi realmente preechido corretamente
  if (num == 0 || isNaN(num)) {
    alert("Número Inválido")
    num.focus();
    return;
  }
  var numDivisores = 0;

  /// declara e inicializa a variável tipo flag
  var temDivisor = 0;
  // percorre os possíveis divisores do num
  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      temDivisor = 1; // muda o flag
      break; // sai da repetição
    }
  }
  // se num > 1 e não possui divisor
  if (num > 1 && !temDivisor) {
    outResposta.textContent = num + " É primo";
  } else {
    outResposta.textContent = num + " Não é primo";
  }
}

//Referência elemento e ápos associa function ao evento click
var btVerificarPrimo = document.getElementById("btVerificarPrimo");

btVerificarPrimo.addEventListener('click', verificarPrimo);