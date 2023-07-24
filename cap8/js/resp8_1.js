//captura as tags input da página
var inputsRadio = document.getElementsByTagName("input");
//percorre os elementos para associar function ao evento change
for (var i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener('change', trocarClube);
}

function trocarClube() {
  //cria referência aos elementos da página
  var imgClube = document.getElementById("imgClube");
  var divTitulo = document.getElementById("divTitulo");

  //armazena o vetor da lista de clubes
  var clubes = ["Brasil", "Pelotas", "Farroupilha"];

  //percorre os radiobutton para verificar qual está selecionado
  for (var i = 0; i < 4; i++) {
    if (inputsRadio[i].checked) {  //verifica se existe seleção
      var selecao = i;   //armazena a informação da seleção
      break;  //sai da repetição
    }
  }
  if (selecao <= 2) { //se seleção <= 2, então torce por algum clube
    divTitulo.className = "row cores" + clubes[selecao];   //modifica cores (divTitulo)

    //muda a propriedade src com a imagem do clube selecionado
    imgClube.src = "img/" + clubes[selecao].toLowerCase() + ".png";
    imgClube.className = "exibe";  //exibe imagem
    imgClube.alt = "Simbolo do " + clubes[selecao];  //altera o texto do alt

    localStorage.setItem("clube", clubes[selecao]);   //salva o nome do clube
  } else {  //se selecionou "Nenhum"
    divTitulo.className = "row";   //tira a classe de cores da divTitulo
    imgClube.className = "oculta";   //oculta a imagem
    imgClube.alt = "";   //limpa campo de texto alternativo
    localStorage.removeItem("clube");  //remove variável do localStorage
  }
}

function verificaClube() {
  // se já tiver salvo algum clube
  if (localStorage.getItem("clube")) {

    var clube = localStorage.getItem("clube");   //obtém o nome do clube

    //conforme o clube, marca um dos elementos do input type radio
    if (clube == "Brasil") {
      inputsRadio[0].checked = true;
    } else if (clube == "Pelotas") {
      inputsRadio[1].checked = true;
    } else {
      inputsRadio[2].checked = true;
    }
    trocarClube();    //chama a function que troca a imagem e cores
  }
}
//chama a function que verifica se o cliente já selecionou algum clube anteriormente
verificaClube();


//-------- Contador de Visitas --------

//verifica se já existe contador armazenado no armazenamento local
var contador = localStorage.getItem("contador");

//condição de contagem
if (contador === null) {
  //se não existir contador, defina-o como 1
  contador = 1;
  alert("Muito Bem Vindo! Esta é a sua primeira visita ao nosso site.")
} else {
  contador = parseInt(contador) + 1;
  alert("Que bom que você voltou! Esta é a sua visita de número " + contador + " ao nosso site.")
}

//atualiza a informação no elemento HTML
document.getElementById("contador").innerText = contador;

//armazena a nova informação no localStorage
localStorage.setItem('contador', contador);