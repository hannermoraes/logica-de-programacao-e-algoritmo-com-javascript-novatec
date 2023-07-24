function incluirProduto() {
  //referência e recebe os dados de Produtos
  var inProduto = document.getElementById("inProduto");
  var produto = inProduto.value.trim();

  //caso não tenha dados a serem inseridos
  if (produto == "") {
    alert("Insira pelo menos 1(um) item no campo de Produto.")  //exibe mensagem de alerta
    inProduto.focus();  //foca no campo de produto novamente
    return;
  }

  var produtos = localStorage.getItem("listaProduto");
  var produtosArray = [];

  //método para colocar uma string no array e retornar ele (com a separação de ";" pois o localStorage funciona assim com listas)
  if (produtos) {
    produtosArray = produtos.split(";")
  }
  produtosArray.push(produto);
  produtosArray.sort();

  localStorage.setItem("listaProduto", produtosArray.join(";"))


  mostrarLista();
  //foca e limpa o campo de produto para que seja adicionado outro
  inProduto.value = "";
  inProduto.focus();
}
//obtém elemento botãoAdicionar e adiciona evento click nele
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', incluirProduto);



//-----Lista de Compras-------//

function mostrarLista() {
  //cria referência ao elemento que exibe a lista
  var outLista = document.getElementById("outLista");
  //caso não tenha item na lista
  if (!localStorage.getItem("listaProduto")) {
    outLista.textContent = "";
    return;
  }
  //obtém o conteúdo das variáveis caso eles já existam
  var produtos = localStorage.getItem("listaProduto").split(";");
  produtos.sort();  //organiza a lista em ordem alfabética
  //acumula produtos em linha
  var linha = "";
  //repetição que percorre todos os elementos do vetor
  for (var i = 0; i < produtos.length; i++) {
    var formatador = produtos[i];
    var primeiraLetra = formatador.charAt(0).toUpperCase();
    var restoPalavra = formatador.slice(1);
    var produtoFormatado = primeiraLetra + restoPalavra;

    //organiza os produtos como lista
    linha += produtoFormatado + "\n";
  }
  //exibe a lista
  outLista.textContent = "Produtos Adicionados\n" + "--------------------\n" + linha;

}
mostrarLista();  //chama a função assim que a página é carregada



//--------Limpar Lista--------//

function limparLista() {
  //solicita confirmação da limpeza de lista
  if (confirm("Confirmar exclusão da lista de compras?")) {
    localStorage.removeItem("listaProduto");
    mostrarLista();
  }
}
//obtém o elemento botãoLimpar e adiciona evento de click
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener('click', limparLista);
