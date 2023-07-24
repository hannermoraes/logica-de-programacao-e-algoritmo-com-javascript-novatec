function gerarSenha() {
  var inAluno = document.getElementById("inAluno")
  var outSenha = document.getElementById("outSenha")

  var aluno = inAluno.value;

  //caso não seja informado nenhum nome ou esteja inválido de alguma maneira
  if (aluno == "" || !validarNome(aluno)) {
    alert("Informe o nome completo do aluno.")
    inAluno.focus();
    return;
  }

  //funções retornando com a exibição da resposta
  outSenha.textContent = "Senha Inicial: " + obterSobrenome(aluno) + contarVogais(aluno);
}
var btGerarSenha = document.getElementById("btGerarSenha");
btGerarSenha.addEventListener('click', gerarSenha);

function validarNome(aluno) {
  //verifica se o nome possui espaços(assim tento sobrenome)
  if (aluno.indexOf(" ") >= 1) {
    return true
  } else {
    return false
  }
}

function obterSobrenome(aluno) {
  var ultimoSobrenome = aluno.lastIndexOf(" ");
  return aluno.substr(ultimoSobrenome + 1).toLowerCase();
}

function contarVogais(aluno) {
  var num = 0;
  var letra;
  for (var i = 0; i < aluno.length; i++) {
    letra = aluno.charAt(i).toUpperCase();
    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
      num++;
    }
  }
  return num < 10 ? "0" + num : num;
}