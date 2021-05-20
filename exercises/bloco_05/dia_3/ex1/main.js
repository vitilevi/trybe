const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
const techElement = document.getElementsByClassName('tech');

/*
1. Copie esse arquivo e edite apenas ele;
2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?
5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;
*/

// 2
function selectElement(event) {
  if (!techElement[0]) {
    event.target.className = 'tech';
    return
  } 
  else {
    event.target.className = '';
  }
}

divUm.addEventListener('dblclick', selectElement);
divDois.addEventListener('dblclick', selectElement);
divTres.addEventListener('dblclick', selectElement);

// 3
input.addEventListener('change', function() {
  let inputM = input
  document.querySelector('.tech').innerText = input.value;
  console.log(inputM);
})

// 4
myWebpage.addEventListener('dblclick', function() {
  window.open('https://vmfaria.com', '_blank');
});

// 5
myWebpage.addEventListener('mouseover', function() {
  myWebpage.style.color = '#C55'
})

myWebpage.addEventListener('mouseleave', function() {
  myWebpage.style.color = '#FFF'
})