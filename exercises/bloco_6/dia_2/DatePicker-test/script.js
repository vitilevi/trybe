const date = document.getElementById('date').DatePickerX;
const submitButton = document.getElementById('button');
// datePicker.format('dd/mm/yyyy');


function setDate() {
  date.format = ('dd/mm/yyyy');
  date.min = '01/01/1900';
  date.max = '01/05/2021';
  date.clearButton = 'false';
}

function blockDefault(event) {
  event.preventDefault();
  
}

function init() {
  setDate();
  date.init({
    // date.format: 'dd/mm/yyyy'
    // date.clearButton: false;
  });
  submitButton.addEventListener('click', blockDefault)
}

window.onload = init;