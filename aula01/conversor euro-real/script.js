//código realizado no site codepen.io
function conversor() {
    valor_euros = prompt("digite um valor em euros: ")
    valor_real = valor_euros * 6.1312
    valor_formatado = valor_real.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    alert(`R$${valor_formatado}`)
}