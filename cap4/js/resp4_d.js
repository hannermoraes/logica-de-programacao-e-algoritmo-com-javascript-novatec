function criaEstrelas() {
  //referência os elementos a serem utilizados na página
  var inEstrelas = document.getElementById("inEstrelas");
  var outEstrelas = document.getElementById("outEstrelas");

  //obtém e converte os dados de estrelas para número
  var numeroDeEstrelas = Number(inEstrelas.value);
  var estrelas = "";

  //mensagem de erro caso seja inserido um número inválido ou um NaN
  if (numeroDeEstrelas == "" || isNaN(numeroDeEstrelas) || numeroDeEstrelas == 0) {
    alert("Por favor, informar um número válido.")
    inEstrelas.value = "";
    inEstrelas.focus();
    return;
  }

  //condição de criação do loop referente ao número de estrelas solicitado
  for (var i = 1; i <= numeroDeEstrelas; i++) {
    for (var j = 1; j <= i; j++) {
      estrelas = estrelas + "*";
    }
    estrelas = estrelas + "\n";
  }

  //resposta fornecida referente ao campo de estrelas
  outEstrelas.textContent = estrelas;
}

//referência o botão que realiza a function criarEstrelas
var btEstrelas = document.getElementById("btEstrelas");

//evento do botão
btEstrelas.addEventListener('click', criaEstrelas);