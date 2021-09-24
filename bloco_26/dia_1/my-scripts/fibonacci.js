const rl = require('readline-sync');

const fibonacci = (n) => {
  if(n < 0) return 'Insira um número maior do que 0';
  const result = [];
  for(let index = 0; index < n; index += 1) {
    if(result.length < 2) {
      result.push(1);
    } else {
      const nextNumber = result[result.length - 1] + result[result.length - 2];
      result.push(nextNumber);
    }
  }
  return result;
};

const selectedNumber = rl.question('Quantos números da sequencia de fibonacci você quer? ');

console.log(fibonacci(selectedNumber));