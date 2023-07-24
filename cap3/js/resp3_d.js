function calcularTriangulo() {

  //referência os dados utilizados
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");
  var outTipo = document.getElementById("outTipo");
  var outResposta = document.getElementById("outResposta");

  //convertendo contéudo para números
  var ladoA = Number(inLadoA.value);
  var ladoB = Number(inLadoB.value);
  var ladoC = Number(inLadoC.value);

  //erro aplicado pela falta de informação ou informação incorreta (NaN)
  if ((ladoA == 0 || ladoA == "") || (ladoB == 0 || ladoB == "") || (ladoC == 0 || ladoC == "") || isNaN(ladoA, ladoB, ladoC)) {
    alert("Por favor informe um valor válido. \nAceitamos somente números dentro dos campos solicitados!")
    inLadoA.focus();
    return;
  }

  //verifica se pode ser formado um triângulo
  if (ladoA > (ladoB + ladoC) || ladoB > (ladoC + ladoA) || ladoC > (ladoA + ladoB)) {
    alert("Não é possivel formar um triângulo usando estas proporções.")
    inLadoA.focus();
    return;
  }

  //condição e inserção dos 3 tipos de triângulos que podem ser formados
  if ((ladoA == ladoB) && (ladoB == ladoC)) {
    outResposta.textContent = "Estas proporções podem formar um triângulo."
    outTipo.textContent = "Tipo de Triângulo: Equilátero."

  } else if (ladoA == ladoB || (ladoB == ladoC) || (ladoC == ladoA)) {
    outResposta.textContent = "Estas proporções podem formar um triângulo."
    outTipo.textContent = "Tipo de Triângulo: Isósceles."

  } else {
    outResposta.textContent = "Estas proporções podem formar um triângulo."
    outTipo.textContent = "Tipo de Triângulo: Escaleno."
  }
}

//referênciando botão de verificação
var btVerificaLados = document.getElementById("btVerificaLados");

//evento de click para o botão
btVerificaLados.addEventListener('click', calcularTriangulo);
