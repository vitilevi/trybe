const generateRandom = () => Math.round(Math.random() * 5);
const game = (n) => (n === generateRandom())? `Parabéns você ganhou`: `Tente novamente`;
console.log(game(1));