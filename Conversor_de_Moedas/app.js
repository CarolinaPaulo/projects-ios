
const botao = document.querySelector('button')

botao.onclick = () => {
//Exibe pergunta para usuário e armazena o valor inserido em uma variável, que já transforma a string inputada para um valor float, que permite operações matemáticas  
var dolarValue = Number(document.querySelector('input').value.replace(',','.'))
console.log(dolarValue)

//Transforma o valor para reais, levando em consideração a cotação 1 dólar = 5,50 reais, fixa apenas 2 casas decimais no valor em reais e exibe o valor final para o usuário
  
document.querySelector('h2').innerHTML = 'R$ '+(dolarValue * 5.50).toFixed(2)
  
}
