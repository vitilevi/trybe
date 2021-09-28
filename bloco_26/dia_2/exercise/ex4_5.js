const fs = require('fs').promises;
const simpsons = './exercise/simpsons.json';
const simpsonFamily = './exercise/simpsonFamily.json'


const readAndModifyFile = async () => {
  const simpson = await fs.readFile(simpsons, 'utf-8')
    .then((res) => JSON.parse(res))
  const nelson = simpson.find((el) => el.name === 'Nelson Muntz')
  const family = await fs.readFile(simpsonFamily, 'utf-8')
    .then((res) => JSON.parse(res))
  family.push(nelson)
  await fs.writeFile('./exercise/simpsonFamily.json', JSON.stringify(family))
}
readAndModifyFile()