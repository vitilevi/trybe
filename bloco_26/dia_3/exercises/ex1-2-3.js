const retornaNum = (n) => {
  if(typeof n !== 'number') return 'o valor deve ser um número';
  if(n === 0) return 'neutro';
  return n < 0? 'negativo' : 'positivo';
};

module.exports = retornaNum;