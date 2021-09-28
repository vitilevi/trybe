const fs = require('fs').promises;
const simpsons = './exercise/simpsons.json';
const simpsonFamily = './exercise/simpsonFamily.json'


const readAndModifyFile = async () => {
  const simpson = await fs.readFile(simpsons, 'utf-8')
    .then((res) => JSON.parse(res))
  const maggie = simpson.find((el) => el.name === 'Maggie Simpson')
  const family = await fs.readFile(simpsonFamily, 'utf-8')
    .then((res) => JSON.parse(res))
  const newFamily = family.filter((el) => el.name !== 'Nelson Muntz')
  newFamily.push(maggie)
  await fs.writeFile('./exercise/simpsonFamily.json', JSON.stringify(newFamily))
}
readAndModifyFile()