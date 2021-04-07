function maiorQuantidadeCaracteres (nomes){
  let maisCaracteres = 0;
  let index = 0;
  for(let i in nomes){
    if(nomes[i].length > maisCaracteres){
      maisCaracteres = nomes[i].length;
      index = i;
    }    
  }
  return console.log(nomes[index]);
}

maiorQuantidadeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);