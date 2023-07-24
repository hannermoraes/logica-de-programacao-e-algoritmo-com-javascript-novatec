function calcularMedia() {
  // refêrencia aos elementos da página
  var inNome = document.getElementById('inNome');
  var inNota1 = document.getElementById('inNota1');
  var inNota2 = document.getElementById('inNota2');
  var outMedia = document.getElementById("outMedia");
  var outSituacao = document.getElementById("outSituacao");
  //obtêm os conteúdos dos campos de edição da página
  var nome = inNome.value;
  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);
  //calculo das médias
  var media = (nota1 + nota2) / 2;
  //apresenta a média e altera o conteúdo do elemento referente
  outMedia.textContent = "Média das Notas: " + media.toFixed(1)
  //cria a condição
  if (media >= 7) {
    outSituacao.textContent = "Parabéns " + nome + ", você foi Aprovado(a)."
    outSituacao.style.color = "blue";
  } else if (media >= 4) {
    outSituacao.textContent = "Atenção " + nome + ", você está em exame."
    outSituacao.style.color = "green";
  } else {
    outSituacao.textContent = "Ops " + nome + ", você foi Reprovado(a)."
    outSituacao.style.color = "red";
  }
}
//cria referência para o botão de gerar resultado
var btResultado = document.getElementById("btResultado");
btResultado.addEventListener('click', calcularMedia);