const wakeUp = () => console.log('Acordando!!');
const breakFast = () => console.log('Bora tomar café!!');
const sleep = () => console.log('Partiu dormir!!');

const doingThings = (func) => func();

// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(breakFast);
doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!