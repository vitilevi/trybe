function func () {
  return new Promise((resolve, reject) => {
    const array = [];
    for (let index = 0; index <= 10; index += 1) array.push(Math.ceil(Math.random()*50)**2);
    const sum = array.reduce ((acc, curr) => acc + curr, 0);
    if (sum > 8000) {
      resolve();
    } else {
      reject();
    }
  })
}

func()
.then(el => console.log('Promise resolvida'))
.catch(el => console.log('Promise rejeitada'));