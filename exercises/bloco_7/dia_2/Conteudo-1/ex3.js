const carro = {
  cor: 'Amarelo',
  marca: 'Porsche'
}

const addProperty = (obj, key, value) => {
  obj[key] = `${value}`
  console.log(obj);
}

addProperty(carro, 'modelo', 911);