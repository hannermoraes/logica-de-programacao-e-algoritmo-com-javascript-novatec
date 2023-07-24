function incluirAposta() {
  //referência aos elementos de entrada de dados da o página
  var inNome = document.getElementById("inNome");
  var inPeso = document.getElementById("inPeso");

  var nome = inNome.value;  //entrada do campo de nome
  var peso = Number(inPeso.value); //entrada do campo de pesa (em gramas)

  //se vazio ou Not-Number
  if (nome == "" || peso == 0 || isNaN(peso)) {
    alert("Informe nome e peso da aposta");   //exibe alerta em mensagem
    inNome.focus();   //direciona o cursor para o campo de inserção do nome
    return;
  }

  //chama a function para verificar se o peso já foi apostado
  if (localStorage.getItem("melanciaNome")) {
    //obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
    var melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
    var melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
    //salva os dados no localStorage 
    localStorage.setItem("melanciaNome", melanciaNome);
    localStorage.setItem("melanciaPeso", melanciaPeso);
  } else {  //se não, é a primeira aposta (não tem ";")
    localStorage.setItem("melanciaNome", nome);  //salva dados
    localStorage.setItem("melanciaPeso", peso);  //salva dados
  }
  mostrarApostas();   //chama a function que mostra as apostas já salvas

  inNome.value = "";  //limpa os campos de formulário
  inPeso.value = "";

  inNome.focus();  //joga o foco (cursor) no campo InNome
}
//cria referência ao botão e associa a ocorrência do evento click à function
var btApostar = document.getElementById("btApostar");
btApostar.addEventListener('click', incluirAposta);



function verApostaExiste(peso) {
  var existe = false; //valor inicial precisa ser false

  //se existe algum dado salvo em localStorage
  if (localStorage.getItem("melanciaPeso")) {
    //obtém seu conteúdo dividindo a sting em itens de vetor
    var pesos = localStorage.getItem("melanciaPeso").split(";");

    //verifica se existe com indexOf
    //O peso deve ser convertido em string pois o funcionamento do vetor é em string
    if (pesos.indexOf(peso.toString()) >= 0) {
      existe = true;   //apenas nesse caso troca o valor do flag
    }
  }
  return existe;  //retorna true ou false
}

function mostrarApostas() {
  //cria referência ao elemento que exibe as apostas
  var outApostas = document.getElementById("outApostas");
  //se não há apostas armazenadas em localStorage
  if (!localStorage.getItem("melanciaNome")) {
    //limpa o espaço de exibição de apostas (para quando "limpar apostas")
    outApostas.textContent = "";
    return;  //retorna (não executando os comandos abaixo)
  }

  //obtém o conteúdo das variáveis salvas no localStorage, separando-as
  var nomes = localStorage.getItem("melanciaNome").split(";");
  var pesos = localStorage.getItem("melanciaPeso").split(";");

  var linhas = "";   //acumula as linhas a serem exibidas

  //repetição para percorrer todos os elementos do vetor
  for (var i = 0; i < nomes.length; i++) {
    //concatena a linha do nome dos apostadores e suas apostas 
    linhas += nomes[i] + " - " + pesos[i] + "gr \n";
  }
  outApostas.textContent = linhas;
  //exibe as linhas (altera o conteúdo do elemento outApostas)
}
//chama a function quando a página é carregada, para mostrar apostas salvas
mostrarApostas();

function verificarVencedor() {

  //se não há apostas armazenadas no localStorage
  if (!localStorage.getItem("melanciaNome")) {
    alert("Não há apostas cadastradas");
    return;  //retorna e não executa os comandos abaixo
  }
  //solicita o peso correto da melancia 
  var pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

  //se não informou, retorna
  if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
    return;
  }
  //obtém os dados armazenados, separando-os em elementos de vetor 
  var nomes = localStorage.getItem("melanciaNome").split(";");
  var pesos = localStorage.getItem("melanciaPeso").split(";");

  //valor inicial para vencedor é o (primeiro) a apostar
  var vencedorNome = nomes[0];
  var vencedorPeso = Number(pesos[0]);

  //percorre as apostas
  for (var i = 1; i < nomes.length; i++) {

    //calcula a diferença de peso do "vencedor" e da aposta atual
    difVencedor = Math.abs(vencedorPeso - pesoCorreto);
    difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);   //para este elemento
    //se a diferença na aposta atual (no for) for menor que a do "vencedor"
    if (difAposta < difVencedor) {
      vencedorNome = nomes[i];  //troca o "vencedor"
      vencedorPeso = Number(pesos[i]);   //para este elemento
    }
  }
  // monta a mensagem com dados do vencedor
  var mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr";
  mensagem += "\n------------------------------------------------";
  mensagem += "\nVencedor: " + vencedorNome;
  mensagem += "\nAposta: " + vencedorPeso + "gr";
  alert(mensagem);
}
var btVencedor = document.getElementById("btVencedor");
btVencedor.addEventListener('click', verificarVencedor);


function limparApostas() {
  //solicita permissão para excluir apostas
  if (confirm("Confirmar exclusão de todas as apostas?")) {
    localStorage.removeItem("melanciaNome");
    localStorage.removeItem("melanciaPeso");
    mostrarApostas();
  }
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener('click', limparApostas);