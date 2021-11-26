//c-like


const valor = 10
if (valor === 10) {

}

let valor2 = 20
console.log(valor, valor2)

const objeto = {
  chave: 'valor1',
  chave2: 'valor2'
}
console.log(objeto)

const str = 'Igor Cruz'
console.log(str)

//functions are first class citizens
const soma = function (a, b) {
  return a + b
}
const calculadora = function (op, a, b) {
  return op(a, b)
}
console.log(calculadora(soma, 3, 7))

//map,filter,reduce
//map converte a função para um outro valor *Traduzir/Mapear*
const vetor = [1, 2, 3, 4, 5]
const dobrado = vetor.map(function (item) {
  return item * 2
})
console.log('Valor Dobrado:', dobrado)

//Filter = filtrar | 
const pares = vetor.filter(function (item) {
  return item % 2 === 0
})
console.log('Pares:', pares)

const paresDobrado = vetor.filter(function (item) {
  return item % 2 === 0
}).map(function (item) {
  return item * 2
})
console.log('ParesDobrado:', paresDobrado)

//Arrow functions
const dobrar = item => item * 2
const somenteP = item => item % 2 === 0
const ParesDobrado = vetor.filter(somenteP).map(dobrar)
console.log(ParesDobrado)

//Reduce - valor cumulativo / somar
const somar = (acumulado, atual) => acumulado + atual
const somatorio = ParesDobrado.reduce(somar, 0)
console.log('Somar com Reduce:', somatorio)
