const rl = require('readline-sync');

const scripts = [
  {
    name: 'imc',
    script: './imc.js'
  },
  {
    name: 'velocidade',
    script: './velocidade.js'
  },
  {
    name: 'sorteio',
    script: './sorteio.js'
  },
  {
    name: 'factorial',
    script: './factorial.js'
  } ,
  {
    name: 'fibonacci',
    script: './fibonacci.js'
  }
];

console.log('Escolha um script');
scripts.forEach(({name}, index) => {
  console.log(`${index + 1} - ${name}`);
})

const choosen = rl.question();
const selectedScript = scripts[choosen - 1];

if(!selectedScript) return console.log('Não encontrei esse script');

require(selectedScript.script);