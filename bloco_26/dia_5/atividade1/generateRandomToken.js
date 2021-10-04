const getRandomToken = () => {
  let token = '';
  const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_'];
  for (let index = 0; index < 12; index += 1) {
    const randomIndex = Math.floor(Math.random() * (arr.length));
    token += arr[randomIndex];
  }
  return token;
};

module.exports = getRandomToken;