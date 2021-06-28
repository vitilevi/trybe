const hydrate = (str) => {
  const drinks = [];
  str.split(' ').forEach(el => Number.isInteger(Number.parseInt(el)) ? drinks.push(Number.parseInt(el)) : null);
  const num = drinks.reduce((acc, curr) => acc + curr, 0);
  return num === 1? '1 copo de água' : `${num} copos de água`; 
}

module.exports = hydrate;
