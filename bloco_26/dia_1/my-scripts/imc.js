const rl = require('readline-sync');

const calcIMC = (peso, altura) => (peso / ((altura) ** 2) * 10000) ;

const peso = rl.questionFloat("Qual o seu peso?");
const altura = rl.questionInt("Qual a sua altura?");
const res = calcIMC(peso, altura);

if (res < 18.5) console.log('Abaixo do peso (magreza)')
if (res > 18.5 && res < 24.9) console.log('Peso normal ')
if (res > 25.0 && res < 29.9) console.log('Acima do peso (sobrepeso)')
if (res > 30.0 && res < 34.9) console.log('Obesidade grau I')
if (res > 35.0 && res < 39.9) console.log('Obesidade grau II')
if (res > 40.0) console.log('Obesidade graus III e IV')