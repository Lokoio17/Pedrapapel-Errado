let pontuacaoPessoa = 0;
let pontuacaoMaquina = 0;

const jogadaM = () => {
  const escolhaM = ["Pedra","Papel","Tesoura"];
  return escolhaM[Math.floor(Math.random() * escolhaM.length)].toLowerCase();
};
const rodada = () => {
  const resultado = document.getElementById("resultado");
  const jogadaP = document.querySelector("input[name='opcao']:checked").value;
  const jogadaAmbos = jogadaP+jogadaM();
  const empate = jogadaP===jogadaM()
  if(empate){resultado.innerHTML="O jogo deu empate"
  }
  switch (jogadaAmbos) {
    case "pedratesoura":
      pontuacaoPessoa++;
      resultado.innerText = "Você Venceu";
      break;
    case "papelpedra":
      pontuacaoPessoa++;
      resultado.innerText = "Você Venceu"
      break;
    case "tesourapapel":
      pontuacaoPessoa++;
      resultado.innerText = "Você Venceu";
      break;
    case "tesourapedra":
      pontuacaoMaquina++;
      resultado.innerText = "A máquina venceu";
      break;
    case "pedrapapel":
      pontuacaoMaquina++;
      resultado.innerText = "A máquina venceu";
      break;
    case "papeltesoura":
      pontuacaoMaquina++;
      resultado.innerText = "A máquina venceu";
  }
  document.getElementById("score").innerText=`A sua pontuação é:${pontuacaoPessoa} A pontuação da maquina é ${pontuacaoMaquina}`;
};
const botao = document.querySelector("#botao");
botao.addEventListener("click", rodada);
