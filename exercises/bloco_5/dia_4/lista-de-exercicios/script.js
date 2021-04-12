const buttonStle = document.getElementsByClassName('button-style');
const pText = document.getElementById('main-content');
const backgroundMenu = document.getElementsByClassName('button-background');
const colorMenu = document.getElementsByClassName('button-color');
const fontSizeMenu = document.getElementsByClassName('button-font-size');
const lineHeightMenu = document.getElementsByClassName('button-line-height');
const fontFamilyMenu = document.getElementsByClassName('button-font-family');

function changeBackground(event) {
  const color = event.target.innerText;
  pText.style.backgroundColor = color;
}

function changeColor(event) {
  const color = event.target.innerText;
  pText.style.color = color;
}

function changeFontSize(event) {
  const size = event.target.innerText;
  pText.style.fontSize = size;
}

function changeLineHeight(event) {
  const size = event.target.innerText;
  pText.style.lineHeight = size;
}

function changeFontFamily(event) {
  const fontChoice = event.target.innerText;
  pText.style.fontFamily = fontChoice;
}

function eventListeners() {
  for (let index = 0; index < backgroundMenu.length; index += 1) {
    backgroundMenu[index].addEventListener('click', changeBackground);    
  }
  for (let index = 0; index < backgroundMenu.length; index += 1) {
    colorMenu[index].addEventListener('click', changeColor);
  }
  for (let index = 0; index < backgroundMenu.length; index += 1) {
    fontSizeMenu[index].addEventListener('click', changeFontSize);
  }
  for (let index = 0; index < backgroundMenu.length; index += 1) {
    lineHeightMenu[index].addEventListener('click', changeLineHeight);
  }
  for (let index = 0; index < backgroundMenu.length; index += 1) {
    fontFamilyMenu[index].addEventListener('click', changeFontFamily);
  }
}

function initialize() {
  eventListeners();
}

window.onload = initialize;