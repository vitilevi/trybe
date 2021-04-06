//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let hBody = document.createElement('h1');
let body = document.body;
hBody.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(hBody);
//2 Adicione a tag div com a classe main-content como filho da tag body ;
let divMainContent = document.createElement('div');
divMainContent.className = 'main-content';
body.appendChild(divMainContent);
//3 Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let divCenterContent = document.createElement('div');
divCenterContent.className = 'center-content';
divMainContent.appendChild(divCenterContent);
//4 Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
p.innerText = 'Criado e atualizado tag P dinamicamente';
divCenterContent.appendChild(p);
//5 Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let divLeftContent = document.createElement('div');
divLeftContent.className = 'left-content';
divMainContent.appendChild(divLeftContent);
//6 Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let divRightContent = document.createElement('div');
divRightContent.className = 'right-content';
divMainContent.appendChild(divRightContent);
//7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
divLeftContent.appendChild(img);
//8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let ul = document.createElement('ul');
divRightContent.appendChild(ul);
for (index = 1; index <= 10; index += 1) {
  let li = document.createElement('li');
  li.innerText = index;
  ul.appendChild(li);
}
//9 Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.-imag