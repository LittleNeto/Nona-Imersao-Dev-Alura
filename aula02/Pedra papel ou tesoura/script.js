//código realizado no site codepen.io
nome = String(prompt('Qual é o seu nome?'))
idade = Number(prompt('Quantos anos você tem?'))
if (idade < 18) {
  alert(`Sinto muito ${nome}, mas você NÃO pode jogar jokempo`)
} else {
  alert(`Muito bem ${nome}, você irá jogar jokempo contra o computador no popup. Esteja preparado!`)
  escolhaJogador = Number(prompt('Digite: 1-pedra, 2-papel, 3-tesoura? '))
  escolhaComputador = Math.floor(Math.random() * 3) + 1
  
  if (escolhaJogador < 1 || escolhaJogador > 3) {
    alert('Esse valor não está válido, por favor tente de novo')
  } else {
  
  
    //jogador pedra, computador pedra --> EMPATE
    //jogador papel, computador papel --> EMPATE
    //jogador tesoura, computador tesoura --> EMPATE

    if (escolhaJogador === escolhaComputador) {
      alert('empate!')
    }

    //jogador pedra, computador tesoura --> JOGADOR VENCE
    //jogador papel, computador pedra --> JOGADOR VENCE
    //jogador tesoura, computador papel --> JOGADOR VENCE

    else if((escolhaJogador === 1 && escolhaComputador === 3) ||
           (escolhaJogador === 2 && escolhaComputador === 1) ||
           (escolhaJogador === 3 && escolhaComputador === 2)) {
      alert(`Jogador venceu, computador ${escolhaComputador == 1 ? 'pedra' : escolhaComputador == 2 ? 'papel' : 'tesoura'}`)
    }

    //jogador pedra, computador papel --> COMPUTADOR VENCE
    //jogador papel, computador tesoura --> COMPUTADOR VENCE
    //jogador tesoura, computador pedra --> COMPUTADOR VENCE

    else if((escolhaJogador === 1 && escolhaComputador === 2) ||
           (escolhaJogador === 2 && escolhaComputador === 3) ||
           (escolhaJogador === 3 && escolhaComputador === 1)) {
      alert(`Computador venceu, escolheu ${escolhaComputador == 1 ? 'pedra' : escolhaComputador == 2 ? 'papel' : 'tesoura'}`)
    }
    alert(`Ambos jogaram bem, PARABÉNS!\nSe quiser jogar de novo, execute novamente esse programa. Nos vemos em breve!`)
  }

}