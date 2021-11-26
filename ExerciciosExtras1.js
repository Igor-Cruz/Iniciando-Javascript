//Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.

const vetor = [1, 2, 3, 4, 5]
const somaTotal = (valorAntigo, valorNovo) => valorAntigo + valorNovo

const soma = vetor.reduce(somaTotal, 0)
console.log('Soma:', soma)

/* Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.
*/

const par = num => num % 2 === 0
const pares = vetor.filter(par)

const somaP = (total, atual) => total + atual
const somaPares = pares.reduce(somaP, 0)
console.log(somaPares)

/* Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter. */

const impar = valor => valor % 2 !== 0
const somaI = (atualI, valorI) => atualI + valorI
const soma2 = vetor.filter(impar).reduce(somaI)
console.log(soma2)
