function gerarCitacao() {
  var inAutor = document.getElementById("inAutor")
  var outCitacao = document.getElementById("outCitacao")

  //recebe os dados do campo inAutor
  var autor = inAutor.value
  //condição caso não seja inserida nenhuma informação no campo inAutor
  if (autor == "" || autor.indexOf(" ") == -1) {
    alert("Informe o nome completo de um autor")
    inAutor.value = ""
    inAutor.focus()
    return
  }
  //separação do nome em partes
  var partes = autor.toUpperCase().split(" ")
  var tamanho = partes.length
  //citação
  var citacao = partes[tamanho - 1] + ", "

  for (var i = 0; i < tamanho - 1; i++) {
    citacao += partes[i].charAt(0) + ". "
  }

  outCitacao.textContent = "Citação Bibliográfica " + citacao
}
var btGerar = document.getElementById("btGerar")
btGerar.addEventListener('click', gerarCitacao)