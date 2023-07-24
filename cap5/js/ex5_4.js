var criancas = [];  //vetor global

function adicionarCrianca() {
  //cria referência aos elementos (campos) de entrada de dados
  var inNome = document.getElementById("inNome");
  var inIdade = document.getElementById("inIdade");

  var nome = inNome.value; //obtém o conteúdo dos campos
  var idade = Number(inIdade.value);
  //verifica o preenchimento dos campos
  if (nome == "" || idade == 0 || isNaN(idade)) {
    alert("Informe corretamente os dados");
    inNome.focus();
    return;
  }
  //adiciona dados ao vetor de objetos
  criancas.push({ nome: nome, idade: idade });
  //limpa campos e posiciona curso em inNome
  inNome.value = "";
  inIdade.value = "";
  inNome.focus();
  listarCriancas();  //chama function que lista as crianças
}
//cria referência aos botões usados e cria seu evento de click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarCrianca);

function listarCriancas() {
  //verifica se o vetor está vazio
  if (criancas.length == 0) {
    alert("Não há crianças na lista")
    return;
  }
  var lista = ""; //para concatenar lista de crianças
  //percorre os elementos do vetor
  for (var i = 0; i < criancas.length; i++) {
    lista += criancas[i].nome + " - " + criancas[i].idade + " anos\n";
  }
  //exibe a lista (em uma única instrução)
  document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener('click', listarCriancas);

function resumirLista() {
  //verifica se o vetor ta vazio
  if (criancas.length == 0) {
    alert("Não há crianças na lista.");
    return;
  }
  //cria cópia do vetor criancas
  var copia = criancas.slice();
  //ordena a lista por idade
  copia.sort(function (a, b) { return a.idade - b.idade });
  var resumo = ""; //para concatenar saída

  var aux = copia[0].idade //menor idade do vetor ordenado
  var nomes = []; //vetor para inserir nomas de cada idade

  //percorre os elementos do vetor (classificado por idade)
  for (var i = 0; i < copia.length; i++) {
    //se é da mesma idade auxiliar, adiciona ao vetor
    if (copia[i].idade == aux) {
      nomes.push(copia[i].nome);
    } else {
      //se não, adiciona ao resumo, dados e nomes inseridos em nome[]
      resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
      resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
      resumo += "(" + nomes.join(", ") + ")\n\n";
      aux = copia[i].idade; //obtém a nova idade na ordem
      nomes = []; //limpa o vetor dos nomes
      nomes.push(copia[i].nome); //adiciona o primeiro da nova idade
    }
  }
  //adiciona os nomes da ultima idade ordenada
  resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
  resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
  resumo += "(" + nomes.join(", ") + ")\n\n";
  // altera conteúdo de outLista
  document.getElementById("outLista").textContent = resumo;
}
var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirLista);
