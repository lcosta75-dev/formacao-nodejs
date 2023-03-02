var calculadora = require("./calc")

var multiplicacao = calculadora.mult(10,20)
var divisao = calculadora.div(10,2)
var soma = calculadora.soma(4,4)
var subtracao = calculadora.sub(4,2)

console.log(multiplicacao)
console.log(divisao)
console.log(soma)
console.log(subtracao)
console.log(calculadora.minhaVar)