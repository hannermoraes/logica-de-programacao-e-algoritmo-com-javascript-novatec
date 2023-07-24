function calcularRaiz() {

  //cria referência aos elementos da página
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  //obtêm o contéudo do campo inNumero
  var numero = Number(inNumero.value);

  //se não preencheu ou NaN
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido")
    inNumero.focus();
    return;
  }
  //calcula raiz quadrada do número
  var raiz = Math.sqrt(numero);

  //arredondador para baixo
  if (raiz == Math.floor(raiz)) {
    outResposta.textContent = "Raiz: " + raiz;
  } else {
    outResposta.textContent = "Não a raiz exata para " + numero;
  }
}

//cria referêcia ao elemento (botão)
var btExibir = document.getElementById("btExibir");
btExibir.addEventListener('click', calcularRaiz);