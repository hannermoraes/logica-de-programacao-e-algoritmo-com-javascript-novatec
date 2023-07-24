function listarNumeros() {

  //cria referências aos elementos que function ira manipular
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  //converte a informação para número
  var numero = Number(inNumero.value);

  //cria a condição para caso a informação 0 ou inserida errada (NaN)
  if (numero == 0 || isNaN(numero)) {
    alert("Informe corretamente um número para que seja realizada a ação corretamente.")
    numero.focus();
    return;
  }

  //inicaliza váriavel resposta
  var resposta = "Entre " + numero + " e 1: ";

  //cria um FOR decrescente
  for (var i = numero; i > 1; i--) {
    resposta = resposta + i + ", ";
  }
  resposta = resposta + i + ".";

  //altera o conteúdo da Resposta
  outResposta.textContent = resposta;
}

//referência o botão para realizar a function ao evento click
var btDecrescente = document.getElementById("btDecrescente");

//evento click para realizar a ação
btDecrescente.addEventListener('click', listarNumeros);
