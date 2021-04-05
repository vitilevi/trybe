let n = 5;
let repeat = '';
let char = '*';

if (n > 1){
  for(let i = 0; i < n; i += 1){
    repeat += char;
        console.log(repeat);
      }     
    } else {
        console.log('Inválido');
}