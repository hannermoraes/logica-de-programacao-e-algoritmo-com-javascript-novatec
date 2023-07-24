function calcularFuso() {
  //referência os elementos da página
  var inHoraBrasil = document.getElementById("inHoraBrasil");
  var outHoraFranca = document.getElementById("outHoraFranca");

  //obtém e converte o conteúdo do campo inHoraBrasil
  var horaBrasil = Number(inHoraBrasil.value);

  //se não preencheu o NaN (Not-a-Number)
  if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
    alert("Informe a hora do Brasil corretamente");
    inHoraBrasil.focus();
    return;
  }
  var horaFranca = horaBrasil + 5;
  //se passar de 24h na França
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24;
  }
  //exibe resposta alterando conteúdo de outHoraFranca
  outHoraFranca.textContent = "Na França agora são " + horaFranca.toFixed(2) + " Horas";
}
//cria uma referêcia ao botão (btExibir)
var btExibir = document.getElementById("btExibir");

//evento de clique do botão
btExibir.addEventListener('click', calcularFuso);