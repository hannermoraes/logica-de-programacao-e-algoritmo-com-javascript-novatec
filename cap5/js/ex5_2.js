//declara o vetor de escopo global com os números já apostados
var erros = [];

//gera um número aleatório entre 1 e 100
var sorteado = 1 + Math.floor(Math.random() * 100);

const CHANCES = 6;

function apostarNumero() {
  //cria referência ao compo de entrada e obtém o conteúdo
  var inNumero = document.getElementById("inNumero");
  var numero = Number(inNumero.value);

  //valida o número escolhido
  if (numero <= 0 || numero > 100 || isNaN(numero)) {
    alert("Informe um número válido")
    inNumero.value = "";
    inNumero.focus();
    return;
  }

  //referência espaço da saída dos dados
  var outDicas = document.getElementById("outDicas");
  var outErros = document.getElementById("outErros");
  var outChances = document.getElementById("outChances");

  //se aposta for igual ao número sorteado
  if (numero == sorteado) {
    alert("Parabéns, você acertou!!!")
    //troca status dos botões
    btApostar.disable = true;
    btJogar.className = "exibe";
    outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
  } else {
    //se número existe no vetor (erros)
    if (erros.indexOf(numero) >= 0) {
      alert("Você já apostou o número " + numero + ". Tente outro");
    } else {
      //adiciona número ao vetor
      erros.push(numero);
      var numErros = erros.length //obtém tamanho do vetor
      var numChances = CHANCES - numErros; //calcula o nº de chances

      //exibe o nº de erros, conteúdo do vetor e nº de chances
      outErros.textContent = numErros + " (" + erros.join(", ") + ")";
      outChances.textContent = numChances;
      if (numChances == 0) {
        alert("Suas chances acabaram.");
        btApostar.disable = true;
        btJogar.className = "exibe";
        outDica.textContent = "Game Over! Número Sorteado: " + sorteado;
      } else {
        //usa operador ternário (condicional) para mensagem da dica
        var dica = numero < sorteado ? "maior" : "menor";
        outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
      }
    }
  }
  //limpa campo de entrada e posiciona cursor neste campo
  inNumero.value = "";
  inNumero.focus();
}

var btApostar = document.getElementById("btApostar");
btApostar.addEventListener('click', apostarNumero);

var btJogar = document.getElementById("btJogar");
function jogarNovamente() {
  location.reload();
}
btJogar.addEventListener('click', jogarNovamente);

