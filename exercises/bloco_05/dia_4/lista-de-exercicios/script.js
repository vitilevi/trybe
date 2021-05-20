const buttonStle = document.getElementsByClassName('button-style');
const pText = document.getElementById('main-content');
const backgroundMenu = document.getElementsByClassName('button-background');
const colorMenu = document.getElementsByClassName('button-color');
const fontSizeMenu = document.getElementsByClassName('button-font-size');
const lineHeightMenu = document.getElementsByClassName('button-line-height');
const fontFamilyMenu = document.getElementsByClassName('button-font-family');

function checkForLocalStorage() {
  const backgroundColorStorage = localStorage.getItem('backgroundColor');
  const colorStorage = localStorage.getItem('color');
  const fontSizeStorage = localStorage.getItem('fontSize');
  const lineHeightStorage = localStorage.getItem('lineHeight');
  const fontFamilyStorage = localStorage.getItem('fontFamily');

  if (backgroundColorStorage) {
    pText.style.backgroundColor = backgroundColorStorage;
  }
  if (colorStorage) {
    pText.style.color = colorStorage;
  }
  if (fontSizeStorage != undefined) {
    pText.style.fontSize = fontSizeStorage;
  }
  if (lineHeightStorage != undefined) {
    pText.style.lineHeight = lineHeightStorage;
  }
  if (fontFamilyStorage != undefined) {
    pText.style.fontFamily = fontFamilyStorage;
  }
}

function changeBackground(event) {
  const color = event.target.innerText;
  pText.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}

function changeColor(event) {
  const color = event.target.innerText;
  pText.style.color = color;
  localStorage.setItem('color', `${color}`);
}

function changeFontSize(event) {
  const size = event.target.innerText;
  pText.style.fontSize = size;
  localStorage.setItem('fontSize', `${size}`);
}

function changeLineHeight(event) {
  const size = event.target.innerText;
  pText.style.lineHeight = size;
  localStorage.setItem('lineHeight', `${size}`);
}

function changeFontFamily(event) {
  const fontChoice = event.target.innerText;
  pText.style.fontFamily = fontChoice;
  localStorage.setItem('fontFamily', `${fontChoice}`);
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
  checkForLocalStorage();
}

window.onload = initialize;