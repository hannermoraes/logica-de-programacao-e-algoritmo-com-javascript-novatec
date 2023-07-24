function calcularPeso() {
  //referência dos elementos manipulados
  var inNome = document.getElementById("inNome");
  var inAltura = document.getElementById("inAltura");
  var rbMasculino = document.getElementById("rbMasculino");
  var rbFeminino = document.getElementById("rbFeminino");
  var outResposta = document.getElementById("outResposta");

  // obtém os conteudos dos campos de edição da página
  var nome = inNome.value;
  var masculino = rbMasculino.value;
  var feminino = rbFeminino.value;
  var altura = inAltura.value;

  //verifica se nome foi preenchido e sexo selecionado
  if (nome == "" || (masculino == false && feminino == false)) {
    alert("Por favor, informe um nome e selecione um sexo.");
    inNome.focus(); // foca no edição do ID inNome
    return;
  }
  // se altura (0) ou NaN: Not-a-Number (um texto for informado)
  if (altura == 0 || isNaN(altura)) {
    alert("Por favor, informe a altura corretamente.");
    inAltura.focus();
    return;
  }
  // se masculino (masculino = true)
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2); // Math.pow eleva ao quadrado
  } else {
    var peso = 21 * Math.pow(altura, 2);
  }

  // apresenta a resposta alterando o conteído da linha outResposta
  outResposta.textContent = nome + ": seu peso ideal é " + peso.toFixed(3) + " Kg";
}
// referência aos botões de uso
var btCalcular = document.getElementById("btCalcular");
var btLimpar = document.getElementById("btLimpar");

// eventos dos botões
btCalcular.addEventListener('click', calcularPeso);

function limparCampos() {
  // Limpa os conteúdos dos elementos
  document.getElementById("inNome").value = "";
  document.getElementById("rbMasculino").checked = false;
  document.getElementById("rbFeminino").checked = false;
  document.getElementById("inAltura").value = "";
  document.getElementById("outResposta").textContent = "";
  // coloca o foco no elemento inNome
  document.getElementById("inNome").focus();
}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparCampos);
