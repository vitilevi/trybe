const techList = (array, name) => array.length === 0? 'Vazio!' : array.sort().map(el => ({tech: el, name: name}));

module.exports = techList;
