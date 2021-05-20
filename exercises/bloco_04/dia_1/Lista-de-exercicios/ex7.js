let nota = 80;

switch(true){
  case (nota >= 90 && nota <= 100):
    console.log("Nota A");
    break

  case (nota >= 80 && nota < 90):
    console.log("Nota B");
    break
  
  case (nota >= 70 && nota < 80):
    console.log("Nota C");
    break

  case(nota >= 60 && nota < 70):
    console.log("Nota D");
    break

  case(nota >= 50 && nota < 60):
    console.log("Nota E");
    break

  case(nota < 50 && nota >= 0):
    console.log("Nota F");
    break

  default:
    console.log("Erro, nota menor do que 0 ou maior do que 100");
    break
}

// if(nota >= 90 && nota <= 100){
//   console.log("Nota A");
// } else if(nota >= 80 && nota < 90){
//   console.log("Nota B");
// } else if(nota >= 70 && nota < 80){
//   console.log("Nota C");
// } else if(nota >= 60 && nota < 70){
//   console.log("Nota D");
// } else if(nota >= 50 && nota < 60){
//   console.log("Nota E");
// } else if(nota < 50 && nota >= 0){
//   console.log("Nota F");
// } else {
//   console.log("Nota inválida");
// }




