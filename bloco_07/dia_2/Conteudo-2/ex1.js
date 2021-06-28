const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const printSkills = obj => {
  const skills = Object.keys(obj);
  for (let index = 0; index < skills.length; index += 1) {
    console.log(`${skills[index]} Nível: ${obj[skills[index]]}`);    
  }
}
console.log('Estudante 1: ')
printSkills(student1);
console.log('\nEstudante 2: ')
printSkills(student2);