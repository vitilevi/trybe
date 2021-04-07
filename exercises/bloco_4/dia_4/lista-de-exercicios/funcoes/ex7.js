function verificaFimPalavra(word, ending){
  word = word.split('');
  ending = ending.split('');
  results = checkLetter(word, ending);
  return results;
}

function checkLetter(word, ending) {
  let results = false;
  let indexOut = 0;
  for (let indexIn = word.length - ending.length ; indexIn < word.length; indexIn += 1) {
    if (word[indexIn] === ending[indexOut]) {
      results = true;
    } 
    else {
      results = false;
      break
    }
    indexOut += 1;
  }
  return results;
}

console.log(verificaFimPalavra('trybe', 'be'));