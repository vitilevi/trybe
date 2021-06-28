const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.age === age);
      if (animal) {
        return resolve(animal);
      };
      const msgError = 'Nenhum animal com essa idade!';
      return reject(msgError);
    }, 100);
  })
);

const getAnimalByAge = (age) => {
  return findAnimalByAge(age).then(result => result);
};

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalByAge(2).then(animal => {
        expect(animal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalByAge(42).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});