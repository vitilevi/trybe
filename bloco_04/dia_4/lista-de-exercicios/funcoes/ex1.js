function verificaPalindromo(palavra){
  let lowerWord = palavra.toLowerCase();
  let palindromo = lowerWord.split('').reverse();
 
  palindromo  = palindromo.join('');
  if (lowerWord === palindromo) 
    return console.log(true);
  return console.log(false);
}

verificaPalindromo('arara');
verificaPalindromo('desenvolvimento');