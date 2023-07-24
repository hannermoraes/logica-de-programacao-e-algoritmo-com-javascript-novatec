//vetor global
var pacientes = [];

function adicionarPaciente() {

  //cria referência aos elementos de entrada e saída da página
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");

  var nome = inPaciente.value; //obtêm o nome do paciente

  //verifica se o preenchimento do nome do paciente foi feito corretamente
  if (nome == "") {
    alert("Informe o nome do paciente.")
    inPaciente.focus();
    return;
  }
  pacientes.push(nome); //adiciona um paciente no final da lista
  var lista = "";  //string para concatenar pacientes

  // percorre elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  //altera o conteúdo da tag outLista
  outLista.textContent = lista;

  //limpa o campo e posiciona o cursor em inPaciente
  inPaciente.value = "";
  inPaciente.focus();
}

function urgenciaPaciente() {

  //cria referência aos elementos de entrada e saída da página
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");

  var nome = inPaciente.value; //obtêm o nome do paciente

  //verifica se o preenchimento do nome do paciente foi feito corretamente
  if (nome == "") {
    alert("Informe o nome do paciente.")
    inPaciente.focus();
    return;
  }
  pacientes.unshift(nome); //adiciona um paciente no final da lista
  var lista = "";  //string para concatenar pacientes

  // percorre elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }

  //altera o conteúdo da tag outLista
  outLista.textContent = lista;

  //limpa o campo e posiciona o cursor em inPaciente
  inPaciente.value = "";
  inPaciente.focus();
}

function atenderPaciente() {
  //verifica se o vetor paciente este vazio
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera.")
    inPaciente.focus();
    return;
  }
  //cria referência ao elemento de saída de dados
  var outAtendimento = document.getElementById("outAtendimento");
  var outLista = document.getElementById("outLista");

  //remove pacientes dos início da fila (e obtém nome)
  var atender = pacientes.shift();
  //exibe o nome do paciente em atendimento
  outAtendimento.textContent = atender;

  //string para concatenar pacientes
  var lista = "";

  //percorre os elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n";
  }
  //altera o conteúdo da tag lista
  outLista.textContent = lista;
}

//cria referência ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarPaciente);

//cria referência ao btAdicionar e associa function ao evento click
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener('click', urgenciaPaciente);

//cria referência ao btAdicionar e associa function ao evento click
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);
