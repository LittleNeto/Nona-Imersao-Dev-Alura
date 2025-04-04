//código realizado no site codepen.io
//preciso criar uma lista com os 3 jogadores
let personagem = ["", "", ""]
let viloes = ["", "", ""]
let forcaPersonagem = 0
let forcaViloes = 0
for (let i = 0; i < 3; i++) {
  personagem[i] = prompt(`Digite o nome do ${i + 1}º personagem`)
  //calcular a força de cada jogador e depois somar para saber a força do time
  forcaPersonagem += Math.floor(Math.random() * 10) + 1
}
let viloesPossiveis = ["Nazaré Tedesco", "Odete Roitmann", "Flora", "Carminha", "Laura Prudente da Costa"]
for (let i = 0; i < 3; i++) {
  let indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length)
  viloes[i] = viloesPossiveis[indiceAleatorio]
  viloesPossiveis.splice(indiceAleatorio, 1) // remove vilão já escolhido
  forcaViloes += Math.floor(Math.random() * 10) + 1
}
alert(`Seu time: ${personagem}\nPersonagens do computador: ${viloes}`)
//Comparar a força dos dois times para saber quem venceu
if (forcaViloes < forcaPersonagem) {
  alert(`Seu personagem é muito forte! Você ganhou a disputa do cabo de guerra! Sua força foi ${forcaPersonagem}`)
} else if (forcaViloes > forcaPersonagem) {
  alert(`Seu time é fraquinho. O computador ganhou o cabo de guerra com força de ${forcaViloes}`)
} else {
  alert('Os dois times tem a mesma força! Vocês empataram!')
}