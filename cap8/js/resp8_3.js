function adicionarServico() {
  var inServico = document.getElementById("inServico");
  var servico = inServico.value;

  //condição caso não seja inserida nenhuma informação ao clicar sobre adicionar
  if (servico == "") {
    alert("Informe o serviço - veículo a ser adicionado.");
    inServico.focus();
    return;
  }

  //adiciona mais um serviço ou incluir serviço pela primeira vez
  if (localStorage.getItem("herbieServico")) {
    localStorage.setItem("herbieServico", localStorage.getItem("herbieServico") + ";" + servico);
  } else {
    localStorage.setItem("herbieServico", servico);
  }

  mostrarPendentes();

  inServico.value = "";
  inServico.focus();
}
//obtém botão e evento de click para ativar a função
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarServico);



function mostrarPendentes() {
  var outPendentes = document.getElementById("outPendentes");
  var numPendentes = "";

  if (localStorage.getItem("herbieServico")) {
    numPendentes = localStorage.getItem("herbieServico").split(";").length;
  } else {
    numPendentes = 0;
  }
  outPendentes.textContent = numPendentes;
}
mostrarPendentes();



function executarServico() {

  if (!localStorage.getItem("herbieServico")) {
    alert("Não há serviços pendentes para executar");
    return;
  }

  var outExecucao = document.getElementById("outExecucao");
  var servicos = localStorage.getItem("herbieServico").split(";");

  var emExecucao = servicos.shift();      //remove o primeiro item da lista

  outExecucao.textContent = emExecucao;     //exibe o item que foi removido

  localStorage.setItem("herbieServico", servicos.join(";"));

  mostrarPendentes();
}
var btExecutar = document.getElementById("btExecutar");
btExecutar.addEventListener('click', executarServico);
