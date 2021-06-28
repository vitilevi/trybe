function createTag(input) {
  let element = document.createElement(input)
  return element;
}

//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let hBody = createTag('h1');
let body = document.body;
hBody.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(hBody);

//2 Adicione a tag div com a classe main-content como filho da tag body ;
let divMainContent = createTag('div');
divMainContent.className = 'main-content';
body.appendChild(divMainContent);

//3 Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let divCenterContent = createTag('div');
divCenterContent.className = 'center-content';
divMainContent.appendChild(divCenterContent);

//4 Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let p = createTag('p');
p.innerText = 'Criado e atualizado tag P dinamicamente';
divCenterContent.appendChild(p);

//5 Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let divLeftContent = createTag('div');
divLeftContent.className = 'left-content';
divMainContent.appendChild(divLeftContent);

//6 Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let divRightContent = createTag('div');
divRightContent.className = 'right-content';
divMainContent.appendChild(divRightContent);

//7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let img = createTag('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
divLeftContent.appendChild(img);

//8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let ul = createTag('ul');
divRightContent.appendChild(ul);
for (index = 1; index <= 10; index += 1) {
  let li = createTag('li');
  li.innerText = index;
  ul.appendChild(li);
};

//9 Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.-imag
let firstH = createTag('h3');
let secondH = createTag('h3');
let thirdH = createTag('h3');
firstH.innerText = 'Primeiro H3';
secondH.innerText = 'Segundo H3';
thirdH.innerText = 'Terceiro H3';
divMainContent.appendChild(firstH);
divMainContent.appendChild(secondH);
divMainContent.appendChild(thirdH);


// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
//1 Adicione a classe title na tag h1 criada;
hBody.className = 'title';

//2 Adicione a classe description nas 3 tags h3 criadas;
firstH.className = 'description';
secondH.className = 'description'
thirdH.className = 'description'

//3 Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
divMainContent.removeChild(divLeftContent);

//4 Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
divRightContent.style.margin = 'auto';

//5 Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
divCenterContent.parentElement.style.backgroundColor = 'green';

//6 Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let ulTenth = ul.lastChild;
ul.removeChild(ulTenth);
let ulNineth = ul.lastChild;
ul.removeChild(ulNineth);
