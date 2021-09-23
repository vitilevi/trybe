const rl = require('readline-sync');
const velocidadeMedia = (distancia, tempo) => distancia / tempo;

const distancia = rl.questionInt('Insira uma distância ');
const tempo = rl.questionInt('Insira um tempo ');

console.log(velocidadeMedia(distancia, tempo));