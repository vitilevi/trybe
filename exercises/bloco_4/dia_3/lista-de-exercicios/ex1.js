let n = 3;
let repeat = '';
let char = '*';

if (n > 1){
  for(let i = 0; i < n; i += 1){
    repeat += char;
    if (repeat.length >= n){
      for(let i = 0; i < n; i += 1){
        console.log(repeat);
      }     
    }
  }
} else {
  console.log('Inválido');
}

