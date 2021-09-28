const myFunc = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
      return reject("Informe apenas números");
    }
    const sum = (a + b) * c;
    if (sum < 50) return reject("Valor muito baixo");
    return resolve(sum);
  })
};

const randomNums = () => Math.floor(Math.random() * 100 + 1);

const tryFuncThenCatch =  () => {
  const a = randomNums();
  const b = randomNums();
  const c = randomNums();
  myFunc(a, b, c)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
};
tryFuncThenCatch();

const tryFuncAsyncAwait = async () => {
  const a = randomNums();
  const b = randomNums();
  const c = randomNums();
  try {
    const res = await myFunc(a, b, c);
    console.log(res);
  } catch(err) {
    console.log(err);
  }
}
tryFuncAsyncAwait();
