function verificarVelocidade() {
  var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
  var inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");
  var outSituacao = document.getElementById("outSituacao");

  var velocidadePermitida = Number(inVelocidadePermitida.value);
  var velocidadeCondutor = Number(inVelocidadeCondutor.value);

  if (velocidadePermitida === 0 || isNaN(velocidadePermitida)) {
    alert("Esta informação não é válida, favor inserir uma velocidade somente usando números.");
    inVelocidadePermitida.focus();
    return;
  }
  if (velocidadeCondutor === 0 || isNaN(velocidadeCondutor)) {
    alert("Esta informação não é válida, favor inserir uma velocidade somente usando números.");
    inVelocidadeCondutor.focus();
    return;
  }

  var limiteMultaLeve = velocidadePermitida + (0.2 * velocidadePermitida);

  if (velocidadeCondutor <= velocidadePermitida) {
    outSituacao.textContent = "Sem Multa";
  } else if (velocidadeCondutor <= limiteMultaLeve) {
    outSituacao.textContent = "Multa Leve";
  } else {
    outSituacao.textContent = "Multa Grave";
  }
}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener('click', verificarVelocidade);
