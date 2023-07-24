//referência dos elementos que serão usados do DOM
var inNoticias = document.getElementById("inNoticias");
var btAdicionar = document.getElementById("btAdicionar");
var btUltimasNoticias = document.getElementById("btUltimasNoticias");
var outNoticiasCadastradas = document.getElementById("outNoticiasCadastradas");
var outUltimasNoticias = document.getElementById("outUltimasNoticias");

//vetor global que armazena as notícias
var listaDeNoticias = [];

function adicionarNoticias() {
  //recebe os dados a serem trabalhados
  var noticias = inNoticias.value.trim();

  //caso a noticia seja preenchida incorretamente
  if (noticias === "") {
    alert("Adicione alguma notícia.");
    inNoticias.value = "";
    inNoticias.focus();
    return;
  }

  listaDeNoticias.push(noticias);

  var numeroNoticiasCadastradas = listaDeNoticias.length;
  var textoNoticiasCadastradas = "Número de notícias cadastradas: " + numeroNoticiasCadastradas;

  outNoticiasCadastradas.textContent = textoNoticiasCadastradas;

  inNoticias.value = "";
  inNoticias.focus();
}
btAdicionar.addEventListener('click', adicionarNoticias);

function listarNoticias() {
  var mostrarNoticias = Number(prompt("Quantas notícias você gostaria de ver?"));
  var totalDeNoticias = listaDeNoticias.length;

  if (mostrarNoticias === 0 || isNaN(mostrarNoticias) || mostrarNoticias > totalDeNoticias) {
    alert("Escolha um número menor ou igual ao de notícias cadastradas!");
    return;
  }

  var ultimasNoticias = mostrarNoticias + " Última(s) Notícia(s)\n---------------------\n";

  for (var i = totalDeNoticias - 1; i >= totalDeNoticias - mostrarNoticias; i--) {
    ultimasNoticias += (i + 1) + "º) " + listaDeNoticias[i] + "\n";
  }

  outUltimasNoticias.textContent = ultimasNoticias;
}
btUltimasNoticias.addEventListener('click', listarNoticias);
