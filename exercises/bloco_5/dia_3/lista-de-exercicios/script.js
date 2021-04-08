function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// 1
const ulDays = document.getElementById('days');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let index = 0; index < dezDaysList.length; index += 1) {
  let li = document.createElement('li');
  li.innerText = `${dezDaysList[index]}`;
  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    li.className += 'holiday ';
  }
  if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25) {
    li.className += 'friday';
  }
  else {
    li.className += 'day';
  }
  ulDays.appendChild(li);
}

// 2
const buttonContainer = document.querySelector('.buttons-container');
let feriadoButton = document.createElement('button');
feriadoButton.id = 'btn-holiday';
feriadoButton.innerText = 'Feriados';
buttonContainer.appendChild (feriadoButton);

// 3
feriadoButton.addEventListener('click', function() {
  let holidayList = document.getElementsByClassName('holiday');
  if (holidayList[0].style.backgroundColor === 'white') {
    for (let index = 0; index < holidayList.length; index += 1){  
      holidayList[index].style.backgroundColor = 'rgb(238,238,238)';
    }
    return;
  }
  for (let index = 0; index < holidayList.length; index += 1){  
    holidayList[index].style.backgroundColor = 'white';
  }
})

// 4
let sextaButton = document.createElement('button');
sextaButton.id = 'btn-friday';
sextaButton.innerText = 'Sexta-feira';
buttonContainer.appendChild (sextaButton);

// 5
let fridayDays = [];
let fridayList = document.getElementsByClassName('friday');
for (let index = 0; index < fridayList.length; index += 1) {
  fridayDays[index] = fridayList[index].innerText; 
}
sextaButton.addEventListener('click', function() {
  if (fridayList[0].innerText !== 'Sexta-feira') {
    for (let index = 0; index < fridayList.length; index += 1){  
      fridayList[index].innerText = 'Sexta-feira';
    }
    return;
  }
  for (let index = 0; index < fridayList.length; index += 1){  
    fridayList[index].innerText = fridayDays[index];
  }
})

// 6
let li = document.getElementsByTagName('li');
console.log(li);
// let dayList = document.getElementsByClassName('.day')
for (let index = 9; index < li.length; index += 1) {
  li[index].addEventListener('mouseover', function(event){
    // for (let index = 0; index < li.length; index++) {
    li[index].style.fontSize = '65px';})

  li[index].addEventListener('mouseleave', function(){
    li[index].style.fontSize = '20px';
  })
}

// 7
