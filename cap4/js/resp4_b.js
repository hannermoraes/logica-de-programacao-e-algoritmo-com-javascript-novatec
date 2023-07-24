function mostrarPrevisao() {
  //referência os itens a serem utilizados na função
  var inNumero = document.getElementById("inNumero");
  var inAnos = document.getElementById("inAnos");
  var outResposta = document.getElementById("outResposta");

  //obtém os dados de cada campo a ser utilizado
  var numero = Number(inNumero.value);
  var anos = Number(inAnos.value);

  var total = numero;
  var quantidade = "";


  //mensagem referente a inserção inválida de informações
  if (numero < 2 || anos == 0 || isNaN(numero) || isNaN(anos)) {
    alert("Por favor, preencha os campos corretamente.")
    inNumero.value = "";
    inAnos.value = "";
    inNumero.focus();
    return;
  }

  for (i = 1; i <= anos; i++) {
    quantidade = outResposta.textContent = quantidade + i + "º Anos: " + total + " Chinchila \n";
    total = total * 3;  //OBSERVAR ESTE CAMPO
  }
}
//referência o botão a ser usado para realizar função.
var btPrevisao = document.getElementById("btPrevisao");

//utiliza botão para dar inicio ao evento click
btPrevisao.addEventListener('click', mostrarPrevisao);