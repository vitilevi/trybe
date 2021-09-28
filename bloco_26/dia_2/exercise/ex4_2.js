const fs = require('fs').promises;
const simpsons = './exercise/simpsons.json';

const getById = (id) => {
  fs.readFile(simpsons, 'utf-8')
    .then((res) => {
      const obj = JSON.parse(res).find((el) => Number(el.id, 10) === id) || {};
      return new Promise((resolve, reject) => {
        if (Object.keys(obj).length === 0) return reject('id não encontrado');
        resolve(console.log(`${obj.id} - ${obj.name}`));
      })
    })
    .catch((e) => console.error(e));  
}

getById(2)