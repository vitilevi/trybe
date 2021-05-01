const hiredPerson = (nome) => {
  const email = nome.toLowerCase().split(' ');
  const obj = {
  Nome: `${nome}`,
  Email: `${email[0]}_${email[email.length - 1]}@trybe.com`,
};
  return obj;
};

const newEmployees = () => {
  const employees = {
    id1: hiredPerson('Pedro Guerra'),
    id2: hiredPerson('Luiza Drumond'),
    id3: hiredPerson('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees());