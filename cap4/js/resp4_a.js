function repetirFruta() {

  //referência os itens a serem usados na function 
  var inFruta = document.getElementById("inFruta");
  var inNumero = document.getElementById("inNumero");
  var outFruta = document.getElementById("outFruta");

  //obtém os dados do campos a serem modificados
  var fruta = inFruta.value;
  var numero = Number(inNumero.value);
  var frutaRepetida = "";
  var ultimaFruta = "";

  //caso não seja inserida uma informação válida é exibida mensagem de erro e o campo é limpo
  if (numero == 0 || isNaN(numero) || fruta == numero || fruta == "") {
    alert("Por favor insira uma fruta ou um número válido para que seja feita a repetição.")
    inNumero.value = "";
    inFruta.value = "";
    inFruta.focus();
    return;
  }

  //imprime as frutas com FOR, menos a ultima
  for (var i = 2; i <= numero; i++) {
    frutaRepetida = frutaRepetida + fruta + "*";
  }

  //imprime a ultima fruta que não foi impressa no FOR por ele começar no 2 e não no 1
  ultimaFruta = fruta;

  outFruta.textContent = frutaRepetida + ultimaFruta;
}

//referência o botão que aplica a function e realiza o evento click 
var btRepetirFruta = document.getElementById("btRepetirFruta");
btRepetirFruta.addEventListener('click', repetirFruta);

//botão de limpar todos os campos
var btLimpar = document.getElementById("btLimpar");
//evento do botão de limpar todos os campos
btLimpar.addEventListener('click', limparCampos);

function limparCampos() {
  //recarregar a página
  location.reload();
}