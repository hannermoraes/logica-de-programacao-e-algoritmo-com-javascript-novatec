//referência os dados que serão usados na aplicação
var inMensagem = document.getElementById("inMensagem")
var btCriptografar = document.getElementById("btCriptografar")
var btDescriptografar = document.getElementById("btDescriptografar")
var outResposta = document.getElementById("outResposta")

//variável para armazenar a mensagem original
var mensagemOriginal = ""

function criptografar() {
  //recebe os valores dos dados de entrada
  var mensagem = inMensagem.value
  //condição caso não seja inserida mensagem nenhuma
  if (mensagem == "") {
    alert("Escreva somente textos no campo de mensagem.")
    inMensagem.value = ""
    inMensagem.focus()
    return
  }
  //variável para armazenar as letras pares e esconder a mensagem inserida
  var letrasPares = ""
  var estrela = "*"
  //condição de captação do número par dentro do loop
  for (var i = 1; i < mensagem.length; i += 2) {
    var letras = mensagem.charAt(i)
    letrasPares += letras
  }
  outResposta.textContent = letrasPares
  //troca a informação de inMensagem para ****
  inMensagem.value = estrela.repeat(mensagem.length);
  //armazena a mensagem original antes de criptografar
  mensagemOriginal = mensagem
}
btCriptografar.addEventListener('click', criptografar)

function descriptografar() {
  outResposta.textContent = mensagemOriginal
  inMensagem.value = ""
}
btDescriptografar.addEventListener('click', descriptografar)