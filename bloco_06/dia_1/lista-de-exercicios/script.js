const states = [
{ name: 'Selecione um estado', acronym: '',},
{ name: 'Acre', acronym: 'AC',},
{ name: 'Alagoas', acronym: 'AL',},
{ name: 'Amapá', acronym: 'AP',},
{ name: 'Amazonas', acronym: 'AM',},
{ name: 'Bahia', acronym: 'BA',},
{ name: 'Ceará', acronym: 'CE',},
{ name: 'Distrito Federal', acronym: 'DF',},
{ name: 'Espírito Santo', acronym: 'ES',},
{ name: 'Goiás', acronym: 'GO',},
{ name: 'Maranhão', acronym: 'MA',},
{ name: 'Mato Grosso', acronym: 'MT',},
{ name: 'Mato Grosso do Sul', acronym: 'MS',},
{ name: 'Minas Gerais', acronym: 'MG',},
{ name: 'Paraná', acronym: 'PA',},
{ name: 'Paraíba', acronym: 'PB',},
{ name: 'Pará', acronym: 'PR',},
{ name: 'Pernambuco', acronym: 'PE',},
{ name: 'Piauí', acronym: 'PI',},
{ name: 'Rio de Janeiro', acronym: 'RJ',},
{ name: 'Rio Grande do Norte', acronym: 'RN',},
{ name: 'Rio Grande do Sul', acronym: 'RS',},
{ name: 'Rondonia', acronym: 'RO',},
{ name: 'Roraima', acronym: 'RR',},
{ name: 'Santa Catarina', acronym: 'SC',},
{ name: 'Sergipe', acronym: 'SE',},
{ name: 'São Paulo', acronym: 'SP',},
{ name: 'Tocantins', acronym: 'TO',},
];

const selectorInput = document.getElementById('input-state');
const submitButton = document.getElementById('button-submit');
const clearButton = document.getElementById('button-clear');
const names = ['Name', 'Email', 'Cpf', 'Address', 'State', 'Home', 'Resume', 'Job-role', 'Job-description', 'Job-start'];

function createStates() {
  for (let index = 0; index < states.length; index += 1) {
    const stateOption = document.createElement('option');
    stateOption.innerText = states[index].name;
    stateOption.name = 'state';
    stateOption.value = states[index].acronym;
    selectorInput.appendChild(stateOption); 
  }
}

function returnError() {
  alert('Insira uma data válida');
}

function separateDateInput() {
  const dateInput = document.getElementById('input-job-start');
  let array = dateInput.value;
  let splittedArray = array.split('/');
  let fixedArray =[];
  for (let index = 0; index < splittedArray.length; index += 1) {
    fixedArray.push(Number.parseInt(splittedArray[index]));
  }
  return fixedArray;
}

// Configurar o check de campos vazios
function checkEmptyFields() {
  const checkForm = document.getElementById('form-data');
  const checkFormValues = new FormData(form);
  for (let index = 0; index < names.length; index += 1) {
    const element = array[index];
    
  }
}

function checkValidDate() {
const date = separateDateInput();
  if (date[0] < 0 || date[0] > 30) {
    returnError();
    return;
  } if (date[1] < 0 || date[1] > 12) {
    returnError();
    return;
  } if (date[2] < 1900) {
    returnError();
  }
}

function getForm(setFieldSet) {
  const form = document.getElementById('form-data');
  const formValues = new FormData(form);
  for (let index = 0; index < names.length; index += 1) {
    const values = formValues.get(names[index]);
    const paragraph = document.createElement('p');
    paragraph.innerText = `${names[index]}: ${values}`;
    setFieldSet.appendChild(paragraph);
  }
}

function createForm() {
  const divResume = document.getElementById('form-resume');
  const setFieldSet = document.createElement('fieldset');
  const legendTag = document.createElement('legend');
  legendTag.innerText = 'Resumo';
  setFieldSet.appendChild(legendTag);
  divResume.appendChild(setFieldSet);
  getForm(setFieldSet);
}

function createEventListeners() {
  submitButton.addEventListener('click', preventForm);
}

function preventForm(event) {
  event.preventDefault();
  checkValidDate();
  createForm();
}

function init() {
  createEventListeners();
  createStates();
}

window.onload = init;
