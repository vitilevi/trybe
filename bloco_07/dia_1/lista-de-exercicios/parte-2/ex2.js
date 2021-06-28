const longestWord = frase => {
  const splitted = frase.split(' ');
  let longest = 0;
  let outIndex = 0;
  for (let index = 0; index < splitted.length; index += 1) {
    if (splitted[index].length > longest) {
      longest = splitted[index].length;
      outIndex = index;
    }    
  }
  return splitted[outIndex];
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));