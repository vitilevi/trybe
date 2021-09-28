const fs = require('fs').promises;
const simpsons = './exercise/simpsons.json';


const readAndModifyFile = async () => {
  const simpson = await fs.readFile(simpsons, 'utf-8')
    .then((res) => JSON.parse(res))
  const newArray = simpson.filter((el) => el.id <= '4')
  await fs.writeFile('./exercise/simpsonFamily.json', JSON.stringify(newArray))
  console.log(newArray)
}
readAndModifyFile()