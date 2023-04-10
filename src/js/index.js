let adviceId = document.getElementById('id_conselho');
let AdviceDescription = document.getElementById('conselho_texto');

document.getElementById('botao').addEventListener('click', () => {
  tirarConselho()
})

async function criarConselhos(){
  const url = "https://api.adviceslip.com/advice"
  const resposta = await fetch(url);
  return await resposta.json()
}

async function tirarConselho(){
  const conselho = await criarConselhos();
  const conselhoId = `Advice #${conselho.slip.id}`
  const ConselhoTexto = `"${conselho.slip.advice}"`

  adviceId.innerHTML = conselhoId;
  AdviceDescription.innerHTML = ConselhoTexto;
}



