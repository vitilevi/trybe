function func () {
  return new Promise((resolve, reject) => {
    const array = [];
    for (let index = 0; index <= 10; index += 1) array.push(Math.ceil(Math.random()*50)**2);
    const sum = array.reduce ((acc, curr) => acc + curr, 0);
    if (sum < 8000) {
      resolve(sum);
    } else {
      reject();
    }
  })
}
const divide = [2, 3, 5, 10]
func()
.then(sum => divide.map(el => sum/el))
.then(el => el.reduce((acc, curr) => acc+curr, 0))
.then(result => console.log(Math.round(result)))
.catch(el => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));