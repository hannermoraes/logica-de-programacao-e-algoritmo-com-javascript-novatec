//referência dos objetos que serão tratados 

var inNumero = document.getElementById("inNumero");
var btAdicionar = document.getElementById("btAdicionar");
var btVerificar = document.getElementById("btVerificar");
var outNumeros = document.getElementById("outNumeros");
var outResposta = document.getElementById("outResposta");

var listaDeNumeros = [];

function adicionarNumero() {

  var numero = Number(inNumero.value);

  if (numero == "" || numero == 0 || isNaN(numero)) {
    alert("Por favor, insira um valor válido para verificação.");
    inNumero.value = "";
    inNumero.focus();
    return;
  }

  for (var i = 0; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] == numero) {
      alert("Número repetido! Digite somente números que não estejam na lista.");
      inNumero.value = "";
      inNumero.focus();
      return;
    }
  }
  listaDeNumeros.push(numero);
  outNumeros.textContent = "Números: " + listaDeNumeros.join(", ") + ".";
}
btAdicionar.addEventListener('click', adicionarNumero);

function verificaOrdem() {
  var numerosEmOrdem = true;

  for (var i = 0; i < listaDeNumeros.length - 1 && numerosEmOrdem; i++) {
    if (listaDeNumeros[i] > listaDeNumeros[i + 1]) {
      numerosEmOrdem = false;
    }
  }

  if (numerosEmOrdem) {
    outResposta.textContent = "Os números estão em ordem crescente!";
  } else {
    outResposta.textContent = "Atenção, estes números não estão em ordem crescente!";
  }
}

btVerificar.addEventListener('click', verificaOrdem);