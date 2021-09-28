const rl = require('readline-sync');

const factorial = (n) => {
  if(n < 0 || n === 0) return "Número inválido";
  return n === 1 ? n : n * factorial(n - 1)
};

const number = rl.questionInt('Insira um número para calcular o fatorial ');

console.log(factorial(number));