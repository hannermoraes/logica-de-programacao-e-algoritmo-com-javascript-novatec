//referência todos os campos a serem usados
var inClube = document.getElementById("inClube");
var btAdicionar = document.getElementById("btAdicionar");
var btListar = document.getElementById("btListar");
var btTabela = document.getElementById("btTabela");
var outLista = document.getElementById("outLista");

var todosClubes = [];  //array global para agrupar todos os times da lista

function adicionarTimes() {
  //recebe e altera os dados do campo
  var clube = inClube.value;

  //verifica se o campo foi preenchido corretamente
  if (!clube) {
    alert("Preencher o campo corretamente.")
    inClube.value = "";
    inClube.focus();
    return;
  }

  //método de inclusão dos times na lista através do (push)
  todosClubes.push(clube);
  inClube.value = "";
  inClube.focus();

  listarClubes();
}

//cria o evento de click para o botão (Adicionar)
btAdicionar.addEventListener('click', adicionarTimes);

function listarClubes() {
  //(for) de verificação para saber se existem clubes na lista
  if (todosClubes.length === 0) {
    alert("Não há clubes adicionados!");
    return;
  }

  var listaDeClubes = "";  //var usada para concatenar as informações

  for (var i = 0; i < todosClubes.length; i++) {
    listaDeClubes += (i + 1) + ". " + todosClubes[i] + "\n";
  }

  outLista.textContent = listaDeClubes;
}

btListar.addEventListener('click', listarClubes);

function mostrarTabela() {
  var jogos = "";
  var ultimoClube = todosClubes[todosClubes.length - 1];

  if (todosClubes.length % 2 !== 0 || todosClubes.length === 0) {
    alert("Adicionar um clube para poder montar a tabela de jogos!");
    inClube.focus();
    return;
  }

  for (let i = 0; i < (todosClubes.length - 1) / 2; i++) {
    jogos += todosClubes[i] + " X " + todosClubes[todosClubes.length - 1 - i] + "\n";
  }

  outLista.textContent = jogos;
}

btTabela.addEventListener('click', mostrarTabela);
