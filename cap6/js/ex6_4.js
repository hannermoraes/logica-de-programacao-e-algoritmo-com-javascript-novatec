function gerarCracha() {

  //cria referência aos elementos da página
  var inNome = document.getElementById("inNome");
  var outCracha = document.getElementById("outCracha");

  //obtém o conteúdo dos campos de entrada
  var nome = inNome.value;

  //condição caso o campo nome esteja vazio o com espaços
  if (nome == "" || nome.indexOf(" ") == -1) {
    alert("Informe o nome Completo do participante.");
    inNome.focus();
    return;
  }

  var priEspaco = nome.indexOf(" "); //posição do primeiro espaço
  var ultEspaco = nome.lastIndexOf(" "); //posição do último espaço

  //copia nome e sobrenome usando os parâmetros do substr()
  var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

  //altera o texto identificado na página por outCrachá
  outCracha.textContent = cracha;
}

//cria referência ao botão e associa a ele o evento de click
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener('click', gerarCracha);