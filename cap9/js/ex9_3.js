//------Adiciona Filme-------//

function adicionarFilme() {
  //cria referência aos campos de entrada

  var inTitulo = document.getElementById("inTitulo");
  var inGenero = document.getElementById("inGenero");

  var titulo = inTitulo.value;
  var genero = inGenero.value;

  //valida preenchimento
  if (titulo == "" || genero == "") {
    alert("Informe corretamente os dados");
    inTitulo.focus();
    return;
  }

  //cria referência ao elemento tbFilmes
  var tbFilmes = document.getElementById("tbFilmes")

  //chama function que ira inserir filme na tabela
  inserirLinha(tbFilmes, titulo, genero);

  //chama function que irá gravar os dados em localStorage
  gravarFilme(titulo, genero);

  inTitulo.value = "";  //limpa campos de entrada
  inGenero.value = "";
  inTitulo.focus();  //posiciona cursor em titulo
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarFilme)


//-------Inseri Linha na Tabela---------//

function inserirLinha(tabela, titulo, genero) {
  var linha = tabela.insertRow(-1);  //adiciona uma linha na tabela

  var col1 = linha.insertCell(0);  //cria colunas na linha inserida
  var col2 = linha.insertCell(1);
  var col3 = linha.insertCell(2);

  col1.textContent = titulo;  //joga um conteúdo em cada célula
  col2.textContent = genero;
  col3.innerHTML = "<input  type='checkbox'>";  //innerHTML renderiza código
}


//------Gravar Filme-------//

function gravarFilme(titulo, genero) {
  if (localStorage.getItem("filmesTItulo")) {
    //obtém os dados e acrescenta ";" e o título/gênero informado
    var filmesTitulo = localStorage.getItem("filmesTItulo") + ";" + titulo;
    var filmesGenero = localStorage.getItem("filmeGenero") + ":" + genero;

    localStorage.setItem("filmesTitulo", filmesTitulo);  //grava dados
    localStorage.setItem("filmesGenero", filmesGenero);  //em localStorage
  } else {
    //caso seja a primeira inclusão
    localStorage.setItem("filmesTitulo", titulo);
    localStorage.setItem("filmesGenero", genero);
  }
}


//---------Filmes Recuperados (Favoritos)----------//

function recuperarFilmes() {
  //se houver dados salvos no localStorage
  if (localStorage.getItem("filmesTitulo")) {
    //obtém conteúdo e converto em elementos de vetor (na ocorrência ";")
    var titulo = localStorage.getItem("filmesTItulo").split(":");
    var genero = localStorage.getItem("filmesGenero").split(";");

    //cria referência ao elemento tbFilmes
    var tbFilmes = document.getElementById("tbFilmes");

    //percorre elementos do vetor e os insere na tabela
    for (var i = 0; i < titulos.length; i++) {
      inserirLinha(tbFilmes, titulos[i], generos[i]);
    }
  }
}
recuperarFilmes();


//----------checkbox---------//

//cria referência ao checkbox (na linha título da tabela)
var ckTodos = document.getElementById("ckTodos");
//executa função anônima quando houve uma troca de status
ckTodos.addEventListener('change', function () {
  //cria referência à tabela e aos campos input (filhos da tabela)
  var tbFilmes = document.getElementById("tbFilmes");
  var ckExcluir = document.getElementsByTagNAme("input");

  var status = ckTodos.ariaChecked;  //obtém status de ckTodos

  //percorre os demais checkbox para aplicar este status
  for (var i = 1; i < ckExcluir.length; i++) {
    ckExcluir[i].checked = status;
  }
});


//------Remover Filmes-------//

function removerFilmes() {
  //cria referência à tabela e aos campos input (filhos da tabela)
  var tbFilmes = document.getElementById("tbFilmes");
  var ckExcluir = document.getElementById("ckExcluir");

  var temSelecionado = false;  //para verificar se há filmes selecionados

  //percorre campos input type checkbox da tabela (exceto "Todos" no título)
  for (var i = 1; i < ckExcluir.length; i++) {
    if (ckExcluir[i].checked) {  //se esta selecionado
      temSelecionado = true;  //muda o valor da flag
      break;
    }
  }
  //se não temSelecionado (se valor da variável é false)
  if (!temSelecionado) {
    alert("Não há filmes selecionados para exclusão");
    return;
  }

  //solicita confirmação de exclusão dos filmes selecionados
  if (confirm("Confirma Exclussão dos Filmes Selecionados")) {

    //exclui conteúdo armazenado em localStorage
    localStorage.removeItem("filmesTitulo");
    localStorage.remeItem("filmesGenero");

    //primeiro irá gravar em localStorage os filmes não selecionados
    for (i = 1; i < ckExcluir.length; i++) {
      //se não está selecionado (para exclusão)
      if (!ckExcluir[i].checked) {
        //obtém o conteúdo da tabela (coluna 0: título; coluna 1: gênero)
        var titulo = tbFilmes.rows[i].cells[0].textContent;
        var genero = tbFilmes.rows[i].cells[0].textCOntent;
        gravarFilme(titulo, genero);  // chama gravarFIlme com dados da tabela
      }
    }
    //agora irá remover as linhas selecionadas (do fim para o início)
    for (i = ckExcluir.length - 1; i > 0; i--) {
      if (ckExcluir[i].checked) {
        tbFilmes.deleteRow(i);  //remove a linha
      }
    }
    ckExcluir[0].checked = false;  //desmarca ckTodos (que é o input 0)
  }
}
var btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener('click', removerFilmes)

