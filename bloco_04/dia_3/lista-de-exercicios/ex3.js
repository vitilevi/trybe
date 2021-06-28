let char = '*';
let space = ' ';
let n = 5;
let printPosition = n;
let linePrint = '';


for(let indexOut = 0; indexOut < n; indexOut += 1){
  for(let indexIn = 0; indexIn <= n ; indexIn += 1){
    if (indexIn < printPosition) {
      linePrint += space;
    }
    else {
      linePrint += char;
    }
  }
  console.log(linePrint);
  linePrint = '';
  printPosition -= 1;
}

