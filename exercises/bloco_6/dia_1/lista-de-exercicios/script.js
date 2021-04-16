const states = [
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

}

function separateDateInput() {
  // const dateInput = document.getElementById('input-job-start');
  let array = '13/10/2020';
  let splittedArray = array.split('/');
  let fixedArray =[];
  for (let index = 0; index < splittedArray.length; index += 1) {
    fixedArray.append(Number.parseInt(splittedArray[index]));    
  }
  console.log(fixedArray);
}

function checkDate(date) {
  if (value.length !== 10) {
    returnError();
  } else {

  }
}

function createEventListeners() {
  submitButton.addEventListener('click', preventForm);
}

function preventForm(event) {
  event.preventDefault();
  separateDateInput();
}

function init() {
  createStates();
}

window.onload = init;
