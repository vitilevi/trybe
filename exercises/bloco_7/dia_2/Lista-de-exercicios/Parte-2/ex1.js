const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
const addProperty = (obj, key, value) => obj[key] = value;
addProperty(lesson2, 'turno', 'manhã');

// 2
const listKeys = (obj) => Object.keys(obj);
console.log(`Keys do objeto: ${listKeys(lesson2)}`);

// 3
const sizeOfObject = (fn) => fn.length;
console.log(`\nObjeto de tamanho: ${sizeOfObject(listKeys(lesson1))}\n`);

// 4
const listValues = (obj) => Object.values(obj);
console.log(`${listValues(lesson2)}\n`);

// 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6
const calculateStudents = obj => {
  const students = [obj.lesson1.numeroEstudantes, obj.lesson2.numeroEstudantes, obj.lesson3.numeroEstudantes]
  return students[0]+students[1]+students[2];
}
console.log(`\n${calculateStudents(allLessons)}\n`);

// 7
const getKeyValue = (obj, index) => {
  const getKeys = Object.keys(obj);
  return obj[getKeys[index]];
}
console.log(getKeyValue(lesson1, 2));

// 8
const verifyInput = (obj, key, value) => {
  const checkKey = Object.keys(obj);
  const checkValue = Object.values(obj).includes(value);
  let check = false;
  for (let index = 0; index < checkKey.length; index += 1) {
    if (key === checkKey[index]) check = true;
  }
  return check && checkValue;
}
console.log(`\n${verifyInput(lesson3, 'turno', 'manhã')}\n`);

// Bônus 1
const getMathStudents = (obj) => {
  let numberOfStudents = 0;
  for (let object of Object.keys(obj)) {
    if(Object.values(obj[object])[0] === 'Matemática') {
      numberOfStudents += Number.parseInt(Object.values(obj[object])[1]);
    }
  }
  return console.log(`${numberOfStudents} alunos assistiram a aula de Matemática`);
}

getMathStudents(allLessons);