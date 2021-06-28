function func () {
  const array = [];
  for (let index = 0; index <= 10; index += 1) array.push(Math.ceil(Math.random()*50)**2);
  const sum = array.reduce ((acc, curr) => acc + curr, 0);
  if (sum < 8000) {
    return sum;
  }
  throw new Error();
}
const divide = [2, 3, 5, 10]
const sumOfArray = (sum) => divide.map((el) => sum/el).reduce((acc, curr) => acc + curr, 0);

const execute = async () => {
  try {
    const sum = await func();
    const sumOfSum = await Math.round(sumOfArray(sum));
    console.log(sumOfSum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

execute();

