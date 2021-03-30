function maisRepeticoes(array){
  let numeroMaisRepetido = 0;
  let repeticoes = 0;
  let index = 0;
  for(let indexOut in array){
    for(let indexIn = 1 ; indexIn < array.length; indexIn += 1){
      if(array[indexOut] === array[indexIn]){
        numeroMaisRepetido = array[indexIn];
        repeticoes += 1;
        index = indexIn;
      }
    }   
  }
  return console.log(numeroMaisRepetido);
}

maisRepeticoes([2, 3, 2, 5, 8, 2, 3]);


// criar primeiro loop começando do zero
// criar segundo loop começando do um
// verifica
// verificar se o zero é igual ao 1, se sim adiciona 1 ao contador de repetições