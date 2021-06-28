const fatorial = number => {
  let result = 1;
  for (let index = 1; index <= number; index += 1) {
    result *= index;
  }
  return result;
}

console.log(fatorial(6));