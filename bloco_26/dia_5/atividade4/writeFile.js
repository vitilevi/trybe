const fs = require('fs/promises');

const readFile = () => {
  return fs.readFile('./teams.json', 'utf-8').then((res) => JSON.parse(res));
}

const writeFile = async(content) => {
  const file = await readFile();
  await fs.writeFile('./teams.json', JSON.stringify([...file, content])).then(() => console.log('Arquivo escrito com sucesso!'));
};

module.exports = {
  writeFile,
  readFile,
};