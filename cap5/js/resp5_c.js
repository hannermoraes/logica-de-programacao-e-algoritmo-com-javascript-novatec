//referência DOM
var inCandidato = document.getElementById("inCandidato");
var inAcertos = document.getElementById("inAcertos");

var btAdicionar = document.getElementById("btAdicionar");
var btListar = document.getElementById("btListar");
var btAprovados = document.getElementById("btAprovados");

var listaDeCandidatos = [];

function adicionarCandidatos() {

  //obtendo dados dos candidatos
  var candidato = inCandidato.value;
  var acertos = Number(inAcertos.value);
  //caso a informação não seja inserida ou seja inserida de forma errada
  if ((candidato == "") || (acertos == 0) || isNaN(acertos)) {
    alert("Informar corretamente os dados para verificação.");
    inCandidato.focus();
    return;
  }
  //push de informações dos candidatos
  listaDeCandidatos.push({ nome: candidato, acertos: acertos });
  inCandidato.value = "";
  inAcertos.value = "";
  inCandidato.focus();

  listarTodos();
}
btAdicionar.addEventListener('click', adicionarCandidatos);

function listarTodos() {

  if (listaDeCandidatos == 0) {
    alert("Não existem candidatos nesta lista.");
    return;
  }

  var lista = "";

  for (var i = 0; i < listaDeCandidatos.length; i++) {
    lista += i + 1 + "º - " + listaDeCandidatos[i].nome + " - " + listaDeCandidatos[i].acertos + " acertos\n";
  }
  outCandidatos.textContent = lista;
}
btListar.addEventListener('click', listarTodos);

function todosAprovados() {

  if (listaDeCandidatos.length == 0) {
    alert("Não há candidatos na lista.")
    inCandidato.value = "";
    return;
  }

  var acertosParaAprovar = Number(prompt("Os aprovados devem acertar pelo menos:"));
  if ((acertosParaAprovar == 0) || isNaN(acertosParaAprovar)) {
    alert("Número inválido");
    return;
  }

  var copia = listaDeCandidatos.slice();
  copia.sort(function (a, b) {
    return a.acertos - b.acertos;
  });
  copia.reverse();

  var aprovados = "";

  for (var i = 0; i < copia.length; i++) {
    if (copia[i].acertos >= acertosParaAprovar) {
      aprovados += i + 1 + "º Colocado - " + copia[i].nome + " - " + copia[i].acertos + " acertos\n";
    }
  }

  if (aprovados == "") {
    outCandidatos.textContent = "Não há aprovados no concurso!"
  } else {
    outCandidatos.textContent = aprovados;
  }
}
btAprovados.addEventListener('click', todosAprovados);