var numeroSecreto = parseInt(Math.random() * 11);
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = document.getElementById("valor").value;
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou, parabéns!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Seu chute foi alto, tente um número menor!";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Seu chute foi baixo, tente um número maior!";
  }
}
