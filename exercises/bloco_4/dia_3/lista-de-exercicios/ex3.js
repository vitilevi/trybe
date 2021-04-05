let repeat1 = '';
let repeat2 = '';
let result = '';
let char1 = '*';
let char2 = ' ';
let n = 3;


for(let indexMain = 0; indexMain < n; indexMain += 1){
  var indexOut = n-1
    for(indexOut; indexOut > 0; indexOut -=1){
      repeat2 += char2;
    }

    for(let indexSecondFor = 0; indexSecondFor < n; indexSecondFor += 1){
      repeat1 += char1;
    }
  result = repeat2 + repeat1
  console.log(result);
  repeat1 = '';
  repeat2 = '';
  if (indexOut > 0){
    indexOut -=1;
  }

}
// for(let i = 0; i < n; i += 1){
//   for(let i = n-1; i < 0; i -= 1){
//   repeat2 += char2
//   console.log(repeat2);
//   }
//   repeat1 += char1;
// }     
// console.log(repeat2);



