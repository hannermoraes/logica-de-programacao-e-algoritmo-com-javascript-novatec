function mostrarTabuada() {

  //criar referência aos elementos
  var inNumero = document.getElementById("inNumero");
  var outTabuada = document.getElementById("outTabuada");

  //converte o conteúdo do campo inNumero
  var numero = Number(inNumero.value);

  //válida o número
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...")
    numero.focus();          // REALIZANDO TESTE PARA SABER SE POSSO USAR A VÁRIAVEL numero NO LUGAR DE inNumero
    return;
  }

  //cria uma váriavel do tipo string que ira concatenar a resposta
  var resposta = "";

  //cria um laço de repetição
  for (var i = 1; i <= 10; i++) {
    resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";
  }

  //conteúdo da tag pre onde vai ser inserida uma tabuada
  outTabuada.textContent = resposta;
}

//criando referência ao botão de ação
var btMostrar = document.getElementById("btMostrar");

//criando o evento sobre o botão
btMostrar.addEventListener('click', mostrarTabuada);