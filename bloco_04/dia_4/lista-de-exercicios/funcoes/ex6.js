function somatorioTotal (n){
  let numeroControle = n;
  let somatorio = n;
  for(let index = 0; index < n; index +=1){
    somatorio += index
  }
  return console.log(somatorio);
}

somatorioTotal(8);