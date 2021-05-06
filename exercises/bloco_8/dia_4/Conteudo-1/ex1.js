const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const fun = (num) => num.filter(el => el % 2 === 0).reduce((a, b) => a + b);

const fun1 = (a, b) => (b % 2 === 0) ? a + b : a; 
console.log(numbers.reduce(fun1));