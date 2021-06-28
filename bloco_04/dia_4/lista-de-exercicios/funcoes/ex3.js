function retornaMenorValor (valor){
  let menorValor = 0;
  let index = 0;
  for(let i in valor){
    if (valor[i] < menorValor) {
      menorValor = valor[i];
      index = i;
    }
  }
  return console.log(index);
}

retornaMenorValor([2, 4, 6, 7, 10, 0, -3])
