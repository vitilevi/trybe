let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info['recorrente'] = 'sim';

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
}

for(let index in info) {  
  console.log(info[index] + ' e ' + info2[index]);
  if (index == 'nota'){
    break;
  }
}

if(info[3] === info2[3]){
  console.log('Ambos recorrentes');
}