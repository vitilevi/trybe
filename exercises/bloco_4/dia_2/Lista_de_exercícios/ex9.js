let array=[];

for(let index = 1; index <= 25; index += 1){
  array.push(index)
}

for (var divisao of array){
  divisao = divisao / 2
  console.log(divisao)
}