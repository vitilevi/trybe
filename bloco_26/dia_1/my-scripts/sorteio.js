const rl = require('readline-sync');

const game = () => {
  const number = rl.questionInt('Tente adivinhar qual o número sorteado: ');

  const sorteio = (number) => {
    const randomNumber = Math.floor((Math.random()) * 11);
    return number === randomNumber? "Parabéns, número correto!" : `Opa, não foi dessa vez. O número era ${randomNumber}`;
  }

  console.log(sorteio(number));

  const question = rl.question('Quer jogar novamente? s/n ');
  if (question === 'n') return;
  if (question !== 's') return console.log('Não entendi, jogo finalizado');

  game();  
};

game();
