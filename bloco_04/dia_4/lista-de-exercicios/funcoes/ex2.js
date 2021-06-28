function retornaMaiorValor (valor){
  let maiorValor = 0;
  let index = 0;
  for(let i in valor){
    if (valor[i] > maiorValor) {
      maiorValor = valor[i];
      index = i;
    }
  }
  return console.log(index);
}

retornaMaiorValor([2, 3, 6, 7, 10, 1])
