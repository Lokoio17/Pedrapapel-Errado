let pontuacaoPessoa = 0;
let pontuacaoMaquina = 0;

const resultado = document.getElementById("resultado");

const jogadaP = document.querySelector("input[name='opcao']:checked").val().toLowerCase();

const jogadaM = () => {
  const escolhaM = ["Pedra", "Papel", "Tesoura"];
  return escolhaM[Math.floor(Math.random() * escolhaM.length)].toLowerCase();
};

const vitoriaM = () => {
  return
    ++pontuacaoMaquina + resultado.innerText="A maquina venceu"
 
};
const vitoriaP = () => {
  return ++pontuacaoPessoa + resultado.innerText="Voce venceu"
};

const rodada= () => {
  switch (jogadaP && jogadaM()) {
    case jogadaP == jogadaM:
      {
        resultado.innerText("O jogo deu empate");
      }
      break;
    case JogadaP == "pedra" && jogadaM() == "tesoura":
      {
        vitoriaP();
      }
      break;
    case jogadaP == "papel" && jogadaM() == "pedra":
      {
        vitoriaP();
      }
      break;
    case jogadaP == "tesoura" && jogadaM() == "papel":
      {
        vitoriaP();
      }
      break;
    case jogadaM() == "pedra" && jogadaP == "tesoura":
      {
        vitoriaM();
      }
      break;
    case jogadaM() == "papel" && jogadaP == "pedra":
      {
        vitoriaM();
      }
      break;
    case jogadaM() == "tesoura" && jogadaP == "papel":
      {
        vitoriaM();
      }
      break;
  }
};
const botao = document.getElementById("botao");
botao.addEventListener("click",rodada);
