//código realizado no site codepen.io
let rodada = 1
let jogar = true
while (jogar) {
  let confirmacao = false
  let escolhaJogador = 0 // sem essa declaração, o popup simplesmente fechava sem executar o resto do programa (não sei se é um erro do codepen.io)
  while (!confirmacao) {
    escolhaJogador = Number(prompt(`Nível ${rodada}, vidro (1, 2 ou 3)?`))
    if (escolhaJogador < 1 || escolhaJogador > 3) {
      alert(`O número ${escolhaJogador} é inválido! Por favor, tente novamente`)
    } else {
      confirmacao = true
    }
  }
  let pisoQuebrado = Number(Math.floor(Math.random() * 3) + 1)
  if (escolhaJogador === pisoQuebrado) {
    alert('Vidro quebrou! Acabou o jogo para você')
    rodada = 4
    jogar = false
  } else {
    alert(`PASSOU! O vidro quebrado estava na ponte: ${pisoQuebrado}`)
    rodada += 1
    if (rodada > 3) {
      alert('Você venceu! PARABÉNS!')
      jogar = false
    }
  }
}