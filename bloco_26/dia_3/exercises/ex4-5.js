const fs = require('fs');

const writeFile = (path, content) => {
  fs.writeFileSync(path, content)
  return 'ok';
};

module.exports = writeFile;