const function1 = string => `Tryber ${string} aqui!`;
const result = function1('bebeto');

const skills = ['HTML', 'CSS', 'JavaScript', 'Trabalho em equipe', 'Comunicação'];

const function2 = name => `${name} Minhas cinco principais habilidades são: ${skills.sort()}`;

console.log(function2(result));