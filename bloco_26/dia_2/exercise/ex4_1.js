const fs = require('fs').promises;
const simpsons = './exercise/simpsons.json';

const readFile = () => {
  fs.readFile(simpsons, 'utf-8')
    .then((res) => {
      JSON.parse(res).forEach(({id, name}) => {
        console.log(`${id} - ${name}`);
      })
    })
    .catch((e) => console.error(e));
}

readFile();